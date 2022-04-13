import React from 'react'
import './Contact.css'

function Contact() {
  return (
      <div id='contact'>
          <h1>Contact Me</h1>
          <div className='contactme'>
            <div className='leftDiv'>
                <div>
                        <i class="fas fa-map-marker-alt"></i>
                        <h4>Address</h4>
                        <p>Jhapa</p>
                    </div>
                <div>
                    <i class="fas fa-phone-alt"></i>
                    <h4>Phone</h4>
                    <p>9806038705</p>
                </div>
                <div>
                    <i class="fas fa-envelope"></i>
                    <h4>Email</h4>
                    <p>sabitasitaula705@gmail.com</p>
                </div>
              </div>
              
              <div className='veticalLine'></div>

            <div className='rightDiv'>
                <div>
                    <h4>Send me a message.</h4>
                    <p>If you have any work from me, you can send me message from here. It's my pleasure to help you.</p>
                </div>
                <div>
                    <form className='form'>
                        <input type="text" className='name' name='fullname' placeholder='Enter your full name' required /><br /><br />
                        <input type="email" name='email' placeholder='Enter your email' required /><br /><br />
                        <textarea placeholder='Enter your message'></textarea><br /><br />
                        <input type="submit" className='submit' />
                    </form>
                </div>
                </div>
              </div>
    </div>
  )
}

export default Contact