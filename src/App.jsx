
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";
import { initialTasks } from "./data/initialTasks";

import BoardPage from "./pages/BoardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  // Global tasks state
  const [tasks, setTasks] = useLocalStorage(
    "kanban-tasks",
    initialTasks
  );

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Simulated initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // ADD TASK
  function addTask(newTask) {
    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ]);
  }

  // MOVE TASK
  function moveTask(id, newStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  }

  // UPDATE TASK
  function updateTask(id, updatedData) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedData }
          : task
      )
    );
  }

  // DELETE TASK
  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  // Navigation links
  const navigation = [
    { name: "Board", path: "/" },
    { name: "Archive", path: "/archive" },
  ];

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>

        <p className="mt-4 font-semibold text-slate-600">
          Loading your workspace...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

          <NavLink
            to="/"
            className="text-2xl font-extrabold text-violet-700"
          >
            TaskFlow<span className="text-slate-900">.</span>
          </NavLink>

          <nav className="flex items-center gap-3">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-100 text-violet-700"
                      : "text-slate-500 hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-5 py-8">

        <Routes>

          {/* BOARD PAGE */}
          <Route
            path="/"
            element={
              <BoardPage
                tasks={tasks}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
              />
            }
          />

          {/* TASK DETAILS PAGE */}
          <Route
            path="/task/:id"
            element={
              <TaskDetailPage
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            }
          />

          {/* ARCHIVE PAGE */}
          <Route
            path="/archive"
            element={
              <ArchivePage
                tasks={tasks}
                moveTask={moveTask}
                deleteTask={deleteTask}
              />
            }
          />

          {/* NOT FOUND */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-slate-400">
        TaskFlow © 2026. Manage your work smarter.
      </footer>

    </div>
  );
}

export default App;
