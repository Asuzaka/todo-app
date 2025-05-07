import { Card } from "@/widgets/index";
import { MainCard } from "@/widgets/index";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex items-center justify-center min-h-dvh">
      <div className="flex flex-col shadow-2xl shadow-shadow rounded-2xl">
        <MainCard />
        <hr className="border border-border" />
        <Card />
      </div>
    </main>
  );
}
