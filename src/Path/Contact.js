import { useState, useEffect } from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h3>Get in touch</h3>
      <p className="text-p">
        I usually reply emails within 24 hours during business day
      </p>
      <form>
        <input type="text" placeholder="Your name"></input>
        <input type="email" placeholder="Your email"></input>
        <textarea placeholder="Your message"></textarea>
        <button class="button"> Send</button>
      </form>
    </div>
  );
};
export default Contact;
