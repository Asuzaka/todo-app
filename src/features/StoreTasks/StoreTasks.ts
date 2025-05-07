import { Task } from "@/entities";

export function StoreTasks(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
