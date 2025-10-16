import { useState } from "react";
import { useAddTask } from "../hooks/useTask";
import { useModalClose } from "../hooks/useModal";

function AddTask({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const closeModal = useModalClose();
  const addTask = useAddTask();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;

    addTask(title, description || "No Description");

    setTitle("");
    setDescription("");
    closeModal();
  }

  return (
    <div className="relative m-auto flex flex-col rounded-lg bg-neutral-950 p-4">
      <h1 className="font-thin uppercase">Add a new task</h1>
      <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="rounded-lg border border-neutral-700 px-4 py-1 font-semibold placeholder:text-neutral-600 focus:border-violet-400 focus:outline-none"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={3}
          className="resize-none rounded-lg border border-neutral-700 px-4 py-2 text-neutral-400 placeholder:text-neutral-600 focus:border-violet-400 focus:outline-none"
        />
        {children}
      </form>
    </div>
  );
}

export { AddTask };
