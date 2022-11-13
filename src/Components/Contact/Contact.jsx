import React from 'react'
import './Contact.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [message, setMessage] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ygvav1s', 'template_p7j47vc', form.current, 'M4sKPHRXisxKTEuxt')
        .then((result) => {
            console.log(result.text);
            setMessage(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div  id='contact' className="contact flex flex-col justify-between mt-28 py-0 px-12 gap-6">
        <div className="c-left m-auto">
            <div className="in-touch">
                <span>Get in Touch. </span>
                <span>Let's Connect</span>
            </div>
        </div>

        <div className="c-right flex items-center justify-center relative">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 items-center' action="">
                <input type="text" name="user_name" id="" placeholder='Name' className='user' />
                <input type="text" name="user_email" id="" placeholder='Email@example.com' className='user'  />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='user' ></textarea>
                <input type="submit" value="Send Message" className='nav-btn'   />
            <span>{message && "Message Sent. Thanks for contacting me..😍"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact