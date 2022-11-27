import React from 'react'
import './Contact.styles.css';
import { AnchorButton } from '../Header/Header';
function Contact() {
  return (
    <div className="contact__container">
      <section id="contact">
        <h2>Contact Me</h2>
        <p>I'm always interested in hearing new ideas and sharing thoughts.</p>
        <p><AnchorButton className="button" href="mailto:chrisblesson2598@gmail.com">Email Me</AnchorButton></p>
      </section>
    </div>
  )
}

export default Contact