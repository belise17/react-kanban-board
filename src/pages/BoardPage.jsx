
import { useState } from "react";
import Column from "../components/Column";
import FilterBar from "../components/FilterBar";
import useTaskFilter from "../hooks/useTaskFilter";

function BoardPage({ tasks, addTask, deleteTask, moveTask }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");

  const filteredTasks = useTaskFilter(
    tasks.filter((task) => task.status !== "archived"),
    searchTerm,
    priority
  );

  const columns = [
    {
      title: "To Do",
      status: "todo",
      color: "bg-blue-500",
    },
    {
      title: "In Progress",
      status: "in-progress",
      color: "bg-amber-500",
    },
    {
      title: "Done",
      status: "done",
      color: "bg-green-500",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status: "todo",
      priority: taskPriority,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
    setTaskPriority("Medium");
    setShowForm(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <p className="text-violet-600 font-semibold text-sm">
            WORKSPACE / PROJECTS
          </p>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
            My Task Board
          </h1>
          <p className="text-slate-500 mt-2">
            Organize your work and get things done.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-xl font-semibold h-fit"
        >
          + Add New Task
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4"
        >
          <h2 className="font-bold text-lg">Create a new task</h2>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
            rows="3"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
          />

          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="w-full p-3 border rounded-xl"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-violet-600 text-white px-5 py-2 rounded-lg"
            >
              Save Task
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-slate-100 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priority={priority}
        setPriority={setPriority}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {columns.map((column) => (
          <Column
            key={column.status}
            title={column.title}
            color={column.color}
            tasks={filteredTasks.filter(
              (task) => task.status === column.status
            )}
            onDelete={deleteTask}
            onMove={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardPage;
