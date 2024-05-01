import React from 'react'
import "./main.scss"

export default function Footer() {
    const styleh3 = {
        fontFamily: "Roboto",
        fontSize: "28px",
    }
  return (
    <div>
        <div className='footer container'>
            <div className='footer_right col'>
                <h3>
                    Quality cleaning for your home
                </h3>
                <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
            </div>
            <div className='footer-contact col'>
                <h3>Contact us</h3>
                <ul className='footer-list'>
                    <li className='footer-item'>
                        <a>1827 Nickel Road, Los Angeles, CA, 90017, United States</a>
                    </li>
                    <li className='footer-item'> 
                        <a>(414) 567 - 2109</a>
                    </li>
                    <li className='footer-item'>
                        <a>contact@cleaning.com</a>
                    </li>
                </ul>
            </div>
            {/* <div>
                <h3>Hours</h3>
                <h3>Monday to Friday</h3>
                <p>6:00 AM - 9:00 PM</p>
                <h3>Saturday & Sunday</h3>
                <p>8:00 AM - 8:00 PM</p>
            </div> */}
            <div className='col'>
                <h3>Get a free estimate</h3>
                <h2>(414) 567 - 2109</h2>
                <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                <button className='footer-btn btn'>Request a free quote</button>
            </div>
        </div>
    </div>
  )
}
