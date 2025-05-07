import { Task } from "@/entities";
import { DeleteTask, MarkTask } from "@/features/index";
import { IoMdCheckmark } from "react-icons/io";
import { LuTrash } from "react-icons/lu";
import React from "react";

// Props
interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-3">
      {tasks.length === 0 ? (
        <span className="text-md text-center my-2 italic">
          No Tasks. Start by Adding
        </span>
      ) : (
        tasks.map((el: Task) => (
          <div
            className={`flex items-center gap-4 border border-border py-3 px-4 rounded-md ${
              el.completed ? "bg-accent/10" : null
            }`}
            key={el.id}
          >
            <button
              onClick={() => MarkTask(el.id, tasks, setTasks)}
              className={`flex items-center justify-center rounded-full min-w-6 min-h-6 cursor-pointer ${
                el.completed ? "bg-primary" : "border border-border"
              }`}
            >
              {el.completed ? (
                <IoMdCheckmark fontSize={14} color="white" />
              ) : null}
            </button>
            <span className={`text-md ${el.completed ? "line-through" : null}`}>
              {el.text}
            </span>
            <div className="ml-auto mr-[10px]">
              <span className="text-muted mr-[10px]">
                {new Date(el.createdAt).toISOString().split("T")[0]}
              </span>
              <button
                onClick={() => DeleteTask(el.id, tasks, setTasks)}
                className="cursor-pointer"
              >
                <LuTrash fontSize={14} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
