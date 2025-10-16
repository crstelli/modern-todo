import { Close } from "./Close";
import { Confirm } from "./Confirm";

function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full backdrop-blur-sm">
      {children}
    </div>
  );
}

Modal.Close = Close;
Modal.Confirm = Confirm;

// Creare un Compond Component

export { Modal };
