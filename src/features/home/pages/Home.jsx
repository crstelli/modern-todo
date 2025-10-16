import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { TaskList } from "../components/TaskList";

import { AddButton } from "../components/AddButton";
import { Modal } from "../../../shared/ui/Modal/Modal";

import { AddTask } from "../components/AddTask";
import { EditTask } from "../components/EditTask";

import { AnimatedDiv } from "../../../shared/ui/AnimatedDiv";

function Home() {
  const isAdd = false;
  const isEdit = false;

  return (
    <AnimatedDiv classes="flex relative min-h-screen w-screen flex-col bg-neutral-900 bg-gradient-to-t from-neutral-900 to-black/96 text-violet-100">
      <Header />
      <Title />
      <TaskList />
      <AddButton />
      {isAdd && (
        <Modal>
          <AddTask>
            <Modal.Close />
            <Modal.Confirm>Add</Modal.Confirm>
          </AddTask>
        </Modal>
      )}
      {isEdit && (
        <Modal>
          <EditTask>
            <Modal.Close />
            <Modal.Confirm>Confirm</Modal.Confirm>
          </EditTask>
        </Modal>
      )}
    </AnimatedDiv>
  );
}

export { Home };
