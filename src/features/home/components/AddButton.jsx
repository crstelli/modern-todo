import { Plus } from "lucide-react";

function AddButton() {
  return (
    <button className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1 rounded-full bg-gradient-to-br from-violet-200 to-violet-600 px-4 py-1 text-black">
      <Plus className="size-9" />
      <span className="translate-y-[.5px] text-2xl font-bold">Task</span>
    </button>
  );
}

export { AddButton };
