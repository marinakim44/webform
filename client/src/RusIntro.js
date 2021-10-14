import { Button } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";

export default function RusIntro() {
  const history = useHistory();
  return (
    <Route exact path="/rus-intro">
      <div className="main">
        <h1 className="intro-heading">
          25-ый Ежегодный опрос руководителей крупнейших компаний мира
        </h1>
        <p className="intro-text">
          Ежегодный опрос руководителей крупнейших компаний, проводимый PwC на
          протяжении более двух десятилетий, позволяет ознакомиться с мнениями
          лидеров бизнеса по всему миру. В этом году, мы отмечаем 25-ю годовщину
          глобального исследования и 10-ю годовщину в Казахстане.
          <br />
          <br /> Мы надеемся, что результаты опроса, по традиции публикуемые в
          Давосе накануне ежегодного Всемирного экономического форума, будут
          стимулировать новое мышление и глубокое понимание взаимосвязи между
          внешними силами, стратегическими целями, реакцией организаций и
          корпоративной эффективностью. Многие вопросы этого года отражают наше
          стремление проводить более тщательное исследование, и мы хотим заранее
          поблагодарить вас за участие.
          <br />
          <br /> Результаты казахстанской версии исследования будут представлены
          совместно с Forbes Kazakhstan в апреле 2022 года.
          <br />
          <br />
          <i>
            Данное исследование проводится в соответствии с Кодексом поведения
            Ассоциации Рыночных Исследований, обеспечивающего конфиденциальность
            и анонимность участников. Если Вы пройдете опрос, Ваши ответы будут
            внесены с остальными в базу на агрегированном, промышленном,
            региональном или территориальном уровнях для достижения консенсуса
            по данным вопросам. Ваши данные также могут быть объединены с
            другими исследованиями, проведенными PwC, или общедоступной
            информацией для дальнейшего изучения. Все ответы будут храниться в
            условиях строжайшей конфиденциальности, и они никогда не будут
            обнародованы без вашего предварительного согласия.
          </i>
        </p>
        <Button
          style={{ border: "none" }}
          className="next-btn"
          onClick={() => history.push("/rus-start")}
        >
          Начать
        </Button>
      </div>
    </Route>
  );
}
