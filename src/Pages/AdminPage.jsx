import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Stayles/adminPage.css"

function AdminPage() {
  return (
    <div className='AdminPage'>

<NavLink to='/admhome'>
        <h1>
        Home Page
        </h1>
      </NavLink>

      <NavLink to='/product'>
        <h1>
        Product Page
        </h1>
      </NavLink>
      
      <NavLink to='/categor'>
        <h1>
        categor Page
        </h1>
      </NavLink>
 

    </div>
  )
}

export default AdminPage
