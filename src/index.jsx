import ReactDOM from "react-dom";
import { App } from "./components";
import "./styles/index.css";
import { AppContext } from "./contexts/AppContext";

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById("root")
);
