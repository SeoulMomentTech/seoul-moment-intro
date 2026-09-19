# Git & delivery

- Branches: work lands on `develop`; `main` is the release branch. PRs target `main` only
  for releases.
- Commit messages are Conventional Commits in English, lowercase subject:
  `feat: add sitemap`, `chore(security): update nextjs version to 15.3.8`,
  `refactor: i18n translation file structure`, `style: adjust button, input width`.
  `feat:` is used broadly, including for content/config updates.
- `.husky/pre-commit` runs `pnpm lint-staged`; a commit that produces any ESLint warning in
  staged `src` files is rejected (`--max-warnings=0`). Fix the code rather than passing
  `--no-verify`.
- `.env*` is gitignored. `NEXT_PUBLIC_GA_ID` is the only variable in `.env.local`.
- Deployment artifacts referenced in code: `https://intro.seoulmoment.com.tw` (sitemap) and
  an older `https://seoul-moment.netlify.app` OG image URL in the layout metadata.
