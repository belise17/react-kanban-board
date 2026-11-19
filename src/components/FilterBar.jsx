
function FilterBar({
  searchTerm,
  setSearchTerm,
  priority,
  setPriority,
}) {
  const priorities = ["All", "High", "Medium", "Low"];

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 justify-between">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-80 px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
      />

      <div className="flex flex-wrap gap-2">
        {priorities.map((item) => (
          <button
            key={item}
            onClick={() => setPriority(item)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              priority === item
                ? "bg-violet-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-violet-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
