import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import styles from '../styles/CalendarBooking.module.scss';
const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className={styles.myDatePicker} selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default CalendarComponent;
