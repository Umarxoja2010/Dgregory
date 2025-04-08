import React, { useEffect, useRef, useState } from 'react';
import "../Stayles/Login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { API } from '../Utils/Url';
import { ADMIN_INFO } from '../Utils/admin';

function LoginPage() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const useremail = useRef();
  const userpsw = useRef();

  useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    try {
      const fetchUsers = await fetch(API + "users");
      const json = await fetchUsers.json();
      setAllUsers(json.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const email = useremail.current.value;
    const password = userpsw.current.value;


    if (email === ADMIN_INFO.email && password === ADMIN_INFO.password) {
      navigate(`/admin/${ADMIN_INFO.id}`);
      return;
    }


    const user = allUsers.find((item) => item.email === email);

    if (!user) {
      alert("This email has not passed registration");
    } else if (user.password === password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/user/${user._id}`);
    } else {
      alert("Password is wrong");
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Login</h2>
        <span>Email</span>
        <input ref={useremail} type="text" placeholder='johndoe@gmail.com' />
        <span>Password</span>
        <input ref={userpsw} type="password" placeholder='12345' />
        <button type="submit">Login</button>
        <h4>
          Do you have an account? <NavLink to="/register">Register</NavLink>
        </h4>
      </form>
    </div>
  );
}

export default LoginPage;
