import React, { useState } from "react";
import { logout, signInUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginfun = async (e) => {
    alert("Login");
    e.preventDefault();
    console.log("Login", email, password);
    dispatch(signInUser({ email, password }));
  };

  const logoutfunc = () => {
    dispatch(logout());
  };
  return (
    <div>
      <form onSubmit={loginfun} className="formcontainer">
        <p>Login </p>

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
        <button type="submit">Login</button>
      </form>
      <button onClick={logoutfunc()}> Logout</button>
    </div>
  );
};

export default Login;
