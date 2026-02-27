import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export default function Modal({ isOpen, onClose, children, title = "new modal" }) {
  if (!isOpen) return null; //Validar que este abierto

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
            
            <h2 className="modal-title">{title}</h2>
            <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} color="red"></FontAwesomeIcon>
            </button>

        </div>
        <div className="form-container">
            {children}
        </div>
        

      </div>
    </div>
  );
}