"use client";

import { Task } from "@/entities";
import { useEffect, useState } from "react";
import { GetStoredTasks, StoreTasks } from "@/features";
import { TaskInput } from "@/widgets/index";
import { TaskList } from "@/widgets/index";

export function Card() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    GetStoredTasks(setTasks);
  }, []);

  useEffect(() => {
    StoreTasks(tasks);
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
