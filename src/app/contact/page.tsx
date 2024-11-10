/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Navbar from '../navebar/page'


 const Contact = () => {
  return (
    <body>
      <div>
      
      <Navbar/>
      <div className="contact_container">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
      <script src='https://smtpjs.com/v3/smtp.js'></script>
      {/* <script>
        function sendEmail(params:type) {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        } */}
      {/* </script> */}
    </body>

  )
}

export default Contact