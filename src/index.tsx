import React from "react";
import ReactDOM from "react-dom";
import { UseReducerComponent } from "./UseReducerComponent";
import { UseStateComponent } from "./UseStateComponent";
import { UseEffectComponent } from "./UseEffectComponent";

ReactDOM.render(
  <div>
    <UseReducerComponent />
    <UseStateComponent />
    <UseEffectComponent />
  </div>,
  document.getElementById("root")
);
