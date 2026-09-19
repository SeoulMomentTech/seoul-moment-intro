---
name: Seoul Moment
description: A cross-border curation platform bringing Seoul's fashion, beauty and design brands to Taiwan.
colors:
  ink: "#000000"
  paper: "#ffffff"
  ink-80: "rgb(0 0 0 / 80%)"
  ink-60: "rgb(0 0 0 / 60%)"
  ink-50: "rgb(0 0 0 / 50%)"
  ink-40: "rgb(0 0 0 / 40%)"
  ink-20: "rgb(0 0 0 / 20%)"
  ink-10: "rgb(0 0 0 / 10%)"
  ink-05: "rgb(0 0 0 / 5%)"
  paper-50: "rgb(255 255 255 / 50%)"
  on-ink-muted: "#e5e7eb"
  hairline: "#e2e8f0"
  error: "#ff383c"
  sent: "#0088ff"
typography:
  wordmark:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "150px"
    fontWeight: 600
    lineHeight: 1
  slogan:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "10rem"
    fontWeight: 700
    lineHeight: 1
  display:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: "80px"
  headline:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "50px"
    fontWeight: 700
  title:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "40px"
    fontWeight: 700
  section-title:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "100%"
  card-title:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "20px"
    fontWeight: 700
  lead:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "18px"
    fontWeight: 400
  body:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  note:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  meta:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  micro:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  control: "4px"
  field: "8px"
  chip: "0.625rem"
  media: "18px"
  sheet: "27px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "16px 20px"
  button-disabled:
    backgroundColor: "{colors.ink-10}"
    textColor: "{colors.ink-40}"
    rounded: "{rounded.control}"
    padding: "16px 20px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 12px"
  slide-control:
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    height: "40px"
    width: "40px"
  nav-item:
    textColor: "{colors.ink-50}"
  nav-item-active:
    textColor: "{colors.ink}"
  language-switcher:
    textColor: "{colors.ink}"
    typography: "{typography.note}"
    rounded: "{rounded.field}"
    padding: "4px 8px"
  scroll-cue:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "54px"
    width: "54px"
---

# Design System: Seoul Moment

## Overview

**Creative North Star: "The Editorial Runway"**

This is a fashion magazine that happens to be a website. The page is a spread, not a
dashboard: type is set enormous and cropped toward the edge, photography and video are
the argument rather than the illustration, and the empty space between things is as
deliberate as the things themselves. Nothing is decorated. A surface is either paper or
ink, and the drama comes from cutting between the two.

The palette is two colours. Black and white, and every other value in the page is one of
those two at an opacity — `black/80` for footer detail, `black/50` for an inactive nav
item, `white/50` for a progress track. There is no brand accent, no secondary hue, and no
tinted surface. Emphasis is carried entirely by weight, scale and inversion. The single
most characteristic moment in the product follows directly from that constraint: the
intro sets `SEOUL MOMENT` in `mix-blend-difference` over a white section followed by a
black one, so the wordmark inverts itself as the reader scrolls past the seam.

Motion is scroll-driven and physical rather than decorative. Lenis smooths the whole
document, GSAP ScrollTrigger scrubs the intro, and each content section has one idea —
a per-letter rise on the slogan, a fading video crossfade, a coverflow that scales its
active slide. Photography and video always run full-bleed; they are never framed, never
given a caption bar, never reduced to a thumbnail in a card.

**Key Characteristics:**

- Black and white only; greys are opacities, not colours
- Display type set very large (150px wordmark, 160px slogan) against small, plain body text
- Full-bleed imagery and video; no card component exists in the system
- Completely flat — there is not one `box-shadow` in the codebase
- Full-viewport sections stacked under a smooth-scroll root
- Trilingual (ko / en / zh-TW): every string comes from `src/i18n/messages/`

## Colors

Two colours and their opacities. The palette is a constraint the design leans on, not a
gap waiting to be filled.

### Primary

- **Ink** (`#000000`): the dark surface (the intro's second panel, the video section),
  every button fill, and all primary text. Used at full strength, never softened.
- **Paper** (`#ffffff`): the default page surface, the header, the footer, and all text
  set on ink.

### Neutral

The greys are not separate tokens — they are ink or paper at a percentage, which is why
they always sit in exact harmony with whichever surface they are on.

- **Ink 80%**: footer company details.
- **Ink 60%**: the copyright line and the contact-channel strip text.
- **Ink 50%**: inactive links in the Information sidebar.
- **Ink 40%**: disabled button text, the reCAPTCHA legal note, divider rules.
- **Ink 20%**: form field borders and input placeholders — the most-used single value in
  the system after black and white.
- **Ink 10%**: disabled button fill.
- **Ink 5%**: the contact-channel strip behind the form. The only tinted surface anywhere.
- **Paper 50%**: the slide progress track on ink.

### Tertiary

Two Tailwind defaults leak in at the edges and are worth naming so they are recognised
rather than re-invented:

- **Gray 200** (`#e5e7eb`): secondary copy on the black video section (`text-gray-200`).
- **Slate 200** (`#e2e8f0`): the footer's 1px top border.

### States

- **Error** (`#ff383c`): form validation messages.
- **Sent** (`#0088ff`): verification-succeeded confirmations.

### Named Rules

**The Two-Colour Rule.** The palette is black and white. Any other value in the page is
one of those two at an opacity. A new hex code is a decision to change the system, not a
detail — and there is currently no accent colour to reach for.

**The Inversion Rule.** A section is either paper or ink, never in between. Text colour
follows the surface: `text-white` on ink, default black on paper, `gray-200` for
secondary copy on ink and `black/60` for secondary copy on paper.

**The Surface-Tint Exception.** `black/5` behind the contact-channel strip is the only
tinted fill in the product. Everything else is pure paper, pure ink, or an image.

### Known gap

`src/styles/globals.css` carries a full shadcn/Radix OKLCH token set in `:root` and
`.dark`. Only ten of those tokens are actually consumed, all of them by
`components/ui/dialog.tsx` and `dropdown-menu.tsx`: `background`, `foreground`,
`popover`, `popover-foreground`, `muted-foreground`, `accent`, `accent-foreground`,
`border`, `ring`, `destructive`. The rest — `card`, `primary`, `secondary`, `input`,
`chart-1`…`chart-5`, `sidebar-*` — are declared but referenced nowhere, as are
`--color-gray: #707070` and the `--font-sans` / `--font-mono` aliases (their
`--font-geist-*` sources are never defined). **Treat those as scaffolding, not as
system colours**: `bg-primary` carries no meaning in this product, and the `.dark`
block never activates because nothing applies a `.dark` class.

## Typography

**Display Font:** Pretendard (with `sans-serif`)
**Body Font:** Pretendard (with `sans-serif`)

**Character:** One family doing all the work, loaded from a CDN and set on `body`.
Pretendard is a Korean-first neo-grotesque with Latin metrics close to Inter, which is
exactly what a page needs when it has to set `SEOUL MOMENT` at 150px and
`서울모먼트는 감각적인 연결을 만들어갑니다` at 14px in the same breath. Weight does the
hierarchical work: display and headings are 600–700, everything else is 400.

### Hierarchy

Sizes are literal pixel values declared per component, with narrower viewports handled by
explicit `max-*` overrides rather than a shared scale.

- **Wordmark** (600, 150px → 100 → 80 → 40): the intro `SEOUL MOMENT`, and only that.
- **Slogan** (700, 10rem → 5rem; letters drop to 50px then 40px): the hero
  `MAKE YOUR / SEOUL HERE`.
- **Display** (700, 80px/80 → 44px/44): the closing call, *We're Waiting for Our Moment*.
- **Headline** (700, 50px → 40 → 28): the centred heading above the brand coverflow.
- **Title** (700, 40px → 36 → 20): the Information section headings.
- **Section title** (700, 36px/100% → 20): the rotating heading over the video section.
- **Card title** (700, 20px → 19): the caption heading in the video section card.
- **Label** (600, 20px/20): the *Contact Us* heading on the form.
- **Lead** (400, 18px → 16 → 14): descriptive copy and card body.
- **Body** (400, 16px/16): form inputs.
- **Note** (400, 14px): footer details, the form subtitle, sidebar links.
- **Meta** (400, 13px): the contact-channel strip.
- **Micro** (400, 12px): the slide counter.

### Named Rules

**The Oversized Display Rule.** Display type is set far larger than a typical marketing
page — 150px and 160px at desktop — and is allowed to fill the viewport's width. Shrinking
it toward a conventional 48–64px hero would remove the product's most distinctive signal.

**The Weight-Not-Colour Rule.** With no accent available, emphasis comes from weight
(400 → 600 → 700) and from size. A bolded `<b>` inside a heading, and `font-bold` on an
active sidebar link, are the system's two emphasis mechanisms.

### Known gap

There is no shared type scale. The same conceptual level is expressed as `40px` in one
component and `36px` in another, and each display element carries its own four-step
`max-xl:` / `max-md:` / `max-sm:` ladder. Adding a size means copying a ladder. If this is
ever consolidated, the roles above are the natural starting set.

## Layout

The page is six sections stacked inside a Lenis smooth-scroll root
(`SectionsWrapper`). `components/ui/section.tsx` is the single primitive: `h-[100vh]
w-full`, with sections overriding the height when they carry more than a viewport.

Section heights as built:

- **Landing** — two stacked full-viewport sections (white, then black) under one wrapper,
  so the intro occupies 200vh.
- **HeroSlogan** — `calc(100vh - 72px)`, offset for the header's height.
- **CompanyIntro** — a fixed `1080px`, collapsing to `h-full` below `md`.
- **BrandCover** — full viewport, `h-auto` below `sm`.
- **Information / ContactUS** — `h-auto`; these are the two sections taller than a screen.

Horizontal structure is a set of per-section max-widths rather than one shared container:
`1920px` (BrandCover, Information, ContactUS), `1592px` (the ContactUS inner row),
`1200px` (the video section's content column and the footer), `585px` (the contact form),
`485px` (the closing headline). Padding is asymmetric where the composition calls for it —
Information runs `pr-[140px] pl-[40px]`, ContactUS runs `pr-[180px] pl-[220px]` — and
collapses to a flat `20px` gutter at mobile.

Breakpoints are written **max-width-first** (`max-2xl:`, `max-xl:`, `max-lg:`, `max-md:`,
`max-sm:`), because the desktop composition is the designed one and narrower layouts are
reductions of it. Where the two diverge structurally, the hero and the brand cover ship
separate Web and Mobile components chosen by `useMediaQuery`, with CSS
`max-sm:hidden` / `max-sm:flex` covering the server-render flash.

### Named Rules

**The Full-Viewport Section Rule.** A section fills the screen unless it genuinely holds
more content than a screen. Scroll position is the page's primary navigation.

**The Composition-Over-Grid Rule.** There is no column grid. Blocks are positioned with
flexbox and deliberate asymmetric padding, the way a spread is laid out. Introducing a
12-column grid would fight every existing section.

## Elevation & Depth

**There are no shadows in this system.** Not one `box-shadow`, at any state, on any
component. Depth is created three other ways:

1. **Inversion.** Paper against ink is the primary depth cue — the intro's white-then-black
   panels, the black video section between two white ones, and the mobile ContactUS panel,
   which rises over a black strip as a `27px` rounded top sheet.
2. **Opacity and scale on video.** The video section holds three clips; the inactive ones
   sit at `opacity-0 scale-90`, the active one at `opacity-45 scale-100` over black, so
   the footage reads as atmosphere behind the copy rather than as a background image.
3. **Overlap.** The brand coverflow uses Swiper's coverflow effect (`depth: 200`,
   `stretch: -45`, `slideShadows: false`) and scales the active slide to `1.1` with its
   inner frame at `1.25`. Slides physically overlap; proximity, not altitude, carries
   the hierarchy.

### Named Rules

**The Flat Stage Rule.** If an element needs to separate from its background, change the
background, use a 1px rule, or add space. Never add a shadow. Swiper's own slide shadows
are explicitly switched off for the same reason.

## Shapes

Corners are quiet and follow function:

- **`4px`** — buttons, inputs, textareas, and the slide controls. The most common radius
  in the product. Nearly square: these are mechanical parts.
- **`8px`** — the language switcher, the contact-channel strip, and the mobile hero's
  image chips. Softened just enough to read as a container.
- **`0.625rem`** (`rounded-lg`) — the inline image chips that expand between letters of
  the hero slogan, plus the Radix dialog and dropdown surfaces via `--radius`.
- **`18px`** — photography in the brand coverflow and the mobile cover slider.
- **`27px`, top corners only** — the mobile ContactUS sheet.
- **Fully round** — the scroll cue, a 54px ink disc (40px at mobile), and the mobile
  Information slider bullets.

Borders are 1px or absent. The Information image grid, the video section and the form
field group all use square corners.

### Named Rules

**The Near-Square Control Rule.** Controls get `4px`. A pill-shaped or heavily rounded
button would read as a consumer app widget and break the editorial register.

**The Photograph Exception Rule.** `18px` belongs to images. Applying it to a non-image
container would make the layout look like a card system, which this is not.

## Components

### Buttons

- **Shape:** `4px` radius, `16px 20px` padding, `font-semibold` when it carries a primary
  action.
- **Default:** ink fill, paper text. There is one variant; *Verify*, *Confirm*, *Send
  Message* and the modal *OK* all use it.
- **Disabled:** `black/10` fill, `black/40` text, `cursor-not-allowed`.
- **Hover:** none defined. Buttons are static at rest and on hover.

### Inputs / Fields

- **Style:** paper fill, 1px `black/20` border, `4px` radius, `16px 12px` padding, 16px
  text. Placeholders in `black/20`.
- **Layout:** fields stack at `30px` (mobile `20px`). The email and verification-code rows
  pair an input with an inline ink button at an `8px` gap.
- **Error:** the message renders below the field in `text-error`.
- **Progressive disclosure:** the verification-code row only mounts after a code has been
  sent, and the submit button stays disabled until every field including `isVerified` is
  filled.

### Navigation

- **Information sidebar:** sticky at `top-[100px]`, `min-w-[220px]`, hidden below `lg`.
  Inactive links are `black/50` with `hover:underline`; the active one is `font-bold` and
  full black, driven by an IntersectionObserver in `useActiveSection`.
- **Language switcher:** a `min-w-[110px]` outlined control in the footer, 1px black
  border, `8px` radius, 14px text, with a chevron and a Radix dropdown opening upward.
- **Header:** present in the layout but carries a `hidden` class, so no site navigation
  currently renders. Its logo slot holds a placeholder black box.

### Slide controls

- **Pagination arrows:** 40px squares with a 1px white border, on the black video section.
- **Progress:** a `203 × 1px` track at `white/50` with a solid white fill driven by the
  Swiper autoplay timer, alongside a `1 / 3` counter at 12px.
- **Bullets** (mobile Information slider): 8px discs, `black/20` inactive, solid black
  active.

### Signature component — the inverting intro

`Landing` stacks a white full-viewport section and a black one, and pins `SEOUL MOMENT`
over both in a fixed, `pointer-events-none` layer set to `mix-blend-difference`. The
wordmark therefore reads black over the white panel and white over the black one, flipping
itself at the seam with no second element and no colour change. A scrubbed ScrollTrigger
fades the layer out between the black section's top and 45% of its height.

### Signature component — the expanding slogan

The hero slogan is four words on two lines. An image chip expands inline *between two
specific letters* of whichever word is currently active — `srcPosition` picks the letter —
growing from `w-0 scale-0` to a `150px` square over 700ms. The active word cycles every
2s and pins on hover. Below `sm` a separate component swaps this for four right-aligned
lines that slide horizontally while `160px` images fade in behind them.

## Do's and Don'ts

### Do:

- **Do** build with black, white and opacities of them. Reach for weight and scale when
  something needs emphasis.
- **Do** invert wholesale: a section is paper or ink, and its text colour follows.
- **Do** let photography and video run full-bleed, and keep Swiper's slide shadows off.
- **Do** set display type large. 150px and 160px are the intended register at desktop.
- **Do** write breakpoints max-width-first, and ship a separate Mobile component when the
  composition genuinely differs rather than stacking overrides.
- **Do** add new copy to all three files in `src/i18n/messages/`, and render it through
  `Trans` or `useTranslations`.
- **Do** keep sections at `h-[100vh]` unless they hold more than a viewport.

### Don't:

- **Don't** add a `box-shadow`. The system has none, and one would announce itself.
- **Don't** introduce a second hue, a gradient, or a tinted surface beyond `black/5`.
- **Don't** reach for `bg-primary`, `bg-card`, `bg-secondary` or the `chart-*` / `sidebar-*`
  tokens. They exist in `globals.css` but carry no meaning here — see the Colors gap note.
- **Don't** give a control a pill or large radius. Controls are `4px`; `18px` belongs to
  photographs.
- **Don't** wrap sections in cards. This product has no card component and should not
  acquire one.
- **Don't** assume dark mode. The `.dark` block is declared but never applied, and the
  page's dark passages are hardcoded `bg-black` sections.
