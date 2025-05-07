"use client";

import { Task } from "@/entities";
import { FaPlus } from "react-icons/fa";
import { addNewTask } from "@/features/index";
import React, { useState } from "react";

// Prop
interface TaskInputProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskInput({ setTasks }: TaskInputProps) {
  const [newTask, setNewTask] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      TaskAction();
    }
  }

  function TaskAction() {
    addNewTask(newTask, setTasks);
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
        onClick={() => TaskAction()}
        className="w-[16%] rounded-lg bg-primary flex items-center justify-center cursor-pointer"
      >
        <FaPlus color="white" />
      </button>
    </div>
  );
}
