import { useAuth } from "@services";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import "./Login.css";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { signin, signout, user } = useAuth();

  const [state, setState] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = ({ target: { value, name } }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(state);
    signin(state)
      .then((user) => {
        const { from } = location.state || {
          from: { pathname: "/" },
        };
        history.push(from);
      })
      .catch();
  };
  return (
    <form
      className="w-1/3 mx-auto my-auto min-w-[360px]"
      onSubmit={onSubmitHandler}
    >
      <div className="border-2 border-gray-400 shadow-md p-4 space-y-4">
        <label htmlFor="loginName" className="block">
          Username
          <input
            className="form-field"
            type="text"
            placeholder="User name"
            id="loginName"
            name="name"
            onChange={onChangeHandler}
            value={state.name}
          />
        </label>
        <label htmlFor="loginPassword" className="block">
          Password
          <input
            className="form-field"
            type="password"
            placeholder="password"
            id="loginPassword"
            name="password"
            onChange={onChangeHandler}
            value={state.password}
          />
        </label>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
