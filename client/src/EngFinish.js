import { Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

export default function EngFinish({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    // window.localStorage.clear();
  }, []);
  return (
    <Route path="/eng-finish">
      <div className="main" style={{ height: width <= 768 ? "100vh" : "" }}>
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 39).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 39).toString() + "%",
              }}
            ></div>
          </div>
          <div>
            {lng === "English" ? (
              <>
                {" "}
                <h1 className="intro-heading">Thank you!</h1>
                <p className="intro-text">
                  CLOSE SURVEY: This concludes our survey. Thank you for taking
                  the time to answer our questions. Your responses will be
                  combined with others at the aggregate, industry, region and
                  country/territory level to reveal a consensus of opinion on
                  these issues. Your data may also be combined with other
                  research conducted by PwC or publicly available information in
                  order to obtain further insight. All responses will be kept
                  completely confidential, and individual responses will never
                  be attributed without your prior consent.
                </p>
              </>
            ) : (
              <>
                <h1 className="intro-heading">Благодарим за участие!</h1>
                <p className="intro-text">
                  ЗАВЕРШЕНИЕ ОПРОСА: На этом наш опрос завершен. Благодарим Вас
                  за то, что уделили время и ответили на наши вопросы. Ваши
                  ответы будут внесены с остальными в базу на агрегированном,
                  отраслевом, региональном и территориальном уровнях для
                  достижения консенсуса по данным вопросам. Ваши данные также
                  могут быть объединены с другим исследованием, проведенным PwC,
                  или с общедоступной информацией для дальнейшего изучения. Все
                  ответы будут храниться в условиях строжайшей
                  конфиденциальности, и они никогда не будут обнародованы без
                  Вашего предварительного согласия.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Route>
  );
}
