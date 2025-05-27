import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_e4vctg6',       
      'template_jvhv0xk',       
      form.current,
      '9psLCapJPaX3Hy0tp'       
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current?.reset();
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="text" name="user_email" placeholder="Email / Phone" required />
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">SEND ➤</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
