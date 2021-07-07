import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const history = useHistory();
  const [state, setState] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = ({ target: { value, name } }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));
  const onSubmitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      history.push("/dashboard");
    }, 2000);
  };
  return (
    <form
      className="w-1/3 mx-auto my-auto min-w-[360px]"
      onSubmit={onSubmitHandler}
    >
      <div className="border-2 border-gray-400 shadow-md p-4 space-y-4">
        <label for="loginName">Username</label>
        <input
          className="form-field"
          type="text"
          placeholder="User name"
          id="loginName"
          name="name"
          onChange={onChangeHandler}
          value={state.name}
        />
        <label for="loginPassword">Password</label>
        <input
          className="form-field"
          type="password"
          placeholder="password"
          id="loginPassword"
          name="password"
          onChange={onChangeHandler}
          value={state.password}
        />
        <button className="btn" type="button" onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
