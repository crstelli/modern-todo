import { create } from "zustand";

export const useModalStore = create((set) => ({
  modal: "home",
  editId: null,

  addTask: () => set(() => ({ modal: "addTask" })),
  editTask: (id) => set(() => ({ modal: "editTask", editId: id })),
  close: () => set(() => ({ modal: "home", id: null })),
}));
