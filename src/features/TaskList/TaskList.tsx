import { IoMdCheckmark } from "react-icons/io";
import { LuTrash } from "react-icons/lu";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}
interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskList({ tasks, setTasks }: TaskListProps) {
  function handleCheckClick(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function handleDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
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
              onClick={() => handleCheckClick(el.id)}
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
                onClick={() => handleDelete(el.id)}
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
