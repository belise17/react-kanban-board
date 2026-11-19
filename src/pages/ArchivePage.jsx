
import { Link } from "react-router-dom";

function ArchivePage({ tasks, moveTask, deleteTask }) {
  const archivedTasks = tasks.filter(
    (task) => task.status === "done" || task.status === "archived"
  );

  return (
    <div>
      <Link to="/" className="text-violet-600 font-semibold text-sm">
        ← Back to Board
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900 mt-5">
        Task Archive
      </h1>

      <p className="text-slate-500 mt-2 mb-7">
        Completed and archived tasks.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {archivedTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 rounded-2xl border border-slate-200"
          >
            <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
              {task.status === "done" ? "Completed" : "Archived"}
            </span>

            <h2 className="font-bold text-lg mt-4">{task.title}</h2>

            <p className="text-sm text-slate-500 mt-2">
              {task.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                onClick={() => moveTask(task.id, "todo")}
                className="text-sm bg-violet-100 text-violet-700 px-3 py-2 rounded-lg"
              >
                Restore
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-sm bg-red-50 text-red-600 px-3 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {archivedTasks.length === 0 && (
        <p className="text-center bg-white p-10 rounded-2xl text-slate-500">
          No archived tasks yet.
        </p>
      )}
    </div>
  );
}

export default ArchivePage;
