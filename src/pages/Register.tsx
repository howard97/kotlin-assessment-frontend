import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phoneNumber,
        address,
        username,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>

      <input
        type="text"
        className="form-control"
        placeholder="firstname"
        required
        onChange={(e) => setFirstname(e.target.value)}
      />

      <input
        type="text"
        className="form-control"
        placeholder="lastname"
        required
        onChange={(e) => setLastname(e.target.value)}
      />

      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Phone Number"
        required
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Address"
        required
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Register;
