import { SquarePen } from "lucide-react";
import { useId } from "../hooks/useModal";
import { useGetTask } from "../hooks/useTask";
import { AnimatedDiv } from "../../../shared/ui/AnimatedDiv";

function EditTask({ children }) {
  const taskId = useId();
  const getTask = useGetTask();

  const task = getTask(taskId);

  return (
    <AnimatedDiv classes="relative m-auto flex w-[90%] max-w-[600px] flex-col rounded-lg bg-neutral-950 p-4">
      <div className="mx-auto flex items-center gap-4">
        <SquarePen className="size-7" />
        <h1 className="font-thin uppercase">{task.title}</h1>
      </div>
      <div className="mt-4 flex items-center gap-4 font-thin text-neutral-400">
        <SquarePen className="size-7 text-white" />
        <p>{task.description}</p>
      </div>
      {children}
    </AnimatedDiv>
  );
}

export { EditTask };
