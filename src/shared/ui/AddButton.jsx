import { Plus } from "lucide-react";

function AddButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="absolute bottom-6 left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center gap-1 rounded-full bg-gradient-to-tl from-violet-300 to-violet-500 px-4 py-1 text-neutral-950"
    >
      <Plus className="size-9" />
      <span className="translate-y-[.5px] text-2xl font-bold">{children}</span>
    </button>
  );
}

export { AddButton };
