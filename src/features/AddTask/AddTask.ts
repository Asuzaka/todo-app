import { Task } from "@/entities";

export function addNewTask(
  input: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  // return in case of empy input
  if (input.trim() == "") return;
  // create a  new task to add to Tasks array
  const readyTask: Task = {
    id: crypto.randomUUID(),
    text: input,
    completed: false,
    createdAt: new Date(Date.now()),
  };
  setTasks((prev) => [...prev, readyTask]);
}
