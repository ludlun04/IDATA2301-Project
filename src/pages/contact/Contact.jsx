import "./Contact.css"

export default function Contact() {
  return (
    <div className={"Contact"}>
      <h1 className={"ContactHeader"}>Contact Us</h1>
      <p className={"ContactMessage"}>If you have any questions please send us a message or come by our office 🚘</p>
      <form className={"contact-form"}>
          <div className={"form-group"}>
              <label htmlFor="fname">Name*</label><br />
              <input className={"contactInput name"} type="text" id="name" name="fname" /><br />
          </div>
          <div className={"form-group"}>
              <label htmlFor="lname">Email*</label><br />
              <input className={"contactInput email"} type="text" id="email" name="lname" /><br />
          </div>
          <div className={"form-group"}>
              <label htmlFor="lname">Subject*</label><br />
              <input className={"contactInput subject"} type="text" id="subject" name="lname" /><br />
          </div>
          <div className={"form-group"}>
              <label htmlFor="lname">Message*</label><br />
              <textarea className={"contactInput message"} type="text" id="message" name="lname" /><br />
          </div>
        <input className={"FormSubmitButton"} type="submit" value="Send" />
      </form>
    </div>
  )
}