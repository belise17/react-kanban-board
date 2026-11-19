
import { useMemo } from "react";

function useTaskFilter(tasks, searchTerm, priority) {
  return useMemo(() => {
    return tasks.filter((task) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        task.title.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search);

      const matchesPriority =
        priority === "All" || task.priority === priority;

      return matchesSearch && matchesPriority;
    });
  }, [tasks, searchTerm, priority]);
}

export default useTaskFilter;
