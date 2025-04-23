import { useState } from "react";
import { Authentication } from "../../api/Authentication";
import "./SignIn.css"
import { NavLink, useNavigate } from "react-router-dom";
import {useAuth} from "../../authcontext/AuthContext";

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

    console.log("Email:", email);
    console.log("Password:", password);

    setLoading(true);

    Authentication.login(email, password)
      .then(token => {
        navigate("/dashboard");
        console.log("Login successful, token:", token);
      })
      .catch(error => {
        setError("Login failed. Please check your credentials.");
        console.error("Login failed:", error);
      }).finally(() => {
        setLoading(false);
        signIn();
      });
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