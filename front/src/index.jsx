import React from "react";
import ReactDOM from "react-dom";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import CalendarBoard from './components/CalendarBoard'

ReactDOM.render(
  <CalendarBoard />,
  document.getElementById("root")
);
