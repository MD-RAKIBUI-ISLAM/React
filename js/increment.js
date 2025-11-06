// const domContainer = document.querySelector("#root");

// const Increment = () => {
//   return (
//     <div>
//       <h1 id="display">0</h1>
//       <div>
//         <button id="button">Increment +</button>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<Increment/>, domContainer);

// let number = 0;
// const button = document.querySelector('#button');
// const display = document.querySelector('#display');

// button.addEventListener("click", () =>{
//     number++;
//     display.textContent = number;
// })

// import React from "react";

const domContainer = document.querySelector("#root");

const Increment = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">{counter}</h1>
      <div>
        <button id="button" onClick={() => setCounter(counter + 1)}>
          Increment +
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <div className="container">
    <Increment />,
    <Increment />,
    <Increment />,
  </div>,

  domContainer
);
