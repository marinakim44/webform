import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ModalAlert from "../ModalAlert";
import "../App.css";
import "../Medium.css";
import axios from "axios";
import Buttons from "../Buttons";

export default function Question19({ lng }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("q19")) {
      setInput(JSON.parse(localStorage.getItem("q19")));
    }

    if (localStorage.getItem("q19-other")) {
      setOther(localStorage.getItem("q19-other"));
    }

    if (localStorage.getItem("q19-checked")) {
      setChecked(JSON.parse(localStorage.getItem("q19-checked")));
    }
  }, []);
  const rows =
    lng === "English"
      ? [
          {
            key: "key1",
            value:
              "The global tax policy change is not applicable to our company",
          },
          {
            key: "key2",
            value:
              "Engaged tax specialists to advise our company on potential implications",
          },
          {
            key: "key3",
            value: "Modeled the cash tax’s impact on our company",
          },
          {
            key: "key4",
            value:
              "Conducted scenario planning regarding where our company will pay taxes",
          },
          {
            key: "key5",
            value: "Encouraged government officials to support the tax policy",
          },
          {
            key: "key6",
            value:
              "Recommended additional tax policy changes to government officials",
          },
        ]
      : [
          {
            key: "key1",
            value:
              "Глобальное изменение налоговой политики не распространяется на нашу компанию  ",
          },
          {
            key: "key2",
            value:
              "Привлекла налоговых специалистов, чтобы проконсультировать нашу компанию о возможных последствиях",
          },
          {
            key: "key3",
            value: "Смоделировала влияние денежного налога на нашу компанию ",
          },
          {
            key: "key4",
            value:
              "Проведела сценарное планирование относительно того, где наша компания будет платить налоги ",
          },
          {
            key: "key5",
            value:
              "Предложила правительственным чиновникам поддержать налоговую политику",
          },
          {
            key: "key6",
            value:
              "Рекомендовала государственным служащим дополнительные изменения в налоговой политике ",
          },
        ];

  const width = window.screen.width;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const [none, setNone] = useState(false);
  const [dontknow, setDontknow] = useState(false);
  const [input, setInput] = useState([]);
  const [checked, setChecked] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
    key5: false,
    key6: false,
  });
  const [other, setOther] = useState("");

  function handleChange(e) {
    const { name } = e.target;

    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name],
      };
    });

    setNone(false);
    setDontknow(false);
  }

  useEffect(() => {
    Object.entries(checked)
      .filter((x) => x[1] === true)
      .forEach((x) => {
        if (!input.includes(x[0])) {
          input.push(x[0]);
        }
      });

    Object.entries(checked)
      .filter((x) => x[1] === false)
      .forEach((x) => {
        if (input.includes(x[0])) {
          setInput(input.filter((a) => a !== x[0]));
        }
      });
  }, [checked, input]);

  function handleChangeOther(e) {
    setOther(e.target.value);
    setNone(false);
    setDontknow(false);
  }

  function handleNone() {
    setNone(!none);
  }

  function handleDontknow() {
    setDontknow(!dontknow);
  }

  useEffect(() => {
    if (none) {
      setDontknow(false);
      setInput([]);
      setChecked(false);
    }
  }, [none]);

  useEffect(() => {
    if (dontknow) {
      setNone(false);
      setInput([]);
      setChecked(false);
    }
  }, [dontknow]);

  useEffect(() => {
    localStorage.setItem("q19", JSON.stringify(input));
    localStorage.setItem("q19-none", none);
    localStorage.setItem("q19-dontknow", dontknow);
    localStorage.setItem("q19-other", other);
    localStorage.setItem("q19-checked", JSON.stringify(checked));
  }, [input, none, dontknow, other, checked]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0 && none === false && dontknow === false && !other) {
      handleShow();
    } else {
      const data = {
        uuid: localStorage.getItem("uuid"),
        name: localStorage.getItem("name"),
        company: localStorage.getItem("company"),
        title: localStorage.getItem("title"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q2dontknow: localStorage.getItem("q2-dontknow"),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4-list")),
        q4other: localStorage.getItem("q4-other"),
        q5: JSON.parse(localStorage.getItem("q5")),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),
        q8: localStorage.getItem("q8"),
        q9: localStorage.getItem("q9"),
        q10a: JSON.parse(localStorage.getItem("q10a")),
        q10b: JSON.parse(localStorage.getItem("q10b")),
        q11: JSON.parse(localStorage.getItem("q11")),
        q12: JSON.parse(localStorage.getItem("q12")),
        q13a: localStorage.getItem("q13a"),
        q13b: localStorage.getItem("q13b"),
        q14: JSON.parse(localStorage.getItem("q14")),
        q15: JSON.parse(localStorage.getItem("q15")),
        q16: localStorage.getItem("q16"),
        q17: JSON.parse(localStorage.getItem("q17")),
        q18: JSON.parse(localStorage.getItem("q18")),
        q19: JSON.parse(localStorage.getItem("q19")),
        q19none: localStorage.getItem("q19-none"),
        q19dontknow: localStorage.getItem("q19-dontknow"),
        q19other: localStorage.getItem("q19-other"),
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

      history.push("/eng-q20");
    }
  }

  return (
    <Route path="/eng-q19">
      <div className="main">
        <div className="sticky-sub-div">
          <h2 className="percent">
            {Math.round(((100 / 39) * 20).toString())}%{" "}
            {lng === "English" ? "completed" : "завершено"}
          </h2>
          <div className="progressBarEmpty">
            <div
              className="progressBarFilled"
              style={{
                width: ((100 / 39) * 20).toString() + "%",
              }}
            ></div>
          </div>
          <ModalAlert show={show} close={handleClose} />
          {lng === "English" ? (
            <>
              <p className="question">
                What actions has your company taken, if any, to prepare for
                potential global tax policy change that would make all countries
                commit to an effective corporate tax rate of at least 15%?
              </p>
              <p className="question-i">
                <i>PLEASE SELECT ALL THAT APPLY</i>
              </p>
            </>
          ) : (
            <>
              <p className="question">
                Какие действия предприняла ваша компания, если таковые были, для
                подготовки к потенциальному глобальному изменению налоговой
                политики, в результате которой все страны должны будут принять
                эффективную ставку корпоративного налога на уровне не менее 15%?
              </p>
              <p className="question-i">
                <i>ПРОСЬБА УКАЗАТЬ ВСЕ, ЧТО ПРИМЕНИМО</i>
              </p>
            </>
          )}
        </div>
        {width <= 768 ? (
          <div className="left-align-text">
            {rows.map((row) => {
              return (
                <div className="m-div" key={row.key}>
                  <label>
                    <input
                      style={{ marginRight: "8px" }}
                      type="checkbox"
                      name={row.key}
                      value={row.key}
                      onChange={handleChange}
                      checked={checked[`${row.key}`] === true ? true : false}
                    />
                    {row.value}
                  </label>
                </div>
              );
            })}
            <div style={{ width: "100%" }}>
              <Form.Control
                type="text"
                placeholder={
                  lng === "English"
                    ? "Other (please specify)"
                    : "Прочие действия (просьба указать)"
                }
                value={none || dontknow ? "" : other}
                onChange={handleChangeOther}
                className="input-text"
                style={{ marginTop: "2rem" }}
              ></Form.Control>
            </div>
            <div className="back-next-btns m-none-dontknow-div">
              <Button
                variant={none ? "warning" : "outline-dark"}
                type="button"
                onClick={handleNone}
                className="none-btn"
              >
                {lng === "English"
                  ? "NONE OF THE ABOVE"
                  : "Наша компания не предпринимала каких-либо действий"}
              </Button>
              <Button
                variant={dontknow ? "warning" : "outline-dark"}
                type="button"
                onClick={handleDontknow}
                className="dontknow-btn"
              >
                {lng === "English" ? "DON'T KNOW" : "Затрудняюсь ответить"}
              </Button>
            </div>
          </div>
        ) : (
          <Form style={{ textAlign: "left" }}>
            {rows.map((row) => {
              return (
                <Form.Group key={row.key}>
                  <label>
                    <input
                      style={{ marginRight: "8px" }}
                      type="checkbox"
                      name={row.key}
                      value={row.key}
                      onChange={handleChange}
                      checked={checked[`${row.key}`] === true ? true : false}
                    />
                    {row.value}
                  </label>
                </Form.Group>
              );
            })}
            <Form.Control
              type="text"
              placeholder={
                lng === "English"
                  ? "Other (please specify)"
                  : "Прочие действия (просьба указать)"
              }
              value={none || dontknow ? "" : other}
              onChange={handleChangeOther}
              className="text-input"
            ></Form.Control>

            <Button
              variant={none ? "warning" : "outline-dark"}
              type="button"
              onClick={handleNone}
              className="none-btn"
            >
              {lng === "English"
                ? "NONE OF THE ABOVE"
                : "Наша компания не предпринимала каких-либо действий"}
            </Button>
            <Button
              variant={dontknow ? "warning" : "outline-dark"}
              type="button"
              onClick={handleDontknow}
              className="dontknow-btn"
            >
              {lng === "English" ? "DON'T KNOW" : "Затрудняюсь ответить"}
            </Button>
          </Form>
        )}
        <Buttons lng={lng} click={handleSubmit} />
      </div>
    </Route>
  );
}
