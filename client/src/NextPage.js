import { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NextNextPage from "./NextNextPage";
import { nextSubmit } from "./actions";

function NextPage() {
  const [input, setInput] = useState("");

  const submit = useSelector((state) => state.submit);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(nextSubmit(input));
  }

  return (
    <BrowserRouter>
      <Route path="/next-page">
        <div>
          <h1>Next page</h1>
          <p>It should display input from previous page</p>
          <h3>{submit}</h3>
          <form>
            <input
              type="text"
              placeholder="one more input"
              name="nextSubmit"
              value={input}
              onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <Link to="/next-next-page">
            <button>Next page</button>
          </Link>
        </div>
      </Route>
      <Switch>
        <Route path="/next-next-page">
          <NextNextPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default NextPage;
