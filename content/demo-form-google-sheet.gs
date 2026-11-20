/**
 * Book a demo → Google Sheet ("Leads", tab Sheet1) + a message in Slack.
 *
 * Set up once (in the Leads sheet):
 *   1. Extensions › Apps Script. Delete what's there, paste this file, Save.
 *   2. Deploy › New deployment › type "Web app".
 *        Execute as: Me    ·    Who has access: Anyone
 *   3. Authorise, then copy the Web app URL (ends in /exec).
 *   4. Put that URL in DEMO_SHEET_URL in demo/index.html.
 * After editing this script, use Deploy › Manage deployments › Edit › New version
 * so the same URL keeps working.
 *
 * Slack (each request is also posted to the sales channel):
 *   1. Create a Slack incoming webhook for the channel (api.slack.com/apps ›
 *      Create New App › From scratch › Incoming Webhooks › On ›
 *      Add New Webhook to Workspace › pick the channel › Allow). Copy the URL.
 *   2. In Apps Script: Project Settings (gear) › Script Properties ›
 *      Add property  SLACK_WEBHOOK_URL = <the webhook URL>  › Save.
 *      Never paste the URL into this file or the repo: the repo is public.
 *   3. Deploy › Manage deployments › Edit › New version, and allow the new
 *      "connect to an external service" permission when asked.
 *   4. Run testSlack once from the editor to check the message arrives.
 * If Slack is down or the property is missing, the row is still saved.
 *
 * Columns (row 1): Submitted at (WIB) · Full name · Work email · WhatsApp number ·
 * Business name · Website or store link · Monthly sales · Interested in ·
 * Anything we should know? · Page · Status
 */
const SHEET_NAME = 'Sheet1';
const SHEET_LINK = ''; // optional: the Leads sheet's URL, shown as a button in Slack

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Bots fill the hidden "company_url" field; people never see it.
  if (p.company_url) return out_({ ok: true });

  const clean = v => String(v || '').trim().slice(0, 2000)
    // stop a value from being read as a formula
    .replace(/^[=+\-@]/, "'$&");

  const name = clean(p.name), email = clean(p.email), wa = clean(p.wa), company = clean(p.company);
  if (!name || !email || !wa || !company) return out_({ ok: false, error: 'missing' });

  const when = Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyy-MM-dd HH:mm');
  const lead = {
    when, name, email, wa, company,
    site: clean(p.site), size: clean(p.size), interest: clean(p.interest), msg: clean(p.msg), page: clean(p.page)
  };

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    sheet.appendRow([when, name, email, wa, company, lead.site, lead.size, lead.interest, lead.msg, lead.page, 'New']);
  } finally {
    lock.releaseLock();
  }

  try { postToSlack_(lead); } catch (err) { console.error('Slack: ' + err); }
  return out_({ ok: true });
}

/* One Slack message per request. Values are escaped so a visitor can't add links or @mentions. */
function postToSlack_(l) {
  const url = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
  if (!url) return;
  const esc = v => String(v || '').replace(/^'(?=[=+\-@])/, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const or = v => esc(v) || '–';
  const waDigits = String(l.wa).replace(/\D/g, '').replace(/^0/, '62');
  const fields = [
    ['Name', esc(l.name)],
    ['Business', esc(l.company)],
    ['Work email', esc(l.email)],
    ['WhatsApp', waDigits ? `<https://wa.me/${waDigits}|${esc(l.wa)}>` : esc(l.wa)],
    ['Website or store', or(l.site)],
    ['Monthly sales', or(l.size)],
    ['Interested in', or(l.interest)],
    ['Submitted', `${esc(l.when)} WIB`]
  ];
  const blocks = [
    { type: 'header', text: { type: 'plain_text', text: `New demo request: ${String(l.company).slice(0, 120)}`, emoji: true } },
    { type: 'section', fields: fields.map(([k, v]) => ({ type: 'mrkdwn', text: `*${k}*\n${v}` })) }
  ];
  if (l.msg) blocks.push({ type: 'section', text: { type: 'mrkdwn', text: `*Anything we should know?*\n>${esc(l.msg).replace(/\n/g, '\n>')}` } });
  blocks.push({ type: 'context', elements: [{ type: 'mrkdwn', text: `From ${or(l.page)}${SHEET_LINK ? ` · <${SHEET_LINK}|Open the Leads sheet>` : ''}` }] });

  const res = UrlFetchApp.fetch(url, {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ text: `New demo request from ${esc(l.name)} (${esc(l.company)})`, blocks })
  });
  if (res.getResponseCode() !== 200) console.error('Slack ' + res.getResponseCode() + ': ' + res.getContentText());
}

/* Run once from the editor to check the Slack message (sample data, nothing is saved). */
function testSlack() {
  postToSlack_({
    when: Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyy-MM-dd HH:mm'),
    name: 'Rina Putri (test)', email: 'rina@brand.co.id', wa: '+62 812-3456-7890', company: 'Aruna Studio',
    site: 'arunastudio.com', size: 'Under Rp100.000.000', interest: 'Checkout, Shipping',
    msg: 'Test message from the Apps Script editor.', page: '/demo/'
  });
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
