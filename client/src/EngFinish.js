import { Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

export default function EngFinish({ lng }) {
  const width = window.screen.width;
  useEffect(() => {
    window.scrollTo(0, 0);
    window.localStorage.clear();
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
                  CLOSE SURVEY: <br />
                  <br />
                  Why do we use it? It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like).
                </p>
              </>
            ) : (
              <>
                <h1 className="intro-heading">Благодарим за участие!</h1>
                <p className="intro-text">
                  CLOSE SURVEY: <br />
                  <br />
                  Why do we use it? It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like).
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Route>
  );
}
