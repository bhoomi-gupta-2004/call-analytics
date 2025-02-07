![Screenshot 2025-02-06 185415](https://github.com/user-attachments/assets/bc656de4-e36d-4732-adec-b30b42fb83fd)
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

  ![Screenshot 2025-02-06 185455](https://github.com/user-attachments/assets/f5240789-5444-47f1-8d27-20e434af783d)
![Screenshot 2025-02-06 185439](https://github.com/user-attachments/assets/e0c52316-4ff2-4aa6-9014-5d0e96926c97)
![Screenshot 2025-02-06 185426](https://github.com/user-attachments/assets/a03b00be-7aa5-4461-a9e6-030c7e55e67e)
  ```
- Check TypeScript errors by running:
  ```sh
  npm run lint
  ```

## Author
Developed by **[Your Name]**

## License
This project is licensed under the **MIT License**.

