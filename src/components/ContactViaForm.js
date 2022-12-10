import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const ContactViaForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_serviceID, 'template_hx6n44c', form.current, 'IbJihpRSES4DMJ7iB')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              toast.success('email sent successfully');
              
          }, (error) => {
              console.log(error.text);
              toast.error('some error happened, please try again')
          });}
    return (
        <div id='contact' className='pt-40 text-start mx-auto text-xl lg:w-1/2'>
        <h2 className='text-center text-3xl'>Contact me via Email </h2><br/> <br/>
            <form ref={form} onSubmit={sendEmail} className='w-full p-6'>
                <label>Name</label><br/><br/>
                <input className='w-full bg-gray-800 text-white p-2 rounded-xl' type='text' name= "user_name" placeholder='Your Name' required/><br/><br/>
                <label>Email</label><br/><br/>
                <input className='w-full bg-gray-800 text-white p-2 rounded-xl' type='text' name= "user_email" placeholder='Your Email' required/><br/><br/>
                <label>Message</label><br/><br/>
                <textarea className='w-full bg-gray-800 text-white p-2 rounded-xl' name="message"  placeholder='Your Message' required/><br/>
                <input className='btn btn-outline btn-secondary my-4' type='submit' value="Send" />
            </form>
        </div>
    );
};

export default ContactViaForm;