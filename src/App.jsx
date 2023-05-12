import { useState } from "react";
import questions from "./components/Data";
import Accordion from "./components/Accordion";

function App() {
  return (
    <section className="conatiner items-center text-center min-h-[100vh]">
      <div className="bg-white mx-auto shadow-lg mt-[5rem] mb-[7rem] rounded-md py-8 px-2 max-w-[800px]">
        <h1 className="capitalize font-normal text-5xl">Questions</h1>
        {questions.map((question) => {
          return <Accordion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
}

export default App;
