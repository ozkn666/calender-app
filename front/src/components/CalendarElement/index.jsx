import React from "react";

import dayjs from "dayjs"

import * as styles from "./style.css";
import { Typography } from "@material-ui/core"

const CalendarElement = ({ day }) => {
  
  // 1日の場合、月情報を追加する
  const isFirstDay = day.date() === 1
  const format = isFirstDay ? "M月D日" : "D"

  // 当日か判定
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
