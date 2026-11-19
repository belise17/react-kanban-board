
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function TaskDetailPage({ tasks, updateTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((item) => item.id === id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "Medium",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
      });
    }
  }, [task]);

  if (!task) {
    return (
      <div className="bg-white p-10 rounded-2xl text-center">
        <h2 className="text-2xl font-bold">Task not found</h2>
        <Link to="/" className="text-violet-600 mt-4 inline-block">
          Back to board
        </Link>
      </div>
    );
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateTask(id, formData);
    navigate("/");
  }

  function handleDelete() {
    deleteTask(id);
    navigate("/");
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
      <Link to="/" className="text-violet-600 font-semibold text-sm">
        ← Back to Board
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900 mt-5 mb-2">
        Edit Task
      </h1>

      <p className="text-slate-500 mb-7">
        Update your task information.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-2">Task Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 pt-3">
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold"
          >
            Delete Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskDetailPage;
