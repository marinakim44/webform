import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

function NextNextPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const q1 = useSelector((state) => state.submit);
  const q2 = useSelector((state) => state.nextSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);

    const inputs = {
      q1: q1,
      q2: q2,
    };

    axios.post("/allinputs", inputs);
  }

  return (
    <BrowserRouter>
      <Route path="/next-next-page">
        {!isSubmitted ? (
          <div>
            <h1>Next next page</h1>
            <p>This page should return input from previous page</p>
            <h3>Input from previous page: {q2}</h3>
            <h3>Input from first page: {q1}</h3>
            <button onClick={handleSubmit}>Submit survey</button>
          </div>
        ) : (
          <h1>Thank you for participating</h1>
        )}
      </Route>
    </BrowserRouter>
  );
}

export default NextNextPage;
