
import TaskCard from "./TaskCard";

function Column({ title, tasks, color, onDelete, onMove }) {
  return (
    <section className="bg-slate-100 rounded-2xl p-4 min-h-96">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          <h2 className="font-bold text-slate-800">{title}</h2>
        </div>

        <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-slate-600">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onMove={onMove}
            />
          ))
        ) : (
          <p className="text-center text-slate-400 text-sm py-8">
            No tasks yet
          </p>
        )}
      </div>
    </section>
  );
}

export default Column;
