import React from "react";
import { Link } from "react-router-dom";

const Home = (props: { username: string }) => {
  console.log(props.username);

  return (
    <div>
      {props.username ? (
        <p>
          Hi, Kindly make an appointment
          <Link to="/appointment">Doctor Appointment</Link>
        </p>
      ) : (
        "You are not authenticated!!"
      )}
    </div>
  );
};

export default Home;
