# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`seoul-moment/intro` — the SeoulMoment marketing landing page. Next.js 15 App Router +
React 19 + TypeScript (strict), Tailwind v4, next-intl (ko / en / zh-TW), GSAP + Lenis +
Swiper for scroll animation. One page, three locales, no backend of its own.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`; do not use npm/yarn).

```bash
pnpm install
pnpm dev      # next dev --turbopack → http://localhost:3000 (redirects to /{locale})
pnpm build    # production build — the only full type check (tsconfig has noEmit)
pnpm start    # serve the build
pnpm lint     # next lint
npx tsc --noEmit                     # type check without building
npx eslint src/path/to/File.tsx      # lint one file
npx prettier --write src/path/to/File.tsx
```

There is **no test framework** in this project — verification is `pnpm build` plus lint.
Don't claim tests pass; don't add a test runner unless asked.

Lint must be clean at zero warnings: the pre-commit hook runs `lint-staged` with
`eslint --max-warnings=0` over staged `src` files.

## Reference docs

Load the relevant file from `.claude/reference/` before working in that area; don't read
them all upfront. Paths below are relative to the project root.

| Read this | When |
| --- | --- |
| [architecture.md](.claude/reference/architecture.md) | Request/middleware flow, directory contract, adding or reordering a page section, SSR-vs-client split, external endpoints. |
| [code-style.md](.claude/reference/code-style.md) | Writing or editing any `.tsx`/`.ts` — the ESLint rules that actually bite (import order, `jsx-sort-props`, `import type`, `interface` over `type`). |
| [i18n.md](.claude/reference/i18n.md) | Any user-visible copy, new message keys, locale routing, the language switcher. |
| [styling.md](.claude/reference/styling.md) | Tailwind v4 tokens (no config file), `cn()` usage, the max-width-first breakpoint convention, global Swiper overrides. |
| [animation.md](.claude/reference/animation.md) | GSAP / `useGSAP` / ScrollTrigger / Lenis work, section scroll behavior, Web vs Mobile component splits. |
| [api-and-forms.md](.claude/reference/api-and-forms.md) | The `ky` service layer, new endpoints, the contact form's verify → reCAPTCHA → send flow. |
| [git-workflow.md](.claude/reference/git-workflow.md) | Branching, commit message format, the pre-commit hook, env vars. |

## Non-obvious constraints

- `src/middleware.ts` — not `routing.ts` — owns locale detection (`localeDetection` is
  `false`); it redirects bare paths using `Accept-Language`.
- Tailwind v4 has no `tailwind.config.js`: theme tokens live in `@theme inline` inside
  `src/styles/globals.css`.
- `ky` is configured with `prefixUrl`, so service paths must be relative
  (`"auth/email/code"`, never `"/auth/email/code"`).
- `next/image` only allows `res.cloudinary.com`; new hosts need `next.config.ts`.
- New copy must be added to all three files in `src/i18n/messages/`.
