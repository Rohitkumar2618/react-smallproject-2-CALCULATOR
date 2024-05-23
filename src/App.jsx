import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("0");

  const handleClickButton = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
    }
  };

  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center">
      <div className="border-4 p-5 border-green-500 rounded-lg shadow-lg">
        <h1
          id="input"
          className="text-3xl font-bold mb-4 flex items-center justify-center"
        >
          {input}
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="btn bg-gray-300 p-2 hover:bg-gray-400"
            onClick={() => handleClickButton("C")}
          >
            C
          </button>
          <button className="btn bg-gray-300 hover:bg-gray-400">&lt;</button>
          <button className="btn bg-gray-300 hover:bg-gray-400">%</button>
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600"
            onClick={() => handleClickButton("/")}
          >
            /
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("7")}
          >
            7
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("8")}
          >
            8
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("9")}
          >
            9
          </button>
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600"
            onClick={() => handleClickButton("*")}
          >
            *
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("4")}
          >
            4
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("5")}
          >
            5
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("6")}
          >
            6
          </button>
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600"
            onClick={() => handleClickButton("-")}
          >
            -
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("1")}
          >
            1
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("2")}
          >
            2
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("3")}
          >
            3
          </button>
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600"
            onClick={() => handleClickButton("+")}
          >
            +
          </button>
          <button
            className="btn col-span-2 hover:bg-gray-200"
            onClick={() => handleClickButton("0")}
          >
            0
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton("00")}
          >
            00
          </button>
          <button
            className="btn hover:bg-gray-200"
            onClick={() => handleClickButton(".")}
          >
            .
          </button>
          <button
            className="btn bg-green-500 hover:bg-green-600 col-span-2"
            onClick={() => handleClickButton("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
