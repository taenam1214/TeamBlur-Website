Below is a **simple** README template you can adapt to your Next.js project. It assumes you’re using **TypeScript** and may optionally use **SVGR** for importing SVGs.

---

# MYNEXTAPP

A **Next.js** (version 13+) project with TypeScript, showcasing a Contact page and SVG handling.

## Getting Started

1. **Clone** this repo:
   ```bash
   git clone https://github.com/NayunKang/Blur_Website.git
   cd blur-website/my-next-app
   ```
2. **Install** dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

## Build & Production

```bash
npm run build
npm run start
```
This compiles your Next.js app for production and serves it.

## Project Structure

```
MY-NEXT-APP/
├─ .next/                # Auto-generated build output
├─ node_modules/
├─ public/
│   └─ ...               # Public assets (images, etc.)
├─ src/
│   ├─ app/
│   │   ├─ contact/
│   │   │   ├─ contact.css
│   │   │   └─ Contact.tsx
│   │   ├─ dashboard/
│   │   ├─ features/
│   │   ├─ lineup/
│   │   └─ userFeedback/
│   ├─ assets/
│   │   ├─ berkeley.svg
│   │   ├─ ig.svg
│   │   ├─ linkedin.svg
│   │   ├─ x.svg
│   │   └─ ...           # Other SVGs
│   └─ types.d.ts
├─ next.config.js
├─ package.json
├─ tsconfig.json
└─ README.md
```

- **`src/app/contact/`**: Contains the Contact page component and its styles.  
- **`src/assets/`**: Stores SVG icons (if you’re using SVGR or a custom loader).  
- **`public/`**: Place any images or static files you want to serve directly (e.g. `/my-image.png`).

## SVG Handling

1. **Using SVGR** (import as a React component):  
   - Make sure you have `@svgr/webpack` installed and configured in `next.config.js`:
     ```js
     // next.config.js
     module.exports = {
       webpack(config) {
         config.module.rules.push({
           test: /\.svg$/,
           use: ["@svgr/webpack"],
         });
         return config;
       },
     };
     ```
   - Then import:
     ```tsx
     import MyIcon from "../../assets/ig.svg";

     export default function Example() {
       return <MyIcon />;
     }
     ```
   - **Important**: Turbopack (Next’s new dev server) may ignore custom webpack rules. If so, run `npm run dev` 
