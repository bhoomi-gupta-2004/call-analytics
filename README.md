# VOX Gauge - Call Center Analytics Dashboard

## Overview
VOX Gauge is a simplified Call Center Analytics Dashboard built using **React + Vite + TypeScript + Material UI**. It focuses on displaying a **conversation list view** with search, filtering, and expandable row functionalities.

## Features
✅ **Search Conversations** by owner
✅ **Filter by Type** (Sales/Marketing)
✅ **Filter by Talk Ratio**
✅ **Expandable Rows** to show summary
✅ **Circular Progress Indicator** for Talk Ratio
✅ **Responsive UI** using Material UI

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **UI Library:** Material UI
- **State Management:** React useState
- **Build Tool:** Vite

## Project Structure
```
vox-gauge/
│── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Filters.tsx
│   │   ├── ConversationList.tsx
│   ├── context/
│   │   ├── ConversationContext.tsx
│   ├── data/
│   │   ├── mockData.ts
│   ├── types/
│   │   ├── conversation.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│── package.json
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/vox-gauge.git
   cd vox-gauge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the browser and visit:
   ```
   http://localhost:5173/
   ```

## Build & Deployment
To build the project for production:
```sh
npm run build
```
This will create a `dist/` folder with the production-ready files.

## Issues & Debugging
- If the build fails, try:
  ```sh
  npm run build --force
  ```
- Check TypeScript errors by running:
  ```sh
  npm run lint
  ```

## Author
Developed by **[Your Name]**

## License
This project is licensed under the **MIT License**.

