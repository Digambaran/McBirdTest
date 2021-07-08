import { useAuth } from "@services";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { signin } = useAuth();

  const [state, setState] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = ({ target: { value, name } }) => {
    setError("");
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //handle empty fields
    if (state.name === "" || state.password === "") {
      setError("Username and Password are required!!");
      return;
    }

    //send filled data
    setLoading(true);
    signin(state)
      .then(() => {
        const { from } = location.state || {
          from: { pathname: "/dashboard" },
        };
        history.push(from);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  return (
    <form
      className="w-1/3 mx-auto my-auto min-w-[360px]"
      onSubmit={onSubmitHandler}
    >
      {/* to display error msg */}
      <div className="border-2 border-gray-400 shadow-md p-4 space-y-4">
        <div
          role="alert"
          className={`p-4 bg-red-200 text-red-500 ${
            error === "" ? "hidden" : "block"
          }`}
        >
          {error}
        </div>

        <label htmlFor="loginName" className="block">
          Username
          <input
            className={error === "" ? "form-field" : "form-field--error"}
            type="text"
            placeholder="User name"
            id="loginName"
            name="name"
            onChange={onChangeHandler}
            value={state.name}
            aria-invalid={error !== ""}
            disabled={loading}
          />
        </label>
        <label htmlFor="loginPassword" className="block">
          Password
          <input
            className={error === "" ? "form-field" : "form-field--error"}
            type="password"
            placeholder="password"
            id="loginPassword"
            name="password"
            onChange={onChangeHandler}
            value={state.password}
            disabled={loading}
          />
        </label>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Submitting.." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Login;
