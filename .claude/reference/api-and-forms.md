# API layer & forms

## HTTP client

`src/services/index.ts` exports a single `ky` instance: `prefixUrl
https://api.seoulmoment.com.tw`, JSON content type, 10s timeout. Because `ky` uses
`prefixUrl`, **endpoint paths must not start with `/`** (`api.post("auth/email/code")`).

Endpoints live in `src/services/auth.ts`, each a thin typed function returning
`.json<...>()` directly:

- `postEmail({ to, subject, name, html })` — sends the contact mail.
- `postEmailCode(email)` — issues a verification code.
- `verifyEmailCode({ email, code })`.
- `verifyRecaptcha(token)`.

New endpoints go in a sibling file under `src/services/`, keep the request/response
interfaces next to the function, and let `ky` throw (callers use try/catch).

## Contact form

`src/app/[locale]/components/ContactUS/EmailForm.tsx` is the only real form. Shape:

- `react-hook-form` `useForm<EmailInputs>` with all fields given defaults; `watch()` +
  an `isEmpty`/`isDisabled` derivation gates the submit button.
- Email ownership is proven before submit: `postEmailCode` → user enters code →
  `verifyEmailCode` → `setValue("isVerified", true)`.
- `react-google-recaptcha` v2 checkbox; the site key is hardcoded as `RECAPTCHA_SITE_KEY`
  in the component, and the token is verified server-side through `verifyRecaptcha` before
  `postEmail` runs.
- Result feedback goes through `ModalStatus` state (`src/types/index.ts`) rendered by
  `../modal/AlertModal`, not `alert()` — the one remaining `alert()` (missing reCAPTCHA) is
  a leftover, don't copy it.
