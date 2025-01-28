import "./Contact.css"

export default function Contact() {
    return (
        <div className={"Contact"}>
            <h1>Contact Us</h1>
            <p>If you have any questions please shoot us a message or come by our office 🚘</p>
            <form className={"contact-form"}>
                <label htmlFor="fname">Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label htmlFor="lname">Email:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="lname">Subject:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="lname">Message:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}