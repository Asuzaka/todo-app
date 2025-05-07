import { Task } from "@/entities";

export function handleDelete(
  id: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  setTasks(tasks.filter((task) => task.id !== id));
}
