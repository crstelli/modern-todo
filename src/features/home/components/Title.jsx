import { useTasks } from "../hooks/useTask";

function Title() {
  const tasksLength = useTasks().length;

  if (tasksLength > 0)
    return (
      <h1 className="mx-auto mt-20 w-[70%] text-center text-2xl font-medium">
        You have{" "}
        <span className="font-bold text-violet-400">{tasksLength}</span> tasks
        left for today
      </h1>
    );

  return (
    <h1 className="m-auto w-[70%] text-center text-2xl font-medium">
      <span className="font-thin text-violet-300 uppercase">
        Congratulations!
      </span>
      <br />
      You have completed all your tasks for today!
    </h1>
  );
}

export { Title };
