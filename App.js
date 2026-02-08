import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste ",
  React.createElement("strong", { style: { color: "red" } }, "React "),
);
console.log(heading);

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);
