import React, {  useRef } from 'react'
import { NavLink, useLocation, useParams, } from 'react-router-dom'
import "../Stayles/header.css"
import rasm1 from "../Images/header_with.svg"
import rasm4 from "../Images/footerimg.png"
import rasm2 from "../Images/burger_icon_menyu.png"
import rasm3 from "../Images/clos_icon.webp"
function Header() {
  let userId =useParams()
  let location = useLocation()
  let user = JSON.parse(localStorage.getItem('user'))
  let modal =useRef()
  function openModal (){
    modal.current.classList.add("show")
  }
  function closeModal (){
    modal.current.classList.remove("show")
  }
  return (
    <header className={location.pathname=== `/user/${userId.userID}` ? "header" : "main_header"}>
      <div ref={modal} className="modal">
        <div onClick={closeModal} className="clos">
          <img src={rasm3} alt="" />
        </div>
        <ul>
          <li>
            <NavLink>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink>
              Shop
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="header_wrapper">
        <div className="header_card1">
          <ul>
            <li>
              <NavLink to= "/contact">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to= "/contact">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to= "/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to= "/contact">
                Archive
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_card2">
          <NavLink to={`/user/${userId.userID}`} >
            <img src={location.pathname=== `/user/${userId.userID}` ? rasm1 : rasm4} alt="" />
          </NavLink>
        </div>
        <div className="header_card3">
          <h2>Welcome  {user.username}</h2>
        </div>
        <div onClick={openModal} className="burger">
          <img src={rasm2} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
