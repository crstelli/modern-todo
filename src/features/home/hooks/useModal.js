import { useModalStore } from "../stores/useModalStore";

export const useModal = () => useModalStore((state) => state.modal);
export const useId = () => useModalStore((state) => state.editId);

export const useModalAdd = () => useModalStore((state) => state.addTask);
export const useModalEdit = () => useModalStore((state) => state.editTask);
export const useModalClose = () => useModalStore((state) => state.close);
