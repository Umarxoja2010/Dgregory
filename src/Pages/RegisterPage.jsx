import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../Stayles/Login.css"
import { API } from '../Utils/Url'
function RegisterPage() {
  const navigate = useNavigate()
  const [allUsers, setallUsers] = useState(null)

  let username = useRef()
  let userpsw = useRef()
  let useremail = useRef()
  let userdate = useRef()

  useEffect(() => {
    getAllusers()
  }, [])
  async function getAllusers() {
    let fetchUsers = await fetch(API + "users")
    let json = await fetchUsers.json()
    setallUsers(json.data)
  }


  async function HandleSubmit(w) {
  let isExsist = allUsers?.filter((item) => item.email === useremail.current.value)

    w.preventDefault();
    let redy = {
      username: username.current.value,
      email: useremail.current.value,
      password: userpsw.current.value,
      birth_date: userdate.current.value,
    }
    if (isExsist.length === 0) {
      fetch(API + "users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(redy)


      })
      alert("you have successfully registered")
      navigate("/")
    } else {
      alert("This email is alredy taken")
    }
  }

  return (
    <div onSubmit={(e) => HandleSubmit(e)} className='Register login'>
      <form className='form'>
        <h2>Register</h2>
        <span>Name</span>
        <input ref={username} type="text" placeholder='John Doe' />
        <span>Email</span>
        <input ref={useremail} type="text" placeholder='johndoe@gmail.com' />
        <span>Password</span>
        <input ref={userpsw} type="password" placeholder='12345' />
        <span>Birthday</span>
        <input ref={userdate} type="date" placeholder='13.10.2010' />
        <button type="submit">Register</button>
        <h4>If you alredy registred ? <NavLink to="/">Login</NavLink></h4>
      </form>
    </div>

  )
}

export default RegisterPage
