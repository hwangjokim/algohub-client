# ALGOHUB

본 프로젝트는 숭실대학교 컴퓨터학부 2024 소프트웨어공모전 은상 수상작 AlgoHub 의 NextJS 마이그레이션 프로젝트 입니다.

> 2024.09.05 ~

## 🔗 기술 스택

|  **category**   |          **stack**           |
| :-------------: | :--------------------------: |
|    `Common`     | `eslint`, `prettier`, `npm`  |
|   `Language`    |  `TypeScript`,`JavaScript`   |
|     `Build`     |            `Vite`            |
|   `Framework`   |           `NextJS`           |
|     `Style`     |        `Tailwind CSS`        |
| `Data Fetching` |    `Axios`, `React-Query`    |
| `Collaboration` | `Notion`, `Figma`, `Discord` |

## 🎯 기능 목록

## 🖋️ 컨벤션

브랜치 전략 : `#이슈번호/prefix/간략-설명`

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 apis
	|      |-- member.ts
	|      |-- reservation.ts
	|-- 📁 app
	|      |-- 📁onboarding
  |           |-- pages.tsx
	|      |-- pages.tsx
	|-- 📁 assets
	|      |-- 📁imgs
	|      |-- 📁svgs
	|-- 📁 components
	|      |--📁common
	|      |--📁shared
	|-- 📁 constants
	|      |-- index.ts (상수 데이터 많다면 분리)
	|-- 📁 hooks
	|      |-- 📁 commons
	|          |-- useOverlay.ts
	|      |-- 📁 query
	|          |-- useGroupQuery.ts
	|-- 📁 styles
	|      |-- fonts.ts
	|      |-- GlobalStyle.ts
	|      |-- theme.ts
	|-- 📁 types
	|      |-- groupTypes.ts
	|-- 📁 utils
	|      |-- date.ts
|-- .eslintrc.json
|-- .gitignore
```
