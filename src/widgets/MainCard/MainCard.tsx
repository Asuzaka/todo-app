import { ThemeToggle } from "@/widgets/index";

export function MainCard() {
  return (
    <div className="flex justify-between items-center py-6 px-4 rounded-t-lg">
      <h1 className="text-xl font-bold">Todo List</h1>
      <ThemeToggle />
    </div>
  );
}
