"use client";

import TaskInput from "@/features/TaskInput/TaskInput";
import TaskList from "@/features/TaskList/TaskList";
import { useEffect, useState } from "react";
interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default function Card() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-col gap-3 py-6 px-4">
      {/* Task input */}
      <TaskInput setTasks={setTasks} />
      {/* Tasks list */}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
