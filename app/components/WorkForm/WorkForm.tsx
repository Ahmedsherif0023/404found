import emailjs from "emailjs-com";
import "./WorkForm.css";
import "../../app.css";

const WorkForm: React.FC = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ja2txi8",
        "template_jlw38cb",
        e.target as HTMLFormElement,
        "hTnYdksS1EzyFJUc_" // or PUBLIC_KEY from new EmailJS dashboard
      )
      .then((res) => {
        alert("Email sent!");
      })
      .catch((err) => {
        alert("Failed to send email.");
        console.log(err);
      });
  };

  return (
 <form onSubmit={sendEmail} className="contact-form">
  <div className="Name-and-Email">
    <div className="Name">
      <span>Full Name</span>
      <input type="text" name="full_name" placeholder="Type here" required />
    </div>
    <div className="Email">
      <span>Email</span>
      <input type="email" name="email" placeholder="Type here" required />
    </div>
  </div>
  <div className="contact-purpose">
    <h1 className="purpose-question">Why are you contacting us?</h1>
    <div className="purpose-options">
      <div className="option">
        <input type="checkbox" name="purpose" value="Website building" />
        <span >Website building</span>
      </div>
      <div className="option">
        <input type="checkbox" name="purpose" value="Project Management" />
        <span>Project Management</span>
      </div>
      <div className="option">
        <input type="checkbox" name="purpose" value="App Development" />
        <span>App Development</span>
      </div>
      <div className="option">
        <input type="checkbox" name="purpose" value="Branding" />
        <span>Branding</span>
      </div>
      <div className="option">
        <input type="checkbox" name="purpose" value="Other" />
        <span>Other</span>
      </div>
    </div>
  </div>

  <div className="Message">
    <span>Your Message</span>
    <textarea name="message" placeholder="Type here" />
  </div>

  <div className="btn">
    <input type="submit" value="Submit" className="submit-btn" />
  </div>
</form>

  );
};

export default WorkForm;
