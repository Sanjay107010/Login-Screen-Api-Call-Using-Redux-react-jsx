import React, { useState } from "react";
import "../css/Register.css";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/authSlice";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const registerfun = async (e) => {
    alert("Register");
    console.log("first:::::::", email, password, name);
    e.preventDefault();
    dispatch(signUpUser({ name, email, password }));
  };
  return (
    <form onSubmit={registerfun} className="formcontainer">
      <p>Register</p>
      <label>name</label>
      <div>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />

      <label>email</label>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <label>password</label>
      <div>
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default RegisterPage;
