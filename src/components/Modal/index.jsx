import "./Modal.css";


export const Modal = ({ isOpen, onClose }) => {

  return (
    // Rendered only when propped variable: isOpen = true
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Hello, this is a modal!</h2>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    )
  );
};

export default Modal;