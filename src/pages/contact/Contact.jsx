import "./Contact.css"

export default function Contact() {
  return (
    <div className={"Contact"}>
      <h1>Contact Us</h1>
      <p>If you have any questions please shoot us a message or come by our office 🚘</p>
      <form className={"contact-form"}>
        <label htmlFor="fname">Name:</label><br />
        <input className={"contactInput name"} type="text" id="name" name="fname" /><br />
        <label htmlFor="lname">Email:</label><br />
        <input className={"contactInput email"} type="text" id="email" name="lname" /><br />
        <label htmlFor="lname">Subject:</label><br />
        <input className={"contactInput subject"} type="text" id="subject" name="lname" /><br />
        <label htmlFor="lname">Message:</label><br />
        <textarea className={"contactInput message"} type="text" id="message" name="lname" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}