import React, { useState } from "react";
import questions from "./Data";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function Accordion({ title, info }) {
  const [data, setData] = useState(false);
  return (
    <article className=" max-w-[700px] rounded-md border-solid border-2 border-gray-100 bg-white shadow-lg p-4 my-8 m-auto">
      <div className="question grid grid-flow-col py-0 justify-between">
        <h2 className="font-semibold text-xl font-sans capitalize">{title}</h2>
        <button
          type="button"
          class="text-4xl text-zinc-600"
          onClick={() => setData(!data)}
        >
          {data ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </div>
      {data && (
        <p className="capitalize font-mono pt-2 text-zinc-600">{info}</p>
      )}
    </article>
  );
}

export default Accordion;
``;
