import { Modal, Button } from "react-bootstrap";

export default function ModalAlert(props) {
  const lng = localStorage.getItem("language");
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Body>
          {lng === "English"
            ? "Please fill in all required fields"
            : "Пожалуйста, заполните все необходимые поля"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
