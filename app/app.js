require("babel-core/register");
require("babel-polyfill");

import App from "./form";
import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  render(<App/>, document.getElementById("app-container"));
});