# 1pageKCH0263 — KCH0263 單頁 Landing Page

> 桃園航空城 KCH0263 重劃區的單頁式宣傳頁面。
> 共用人設與工作流見上層 `/Antigravity/CLAUDE.md`。

## 技術棧 (Tech Stack)

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **UI**: Lucide React icons, clsx + tailwind-merge
- **Hosting**: GitHub Pages (`gh-pages` branch)

## 常用指令 (Commands)

```bash
npm run dev            # Local dev server
npm run build          # Production build (tsc + Vite)
npm run deploy         # Build + deploy to GitHub Pages
npm run lint           # ESLint
```

## 專案結構 (Project Structure)

```text
src/                   # React 原始碼
public/                # 靜態資源
dist/                  # Build 輸出
scripts/               # 輔助腳本
```
