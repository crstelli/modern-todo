import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist((set, get) => ({
    tasks: [
      {
        id: 1,
        title: "Complete this project",
        description: "I need to complete this project today",
        check: true,
      },
    ],

    getTask: (id) => get().tasks.find((t) => t.id === id),

    addTask: (title, description) =>
      set((state) => {
        const newTask = {
          title,
          description,
          id: Date.now(),
          check: false,
        };

        return { tasks: [...state.tasks, newTask] };
      }),

    checkTask: (id) =>
      set((state) => ({
        tasks: state.tasks.map((t) => {
          if (t.id !== id) return t;
          return { ...t, check: !t.check };
        }),
      })),

    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      })),
  })),
);
