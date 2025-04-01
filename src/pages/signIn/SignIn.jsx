import { Authentication } from "../../api/Authentication";
import "./SignIn.css"
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    Authentication.login(email, password)
      .then(token => {
        console.log("Login successful, token:", token);
      })
      .catch(error => {
        console.error("Login failed:", error);
      });
  }


  return (
    <div className={"SignIn"}>
      <h1>Login</h1>
      <form className={"signin-form"}>
        <div className={"form-group"}>
          <label htmlFor="email">Email*</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={"form-group"}>
          <label htmlFor="password">Password*</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className={"FormSubmitButton"} onClick={handleSubmit}>Submit</button>
        <p>Don't have a user yet?
          <NavLink className={"signUpNavLink"} to={"/sign-up"}>Create one!</NavLink>
        </p>
      </form>
    </div>
  )
}