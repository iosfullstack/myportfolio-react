import React from 'react'
import './Contact.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Success from '../Modal/Success';
import Error from '../Modal/Error';

const Contact = () => {
    const form = useRef();

    const [message, setMessage] = useState(false)
    const [errors, setErrors] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [messages, setMessages] = useState('')
    // const [errors, setErrors] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();

      setName('')
      setEmail('')
      setMessages('')
  
      emailjs.sendForm('service_ygvav1s', 'template_p7j47vc', form.current, 'M4sKPHRXisxKTEuxt')
        .then((result) => {
            console.log(result.text);
            
            if (name === '' || email === '' || messages === '') {
                return setErrors(true)
            } else {
                return setMessage(true)
            }
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
                <input onChange={e => setName(e.target.value)} value={name} type="text" name="user_name" id="" placeholder='Name' className='user' />
                <input onChange={e => setEmail(e.target.value)} value={email} type="text" name="user_email" id="" placeholder='Email@example.com' className='user'  />
                <textarea onChange={e => setMessages(e.target.value)} value={messages}  name="message" id="" cols="30" rows="10" placeholder='Message' className='user' ></textarea>
                <input type="submit" value="Send Message" className='nav-btn'   />
            <span>{message ? true && <Success/> : errors && <Error/>}</span>
            {/* <span>{errors && "input is empty 😍"}</span> */}
            </form>
        </div>
    </div>
  )
}

export default Contact