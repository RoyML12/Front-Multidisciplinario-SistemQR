import React, { useEffect, useState } from "react";
import css from "./Reloj.module.css";
export const Reloj = () => {
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  }, []);

  useEffect(() => {
    setCurrentDate(new Date());
  }, [time]);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className={css.reloj}>
      <i class="bi bi-clock"></i>
      <h1>{formatTime(time)}</h1>
    </div>
  );
};
