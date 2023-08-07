import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtexxa5', 'template_1a8by1t', form.current, 'PFUp2oJ1ovSEX8H47')
      e.target.reset()
  };
  return (
    <section className="contact section container" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>
      <div className="contact__container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className='contact__card-data'>souravch2003@gmail.com</span>

              <a href="mailto:souravch2003@gmail.com" className="contact__button">Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className='contact__card-data'>(+91) 86951-55200</span>

              <a href="https://api.whatsapp.com/send?phone=+918695155200&text=Hello, more information!" className="contact__button">Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write your query</h3>

          <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>
      </div>
    </section>
  )
}

export default Contact
