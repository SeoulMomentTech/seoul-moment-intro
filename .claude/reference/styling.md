# Styling

Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`). There is **no `tailwind.config.js`** —
all theme configuration is CSS in `src/styles/globals.css`, imported once from the layout.

## Tokens

`@theme inline { ... }` maps Tailwind color/radius utilities onto CSS variables defined in
`:root` (and `.dark`). Project-specific tokens worth knowing:

- Colors: `--color-gray: #707070`, `--color-error: #ff383c`, `--color-sent: #0088ff`
  (use as `text-gray`, `bg-error`, …) plus the shadcn-style `background/foreground/primary/
  muted/border/...` set in oklch.
- Layers: `--z-index-header: 50`, `--z-index-modal: 100` → `z-header`, `z-modal`.
  Don't introduce raw `z-[999]`.
- Radius scale derives from `--radius: 0.625rem`.
- Font: Pretendard, imported from jsDelivr at the top of `globals.css` and applied to `body`.

A `.dark` variant block exists but nothing toggles it; the site is light-only in practice.

## Class composition

Always `cn()` from `@/utils/style` (clsx + tailwind-merge) when merging an incoming
`className` with defaults. The house pattern is one `cn()` call with **grouped string
arguments** — layout on one line, responsive overrides on the next:

```tsx
className={cn(
  "z-header sticky top-0 left-0 w-full bg-white",
  "flex h-[72px] justify-between px-8",
  "hidden max-md:h-[48px] max-md:px-4",
)}
```

Breakpoints are used **max-width first** (`max-2xl:`, `max-xl:`, `max-md:`, `max-sm:`) —
desktop values are the base, mobile values are the overrides. Follow that direction rather
than mixing in `md:`-up utilities.

## Global overrides

The bottom of `globals.css` overrides Swiper internals per section
(`.company-intro .swiper-slide`, `.cover-flow .swiper-slide*`, `.info-box
.swiper-pagination-bullet`). These rely on the wrapper class names set in the corresponding
section components — renaming a section wrapper class silently breaks its slider layout.
Keep new Swiper tweaks in the same place, scoped by a section class, and use `@apply` with
Tailwind's `!` suffix (`w-[400px]!`) as the existing rules do.
