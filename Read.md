# TaskFlow – React Kanban Task Board

A modern and responsive Kanban Task Management application built with React, Vite, React Router, and Tailwind CSS.

## Live Demo

[View TaskFlow Live](https://react-kanban-board-belise-ic66l1dnw-belise17.vercel.app)

## GitHub Repository

[View Source Code](https://github.com/belise17/react-kanban-board)

## About The Project

TaskFlow is a front-end task management application that helps users organize, manage, and track their daily tasks using a Kanban board.

Users can create tasks, update task details, change task statuses, filter tasks, and manage completed tasks through an archive page.

The application uses React state management and browser LocalStorage to keep tasks saved between page refreshes.

## Features

- **Create Tasks:** Add new tasks with titles, descriptions, and priorities.
- **View Tasks:** Display tasks in organized Kanban columns.
- **Update Tasks:** Edit task titles, descriptions, priorities, and statuses.
- **Delete Tasks:** Remove tasks when they are no longer needed.
- **Move Tasks:** Change tasks between Todo, In Progress, and Done.
- **Search:** Find tasks using their titles or descriptions.
- **Priority Filters:** Filter tasks by High, Medium, or Low priority.
- **Task Details:** Open a dedicated page to view and edit individual tasks.
- **Archive:** View completed tasks and restore archived tasks.
- **LocalStorage:** Save tasks in the browser so they remain available after refreshing.
- **Responsive Design:** Designed to work across different screen sizes.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- React Router DOM
- Tailwind CSS
- HTML5
- CSS3
- Browser LocalStorage

## Project Structure

```text
react-kanban-board/
│
├── src/
│   ├── data/
│   │   └── initialTasks.js
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useTaskFilter.js
│   │
│   ├── components/
│   │   ├── Column.jsx
│   │   ├── TaskCard.jsx
│   │   └── FilterBar.jsx
│   │
│   ├── pages/
│   │   ├── BoardPage.jsx
│   │   ├── TaskDetailPage.jsx
│   │   └── ArchivePage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/belise17/react-kanban-board.git
```

### 2. Navigate to the Project Folder

```bash
cd react-kanban-board
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Build for Production

```bash
npm run build
```

## React Concepts Demonstrated

This project demonstrates important React concepts, including:

- Functional Components
- Props and State
- Lifting State Up
- Prop Drilling
- React Hooks (`useState`, `useEffect`, `useMemo`, and `useRef`)
- Custom Hooks
- React Router
- Conditional Rendering
- List Rendering
- LocalStorage Data Persistence
- Component Reusability

## Data Persistence

TaskFlow uses the browser's LocalStorage to save task information.

This allows users to refresh the page without losing their saved tasks in the same browser.

No external backend or API is required.

## Deployment

The application is deployed using Vercel.

**Live Application:**  
https://react-kanban-board-belise-ic66l1dnw-belise17.vercel.app

## Author

**Belise Uwase**

GitHub: [belise17](https://github.com/belise17)

## License

This project was created for educational purposes.