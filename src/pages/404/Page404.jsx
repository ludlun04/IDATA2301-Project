import img from "../../resources/images/404/404ErrorImage.png"
import "./Page404.css"

const Page404 = () => {
    return (
        <>
            <main className={"main404"}>
                <h1>Error 404</h1>
                <h2>Page not found!</h2>
                <img src={img} />
            </main>
        </>
    )
}

export default Page404;