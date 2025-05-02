import img from "../../resources/images/404/404ErrorImage.png"
import "./Page404.css"
import {useNavigate} from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/")
    }

    return (
        <>
            <main className={"main404"}>
                <h1>Error 404</h1>
                <h2>Page not found!</h2>
                <img src={img}  alt={"Crashed car image"}/>
                <button onClick={onClick}>Back to home</button>
            </main>
        </>
    )
}

export default Page404;