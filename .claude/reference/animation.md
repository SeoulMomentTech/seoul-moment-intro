# Animation & scrolling

Stack: GSAP 3 + `@gsap/react` (`useGSAP`), `ScrollTrigger`, Lenis smooth scroll, Swiper for
carousels. Every one of these is client-only — the component must start with `"use client"`.

## Lenis

`SectionsWrapper` (`src/app/[locale]/components/SectionsWrapper.tsx`) wraps the whole page in
`<ReactLenis root>` with `height: 100vh; overflow-y: auto`. The scroll container is therefore
**not** `window` in the usual sense; ScrollTrigger works because Lenis drives it, but any new
scroll listener should be attached with this in mind. `<html>` also carries `scroll-smooth`.

## GSAP pattern

Register plugins at module scope, animate inside `useGSAP` with a `scope`, and drive refs —
never query the DOM globally:

```tsx
gsap.registerPlugin(ScrollTrigger);

const sectionRef = useRef<HTMLElement>(null);
useGSAP(() => {
  gsap.to(titleRef.current, {
    opacity: 0,
    scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom 45%", scrub: true },
  });
}, { scope: sectionRef });
```

`useGSAP` handles cleanup/reverts, so don't add manual `kill()` in an effect. Files using
this: `Landing.tsx`, `SectionThree.tsx`, `CardSlider.tsx`, `HeroSlogan/{Web,Mobile}.tsx`.

## Responsive variants

Rather than animating one tree at both sizes, sections split into `Web.tsx` / `Mobile.tsx`
and pick with `useMediaQuery` (`src/hooks/useMediaQuery.ts`, SSR-safe via a `defaultValue`).
Follow that split when a mobile timeline diverges meaningfully from desktop.

## Sections & active state

`src/components/ui/section.tsx` is the `h-[100vh] w-full` shell every section builds on.
`useActiveSection(ids, threshold)` returns the topmost visible section id via
`IntersectionObserver` (`rootMargin: "0px 0px -50% 0px"`); section elements must carry
matching `id`s for it to work.
