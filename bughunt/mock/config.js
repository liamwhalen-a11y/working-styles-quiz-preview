// config.js — deployment + data-collection settings for the Working Styles quiz.
// Edit these values only; no logic lives here.
//
// MODES:
//   ENDPOINT: ""      -> local/offline mode: pure individual quiz, no data collected, no dashboard.
//   ENDPOINT: "MOCK"  -> local demo: intake + dashboard work against an in-memory store (resets on reload).
//   ENDPOINT: "https://script.google.com/.../exec"  -> live: submits to the Apps Script / Google Sheet.
//
// See DEPLOY.md for how to create the Sheet, deploy the Apps Script, and paste the URL + token here.

const CONFIG = {
  // "MOCK" = local demo (in-memory, resets on reload). "" = individual/offline (no collection).
  // A "https://script.google.com/.../exec" URL = live. See DEPLOY.md.
  ENDPOINT: "MOCK",

  // Shared token — must match TOKEN in the Apps Script.
  TOKEN: "bf798ab425d04a74a7af371f",

  // ANONYMOUS overall-distribution mode: collect nothing identifying — each finisher's result is
  // added to the room's totals as just the archetype. No names, no email, no teams. Nothing
  // sensitive is stored or exposed, so it's safe to host on a public link. The dashboard shows
  // the whole-room split across the five styles (no per-person or per-team breakdown).
  collectName: false,
  collectEmail: false,

  // Small-cell privacy floor for the by-group view (unused when groups is empty).
  minCell: 3,

  // DEMO ONLY: PIN the demo's "Reset room results" checks against, so the gate is visible in MOCK mode.
  // In a LIVE deploy the real facilitator PIN lives in Code.gs (FACILITATOR_PIN), verified server-side —
  // it is NOT read from here, so participants never receive it.
  demoResetPin: "reset-1234",

  // No grouping dimensions — overall room distribution only (right call for a ~32-person exec group,
  // where a "by team" cut would be one person per team = individually identifying).
  groups: []
};
