import { Button } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";

export default function EngIntro({ lng }) {
  const history = useHistory();

  const handleSubmit = () => {
    const data = {
      uuid: localStorage.getItem("uuid"),
    };

    axios
      .post("/allinputs", data)
      .then((response) => {
        if (response.status === 200) {
          console.log("Data posted");
        } else {
          console.log("Response status " + response.status);
        }
      })
      .catch((err) => console.log(err.response.data));
    history.push("/eng-start");
  };

  return (
    <Route exact path="/eng-intro">
      <div className="main">
        {lng === "English" ? (
          <>
            <h1 className="intro-heading">25th Annual Global CEO Survey</h1>
            <p className="intro-text">
              For more than two decades, PwC's Annual Global CEO Survey has
              opened a unique window on the thinking of chief executives around
              the world. This year, we're celebrating our 25th anniversary of
              Global CEO Survey and 10th anniversary in Kazakhstan. <br />
              <br /> It is our hope that the survey results—historically
              released in Davos on the eve of the Annual Meeting of the World
              Economic Forum—will stimulate fresh thinking and enduring insights
              on the relationship between external forces, strategic objectives,
              organisational responses and corporate performance. Many of this
              year’s questions reflect our aspiration to dig deeper, and we want
              to thank you in advance for your participation.
              <br />
              <br /> Kazakhstan’s findings of the report will be released in
              cooperation with Forbes Kazakhstan in April 2022. <br />
              <br />
              <i>
                This research is conducted in accordance with the Market
                Research Society Code of Conduct, which is designed to safeguard
                participant confidentiality and anonymity. If you complete the
                survey, your responses will be combined with others at the
                aggregate, industry, region and country/territory level to
                reveal a consensus of opinion on these issues. Your data may
                also be combined with other research conducted by PwC or
                publicly available information in order to obtain further
                insight. All responses will be kept completely confidential, and
                individual responses will never be attributed without your prior
                consent.
              </i>
            </p>
          </>
        ) : (
          <>
            <h1 className="intro-heading">
              25-ый Ежегодный опрос руководителей крупнейших компаний мира
            </h1>
            <p className="intro-text">
              Ежегодный опрос руководителей крупнейших компаний, проводимый PwC
              на протяжении более двух десятилетий, позволяет ознакомиться с
              мнениями лидеров бизнеса по всему миру. В этом году, мы отмечаем
              25-ю годовщину глобального исследования и 10-ю годовщину в
              Казахстане.
              <br />
              <br /> Мы надеемся, что результаты опроса, по традиции публикуемые
              в Давосе накануне ежегодного Всемирного экономического форума,
              будут стимулировать новое мышление и глубокое понимание
              взаимосвязи между внешними силами, стратегическими целями,
              реакцией организаций и корпоративной эффективностью. Многие
              вопросы этого года отражают наше стремление проводить более
              тщательное исследование, и мы хотим заранее поблагодарить вас за
              участие.
              <br />
              <br /> Результаты казахстанской версии исследования будут
              представлены совместно с Forbes Kazakhstan в апреле 2022 года.
              <br />
              <br />
              <i>
                Данное исследование проводится в соответствии с Кодексом
                поведения Ассоциации Рыночных Исследований, обеспечивающего
                конфиденциальность и анонимность участников. Если Вы пройдете
                опрос, Ваши ответы будут внесены с остальными в базу на
                агрегированном, промышленном, региональном или территориальном
                уровнях для достижения консенсуса по данным вопросам. Ваши
                данные также могут быть объединены с другими исследованиями,
                проведенными PwC, или общедоступной информацией для дальнейшего
                изучения. Все ответы будут храниться в условиях строжайшей
                конфиденциальности, и они никогда не будут обнародованы без
                вашего предварительного согласия.
              </i>
            </p>
          </>
        )}

        <Button
          style={{ border: "none" }}
          className="next-btn start-btn"
          onClick={handleSubmit}
        >
          {lng === "English" ? "Start" : "Начать"}
        </Button>
      </div>
    </Route>
  );
}
