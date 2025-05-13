import { useState } from "react";
import { Authentication } from "../../api/Authentication";
import "./SignIn.css"
import { NavLink, useNavigate } from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export default function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    setLoading(true);

    Authentication.login(email, password)
      .then(token => {
        navigate("/dashboard/user/details");
        console.log("Login successful, token:", token);
        setLoading(false);
        signIn();
      })
      .catch(error => {
        if (error.code === "ERR_NETWORK") {
          setError("Network error. Unable to reach server.");
        } else if (error.response && error.response.status === 401) {
          setError("Invalid email or password.");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }

        setLoading(false);
      })
  }

  return (
    <div className={"SignIn"}>
      <h1>Login</h1>
      <form className={"signin-form"}>
        <p>{error}</p>
        <div className={"form-group"}>
          <label htmlFor="email">Email*</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={"form-group"}>
          <label htmlFor="password">Password*</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className={"FormSubmitButton"} onClick={handleSubmit}>{loading ? "Loading" : "Submit"}</button>
        <p>Don't have a user yet?
          <NavLink className={"signUpNavLink"} to={"/sign-up"}>Create one!</NavLink>
        </p>
      </form>
    </div>
  )
}