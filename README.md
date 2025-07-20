# SeoulMoment Intro

서울모먼트(SeoulMoment) 서비스의 소개를 위한 공식 랜딩 페이지 프로젝트입니다. Next.js를 기반으로 구축되었으며, 다국어 지원 및 인터랙티브한 애니메이션을 통해 사용자 경험을 향상시키는 데 중점을 두었습니다.

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP (GreenSock Animation Platform)](https://gsap.com/), [Swiper.js](https://swiperjs.com/)
- **Internationalization (i18n)**: [next-intl](https://next-intl-docs.vercel.app/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/lint-staged/lint-staged)

## 🚀 시작하기 (Getting Started)

### 사전 준비 (Prerequisites)

이 프로젝트를 실행하려면 시스템에 [Node.js](https://nodejs.org/)와 [pnpm](https://pnpm.io/)이 설치되어 있어야 합니다.

### 설치 및 실행 (Installation & Running)

1.  **의존성 설치**
    `pnpm-lock.yaml` 파일이 있으므로, `pnpm`을 사용하여 의존성을 설치하는 것을 권장합니다.

    ```bash
    pnpm install
    ```

2.  **개발 서버 실행**
    아래 명령어를 실행하여 개발 서버를 시작합니다. [Turbopack](https://turbo.build/pack)이 함께 실행됩니다.

    ```bash
    pnpm dev
    ```

    이제 브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 프로젝트를 확인할 수 있습니다.

## 📜 사용 가능한 스크립트 (Available Scripts)

-   `pnpm dev`: 개발 모드로 프로젝트를 실행합니다.
-   `pnpm build`: 프로덕션용으로 앱을 빌드합니다.
-   `pnpm start`: 빌드된 프로덕션 서버를 시작합니다.
-   `pnpm lint`: ESLint를 사용하여 코드 스타일을 검사하고 문제를 찾습니다.
