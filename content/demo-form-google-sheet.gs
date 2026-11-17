/**
 * Book a demo → Google Sheet ("Leads", tab Sheet1).
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
 * Columns (row 1): Submitted at (WIB) · Full name · Work email · WhatsApp number ·
 * Business name · Website or store link · Monthly sales · Interested in ·
 * Anything we should know? · Page · Status
 */
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Bots fill the hidden "company_url" field; people never see it.
  if (p.company_url) return out_({ ok: true });

  const clean = v => String(v || '').trim().slice(0, 2000)
    // stop a value from being read as a formula
    .replace(/^[=+\-@]/, "'$&");

  const name = clean(p.name), email = clean(p.email), wa = clean(p.wa), company = clean(p.company);
  if (!name || !email || !wa || !company) return out_({ ok: false, error: 'missing' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    sheet.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyy-MM-dd HH:mm'),
      name, email, wa, company,
      clean(p.site), clean(p.size), clean(p.interest), clean(p.msg),
      clean(p.page), 'New'
    ]);
  } finally {
    lock.releaseLock();
  }
  return out_({ ok: true });
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
