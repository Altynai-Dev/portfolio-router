import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid ">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk</h3>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact_form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' />
            </div>

            <div className="contact_form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact_form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your subject' />
            </div>

            <div className="contact_form-div">
              <textarea id='' cols='30' rows='10' className='contact__form-input' placeholder='Write your message'></textarea>
            </div>

            <button className='btn'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact