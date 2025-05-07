import { Task } from "@/entities";

export function handleCheckClick(
  id: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
}
