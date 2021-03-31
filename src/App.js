import React, { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";

function App() {
  const [questions, setQuestion] = useState(data);
  return (
    <main className="App">
      <div className="container">
        <h3>Questions and answer login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
