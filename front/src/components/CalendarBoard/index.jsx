import React from 'react'
import { GridList } from '@material-ui/core'
import * as styles from './style.css'

import CalendarElement from '../CalendarElement'
import { createCalendar } from '../../service/calendar'

const calendar = createCalendar()

console.log(calendar)

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalendarBoard
