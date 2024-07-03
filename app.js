import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("h1", {}, "hello ji kaisae ho saare");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React element using jsx
const heading = <h1 className="heading">Hello ji kaise ho saare</h1>;

//React functional componment
const Headingr = () => {
  return <h1 className="headingr">hello ji functional componment here</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingr />);
