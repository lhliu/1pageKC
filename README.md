# 持家男子 KC - Personal Brand One-Page Website

這是一個為「持家男子 KC」量身打造的個人品牌單頁式網站 (One-Page Website)。
結合了 **Agile Solopreneur** 的專業形象與 **房地產理性分析** 的內容價值，旨在建立信任感並促進精準合作。

![Hero Preview](./public/vite.svg) (*建議替換為實際截圖*)

## 🚀 專案特點

- **極致效能**: 使用 Vite + React + TypeScript 構建，秒級加載。
- **Modern UI**: 採用 Tailwind CSS 與 Shadcn UI，打造 Calm Blue (理性藍) 的專業視覺風格。
- **Agile Presentation**: 內建 PDF 生成功能，可一鍵將網頁轉換為 **16:9 簡報格式** 的 Media Kit。
- **動態互動**: 使用 Framer Motion 實現流暢的微動畫 (Micro-interactions)。
- **真實數據驗證**: 整合後台數據與真實網友反饋，強化 Social Proof。

## 🛠 技術棧 (Tech Stack)

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **Animation**: Framer Motion
- **Tooling**: Puppeteer (用於生成靜態 PDF 簡報)

## 📂 專案結構

```
src/
├── assets/          # 靜態資源 (Images, Icons)
├── components/
│   ├── layout/      # 佈局組件 (Navbar, Footer)
│   ├── sections/    # 各大區塊 (Hero, Profile, Audience, Workflow...)
│   └── ui/          # 通用 UI (Button, Carousel...)
├── scripts/         # 自動化腳本 (PDF Generation)
└── App.tsx          # 主程式入口
```

## 💻 快速開始 (Development)

1.  **安裝依賴**
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**
    ```bash
    npm run dev
    ```

3.  **建置生產版本**
    ```bash
    npm run build
    ```

4.  **生成 PDF 簡報**
    此腳本會啟動 Puppeteer，將網頁截圖並儲存為高解析度 PDF。
    ```bash
    node scripts/generate_pdf.cjs
    ```
    生成檔案位於: `public/kc-presentation.pdf`

## ✨ 核心區塊 (Sections)

1.  **Hero**: 價值主張與 Call to Action (訂閱數/觀看數展示)。
2.  **Profile**: KC 個人背景 (Ex-PM, Agile Solopreneur)。
3.  **Audience**: 受眾輪廓分析 (數據驅動、高含金量)。
4.  **Case Studies**: 經典案例 (通勤實測、資產配置)。
5.  **Testimonials**: 網友真實反饋 (Social Proof)。
6.  **Workflow**: 敏捷合作模式 (Authentic & On-Site)。
7.  **Cooperation**: 合作洽詢。

## 📝 License

Private Project. Copyright © 2026 KC Liu.
