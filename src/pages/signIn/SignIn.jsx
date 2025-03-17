import "./SignIn.css"

export default function SignIn() {
    return (
        <div className={"SignIn"}>
            <h1>Login</h1>
            <form className={"signin-form"}>
                <div className={"form-group"}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" id="password" />
                    <button className={"forgot-passwordButton"}>Forgot Password</button>
                </div>
                <input className={"FormSubmitButton"} type="submit" value="Send" />
            </form>
        </div>
    )
}