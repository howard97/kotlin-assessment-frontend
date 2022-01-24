import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Appointment = (props: { patientId: string }) => {
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    let patientId = props.patientId;
    await fetch("http://localhost:8080/api/v1/scheduleAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        appointmentName,
        appointmentDate,
        patientId,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="appointment Name"
          required
          onChange={(e) => setAppointmentName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="appointment date"
          required
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit Appointment
      </button>
    </form>
  );
};

export default Appointment;
