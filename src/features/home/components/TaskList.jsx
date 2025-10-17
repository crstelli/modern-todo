import { Square, Check, Trash } from "lucide-react";

import { useCheckTask, useDeleteTask, useTasks } from "../hooks/useTask";
import { useModalEdit } from "../hooks/useModal";

function TaskList() {
  const tasks = useTasks();

  return (
    <div className="mx-auto mt-10 flex w-[80%] flex-col gap-4">
      {tasks.length > 0 && tasks.map((t) => <Task key={t.id} task={t} />)}
    </div>
  );
}

function Task({ task }) {
  const checkTask = useCheckTask();
  const deleteTask = useDeleteTask();

  const modalEdit = useModalEdit();

  if (task.check)
    return (
      <div className="grid cursor-pointer grid-cols-[40px_1fr_40px] items-center gap-3 rounded-lg border border-violet-300 px-4 py-2 text-violet-300">
        <Check
          onClick={() => checkTask(task.id)}
          strokeWidth={1}
          className="size-8 text-violet-400"
        />
        <span
          onClick={() => modalEdit(task.id)}
          className="font-thin uppercase"
        >
          {task.title}
        </span>
        <Trash
          className="mx-auto size-6 text-white"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    );

  return (
    <div className="grid cursor-pointer grid-cols-[40px_1fr_40px] items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2">
      <Square
        onClick={() => checkTask(task.id)}
        strokeWidth={0.7}
        className="size-8"
      />
      <span onClick={() => modalEdit(task.id)} className="font-thin uppercase">
        {task.title}
      </span>
      <Trash
        className="mx-auto size-6 text-neutral-500"
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
}

export { TaskList };
