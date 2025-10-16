import { useTaskStore } from "../stores/useTaskStore";

export const useTasks = () => useTaskStore((state) => state.tasks);
export const useGetTask = () => useTaskStore((state) => state.getTask);

export const useAddTask = () => useTaskStore((state) => state.addTask);
export const useCheckTask = () => useTaskStore((state) => state.checkTask);
export const useDeleteTask = () => useTaskStore((state) => state.deleteTask);
