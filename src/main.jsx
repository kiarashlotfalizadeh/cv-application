import { Form } from "./components/form";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./styles/styles.css";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Form />
  </StrictMode>
);
