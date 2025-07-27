"use client";

import type { PropsWithChildren } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RECAPTCHA_SITE_KEY = "6LcrtJArAAAAAAFJbOG0GtnK1V_5KX24D_f4ycwx";

export default function GoogleCapcha({ children }: PropsWithChildren) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
