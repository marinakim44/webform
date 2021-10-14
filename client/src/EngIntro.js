import { Button } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";

export default function EngIntro() {
  const history = useHistory();
  return (
    <Route exact path="/eng-intro">
      <div className="main">
        <h1 className="intro-heading">25th Annual Global CEO Survey</h1>
        <p className="intro-text">
          For more than two decades, PwC's Annual Global CEO Survey has opened a
          unique window on the thinking of chief executives around the world.
          This year, we're celebrating our 25th anniversary of Global CEO Survey
          and 10th anniversary in Kazakhstan. <br />
          <br /> It is our hope that the survey results—historically released in
          Davos on the eve of the Annual Meeting of the World Economic
          Forum—will stimulate fresh thinking and enduring insights on the
          relationship between external forces, strategic objectives,
          organisational responses and corporate performance. Many of this
          year’s questions reflect our aspiration to dig deeper, and we want to
          thank you in advance for your participation.
          <br />
          <br /> Kazakhstan’s findings of the report will be released in
          cooperation with Forbes Kazakhstan in April 2022. <br />
          <br />
          <i>
            This research is conducted in accordance with the Market Research
            Society Code of Conduct, which is designed to safeguard participant
            confidentiality and anonymity. If you complete the survey, your
            responses will be combined with others at the aggregate, industry,
            region and country/territory level to reveal a consensus of opinion
            on these issues. Your data may also be combined with other research
            conducted by PwC or publicly available information in order to
            obtain further insight. All responses will be kept completely
            confidential, and individual responses will never be attributed
            without your prior consent.
          </i>
        </p>
        <Button
          style={{ border: "none" }}
          className="next-btn"
          onClick={() => history.push("/eng-start")}
        >
          Start
        </Button>
      </div>
    </Route>
  );
}
