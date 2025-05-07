import { Task } from "@/entities";
import React from "react";

export function GetStoredTasks(
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    setTasks(JSON.parse(storedTasks));
  }
}
