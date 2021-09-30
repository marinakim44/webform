import { Modal, Button } from "react-bootstrap";

export default function ModalAlert(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Body>Please fill in all required fields</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
