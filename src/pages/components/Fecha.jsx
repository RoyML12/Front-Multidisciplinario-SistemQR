import React, { useEffect, useState } from "react";

export const Fecha = () => {
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

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div>
      <h1 className="reloj">Hoy {formatDate(currentDate)}</h1>
    </div>
  );
};
