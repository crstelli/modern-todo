import { Bell } from "lucide-react";

function Header() {
  return (
    <div className="mx-auto mt-6 grid w-[70%] min-w-[280px] grid-cols-[auto_1fr_auto] items-center gap-4 self-start">
      <div className="size-12 rounded-full bg-gradient-to-br from-violet-200 to-violet-600"></div>
      <div>
        <h2 className="font-thin text-neutral-400">Welcome back,</h2>
        <h1 className="font-bold">Giuseppe</h1>
      </div>
      <span className="flex size-12 rounded-full bg-neutral-900/70">
        <Bell className="m-auto w-6" />
      </span>
    </div>
  );
}

export { Header };
