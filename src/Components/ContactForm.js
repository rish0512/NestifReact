import "./ContactForm.css";
function ContactForm() {
  return (
    <div className="form-container">
      <h3>Contact Our Team</h3>
      <form>
        <input placeholder="enter your name" />
        <input placeholder="enter your Email" />
        <input placeholder="Phone no." />
        <textarea placeholder="How can we help you?" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
