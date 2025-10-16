import { SquarePen } from "lucide-react";
function EditTask({ children }) {
  return (
    <div className="relative m-auto flex w-[80%] flex-col rounded-lg bg-neutral-950 p-4">
      <div className="mx-auto flex items-center gap-4">
        <SquarePen />
        <h1 className="font-thin uppercase">Comprare il cane</h1>
      </div>
      <div className="mt-4 flex items-center gap-4 font-thin text-neutral-400">
        <SquarePen className="size-10 text-white" />
        <p>Andare a comprare un cane per mia sorella piú piccola</p>
      </div>
      {children}
    </div>
  );
}

export { EditTask };
