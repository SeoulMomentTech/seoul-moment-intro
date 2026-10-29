"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { type PropsWithChildren } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionsWrapper({ children }: PropsWithChildren) {
  return (
    <ReactLenis options={{ anchors: true }} root>
      {children}
    </ReactLenis>
  );
}
