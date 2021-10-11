import { Modal, Button } from "react-bootstrap";

export default function ModalAlert(props) {
  const lng = localStorage.getItem("language");
  return (
    <div className="modal-div">
      <Modal show={props.show} onHide={props.close} className="modal-window">
        <Modal.Body>
          {lng === "English"
            ? "Please fill in all required fields"
            : "Пожалуйста, заполните все необходимые поля"}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            onClick={props.close}
            className="modal-btn"
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
