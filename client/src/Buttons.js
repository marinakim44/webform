import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Buttons({ lng, click }) {
  const history = useHistory();

  return (
    <div className="back-next-btns">
      <Button
        variant="secondary"
        className="back-btn"
        onClick={() => history.goBack()}
      >
        <i className="fas fa-chevron-left back-arrow"></i>
        {lng === "English" ? "Back" : "Назад"}
      </Button>

      <Button variant="danger" className="next-btn" onClick={click}>
        {lng === "English" ? "Next" : "Далее"}
        <i className="fas fa-chevron-right next-arrow"></i>
      </Button>
    </div>
  );
}
