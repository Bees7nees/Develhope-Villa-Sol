import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import styles from '../Styles/CalendarBooking.module.scss';
const CalendarComponent = ({setDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className={styles.myDatePicker} selected={startDate} onChange={(date) => {
      setDate(date)
      setStartDate(date)}} />
  );
};

export default CalendarComponent;
