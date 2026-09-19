# Code style rules

Enforced mechanically: `.husky/pre-commit` → `pnpm lint-staged` → on every staged
`src/**/*.{js,ts,jsx,tsx}`: `prettier --write` then `eslint --cache --max-warnings=0`.
**Warnings fail the commit**, so an unused variable is as blocking as an error.

## ESLint rules that actually change how code is written

From `eslint.config.mjs` (on top of `next/core-web-vitals` + `next/typescript`):

- `import/order` — groups `builtin, external, internal, [parent, sibling], index, unknown`,
  alphabetized ascending and case-insensitive, **no blank lines between groups** in existing
  files. `@/...` imports sort in with the rest; see any component for the house shape:
  `next/*` → third-party → `@/components/...` → `@/services/...` → `@/types` → `@/utils/...`
  → relative.
- `react/jsx-sort-props` — JSX props must be alphabetical (`className` before `href` before
  `ref` before `type`). This is the rule most often broken when hand-writing JSX.
- `@typescript-eslint/consistent-type-imports` — `import type { Foo } from "..."` for types,
  split from value imports.
- `@typescript-eslint/consistent-type-definitions` — `interface`, not `type`, for object
  shapes (`type` stays fine for unions/aliases, e.g. `type LanguageCode = keyof typeof locales`).
- `@typescript-eslint/consistent-indexed-object-style` — `Record<K, V>` over index signatures.
- `@typescript-eslint/method-signature-style: ["error", "method"]`.
- `react/button-has-type` — every `<button>` needs an explicit `type`.
- `react/no-array-index-key` — never `key={index}`.
- `react/self-closing-comp` (components and html) and `react/jsx-tag-spacing`
  (space before `/>`).
- `react/jsx-pascal-case`, `react/no-deprecated`, `react/jsx-filename-extension`
  (`.tsx`/`.jsx` only).
- `unused-imports/no-unused-imports` = error; unused vars = warn but `^_`-prefixed names are
  exempt.

## Prettier

`.prettierrc`: 2-space indent, width 80, double quotes, semicolons, trailing commas
(`all`), always-parens arrows, LF. `prettier-plugin-tailwindcss` reorders Tailwind class
strings — do not hand-sort classes, run Prettier.

## Conventions the linter can't see

- Components are default exports; hooks and helpers are named exports.
- Props interfaces are declared inline above the component, usually named `Props` or
  `<Name>Props`.
- Comments in this repo are Korean and sparse — match that, don't add narration.
- Custom CSS variables in `style={{ ... }}` are allowed: `src/types/index.ts` augments
  React's `CSSProperties` with `[key: \`--${string}\`]`.
