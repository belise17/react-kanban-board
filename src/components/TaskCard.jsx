
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onMove }) {
  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <button
          onClick={() => onDelete(task.id)}
          className="text-slate-400 hover:text-red-600"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>

      <Link to={`/task/${task.id}`}>
        <h3 className="font-bold text-slate-800 hover:text-violet-600">
          {task.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
          {task.description}
        </p>
      </Link>

      <div className="mt-4 pt-3 border-t border-slate-100">
        <label className="text-xs text-slate-500 block mb-1">
          Move task
        </label>

        <select
          value={task.status}
          onChange={(e) => onMove(task.id, e.target.value)}
          className="w-full rounded-lg border border-slate-200 p-2 text-sm outline-none focus:ring-2 focus:ring-violet-400"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
          <option value="archived">Archived</option>
        </select>
      </div>
    </div>
  );
}

export default TaskCard;
