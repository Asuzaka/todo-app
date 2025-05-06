"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskInputProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskInput({ setTasks }: TaskInputProps) {
  const [newTask, setNewTask] = useState("");
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      addNewTask();
    }
  }
  function validateInput(input: string): boolean {
    if (input.trim() == "") return false;
    return true;
  }
  function addNewTask() {
    if (!validateInput(newTask)) return;
    const readyTask: Task = {
      id: crypto.randomUUID(),
      text: newTask,
      completed: false,
      createdAt: new Date(Date.now()),
    };
    setTasks((prev) => [...prev, readyTask]);
    setNewTask("");
  }
  return (
    <div className="flex gap-[4%]">
      <input
        className="w-[80%] border border-border py-2 px-5 rounded-lg"
        type="text"
        value={newTask}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        placeholder="Add a new task..."
      />
      <button
        onClick={() => addNewTask()}
        className="w-[16%] rounded-lg bg-primary flex items-center justify-center cursor-pointer"
      >
        <FaPlus color="white" />
      </button>
    </div>
  );
}
