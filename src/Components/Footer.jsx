import React from 'react'
import rasm1 from "../Images/footerimg.png"
import rasm2 from "../Images/insta logo.svg"
import "../Stayles/footer.css"
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_card1">
            <ul>
              <li>Shop all</li>
              <li>Rings</li>
              <li>Bracelets</li>
              <li>Earrings</li>
              <li>Necklaces</li>
            </ul>
          </div>
          <div className="footer_card2">
            <div className="footer_card2_yordam">
              <img src={rasm1} alt="" />
            </div>
            <span className='chizuq'></span>
            <div className="footer_card2_bottom">
              <span>1234 Placeholder St. New York, NY</span>
              <span>Privacy Policy</span>
              <span>© 2022 D.Gregory</span>
            </div>
          </div>
          <div className="footer_card3">
            <ul>
              <li>ARCHive</li>
              <li>ABout</li>
              <li>Contact</li>
              <img src={rasm2} alt="" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
