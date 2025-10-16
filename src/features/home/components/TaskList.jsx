import { Square } from "lucide-react";
import { Check } from "lucide-react";

function TaskList() {
  return (
    <div className="mx-auto mt-10 flex w-[80%] flex-col gap-4">
      <Task check={true} />
      <Task />
      <Task />
    </div>
  );
}

function Task({ check = false }) {
  if (check)
    return (
      <div className="flex items-center gap-3 rounded-lg border border-violet-300 px-4 py-2 text-violet-300">
        <Check strokeWidth={1} className="size-10 text-violet-400" />
        <span>Complete this project for the weekend</span>
      </div>
    );

  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2">
      <Square strokeWidth={1} className="size-10" />
      <span>Complete this project for the weekend</span>
    </div>
  );
}

export { TaskList };
