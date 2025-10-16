import { SquarePen } from "lucide-react";
import { useId } from "../hooks/useModal";
import { useGetTask } from "../hooks/useTask";

function EditTask({ children }) {
  const taskId = useId();
  const getTask = useGetTask();

  const task = getTask(taskId);

  return (
    <div className="relative m-auto flex w-[80%] flex-col rounded-lg bg-neutral-950 p-4">
      <div className="mx-auto flex items-center gap-4">
        <SquarePen />
        <h1 className="font-thin uppercase">{task.title}</h1>
      </div>
      <div className="mt-4 flex items-center gap-4 font-thin text-neutral-400">
        <SquarePen className="size-10 text-white" />
        <p>{task.description}</p>
      </div>
      {children}
    </div>
  );
}

export { EditTask };
