import { useModal, useModalAdd, useModalClose } from "../hooks/useModal";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { TaskList } from "../components/TaskList";

import { AddTask } from "../components/AddTask";
import { EditTask } from "../components/EditTask";

import { AddButton } from "../../../shared/ui/AddButton";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { AnimatedDiv } from "../../../shared/ui/AnimatedDiv";

function Home() {
  const modal = useModal();

  const addModal = useModalAdd();
  const closeModal = useModalClose();

  return (
    <AnimatedDiv classes="flex relative min-h-screen w-screen flex-col bg-neutral-900 bg-gradient-to-tr from-neutral-950 to-black/96 text-violet-100">
      <div className="mx-auto flex min-h-screen w-[95%] max-w-[800px] flex-col">
        <Header />
        <Title />
        <TaskList />
        <AddButton onClick={addModal}>Task</AddButton>
        {modal === "addTask" && (
          <Modal>
            <AddTask>
              <Modal.Close onClick={closeModal} />
              <Modal.Confirm type="submit">Add</Modal.Confirm>
            </AddTask>
          </Modal>
        )}
        {modal === "editTask" && (
          <Modal>
            <EditTask>
              <Modal.Close onClick={closeModal} />
              <Modal.Confirm onClick={closeModal}>Confirm</Modal.Confirm>
            </EditTask>
          </Modal>
        )}
      </div>
    </AnimatedDiv>
  );
}

export { Home };
