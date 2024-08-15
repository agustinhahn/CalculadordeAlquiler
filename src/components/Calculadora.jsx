import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calculadora.css";

const Calculadora = () => {
  const [date, setDate] = useState(new Date());
  const [calendarOk, setCalendarOk] = useState(false);

  console.log(date);

  const handleCalendar = () => {
    setCalendarOk(true);
  };

  useEffect(() => {
    if (calendarOk) {
      setCalendarOk(false);
    }
  }, [date]);

  return (
    <div className="container">
      <h1 className="titulo">CALCULADORA DE ALQUILERES</h1>
      <div className="elementos">
        <div className="elementos1">
          <label className="subtitulo">Valor inicial del alquiler:</label>
          <input
            type="number"
            id="alquiler"
            name="alquiler"
            placeholder="ejemplo 220000"
          />
        </div>
        <div className="elementos1">
          <label>Fecha inicio del contrato:</label>
          <button onClick={handleCalendar}>ABRIR CALENDARIO</button>
          {calendarOk ? <Calendar onChange={setDate} value={date} /> : null}
          <p>
            Fecha:{" "}
            {date.toLocaleDateString("es-ES", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="elementos1">
          <label>Cada cuanto ajusta el valor:</label>
          <select>
            <option value="1">1 mes</option>
            <option value="2">2 meses</option>
            <option value="3">3 meses</option>
            <option value="4">4 meses</option>
            <option value="5">5 meses</option>
            <option value="6">6 meses</option>
            <option value="7">7 meses</option>
            <option value="8">8 meses</option>
            <option value="9">9 meses</option>
            <option value="10">10 meses</option>
            <option value="11">11 meses</option>
            <option value="12">12 meses</option>
          </select>
        </div>
        <div className="elementos1">
          <label>Segun que indice: </label>
          <select>
            <option value="1">ICL</option>
            <option value="1">IPC</option>
            <option value="1">CER</option>
            <option value="1">IS</option>
            <option value="1">CASA PROPIA</option>
          </select>
        </div>
      </div>
      <button className="botonCalcular">CALCULAR</button>
    </div>
  );
};

export default Calculadora;
