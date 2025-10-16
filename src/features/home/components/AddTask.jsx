function AddTask({ children }) {
  return (
    <div className="relative m-auto flex flex-col rounded-lg bg-neutral-950 p-4">
      <h1 className="font-thin uppercase">Add a new task</h1>
      <form className="mt-4 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Task name"
          className="rounded-lg border border-neutral-700 px-4 py-1 font-semibold placeholder:text-neutral-600 focus:border-violet-400 focus:outline-none"
        />
        <textarea
          placeholder="Description"
          rows={3}
          className="resize-none rounded-lg border border-neutral-700 px-4 py-1 text-neutral-400 placeholder:text-neutral-600 focus:border-violet-400 focus:outline-none"
        />
      </form>
      {children}
    </div>
  );
}

export { AddTask };
