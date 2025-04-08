import React, { useEffect, useRef, useState } from 'react'
import "../Stayles/adminhero.css"
import { API } from '../Utils/Url'
function AdminHero() {
    const [hero, sethero] = useState(null)
    useEffect(() => {
        heroadmin()
    }, [])
    async function heroadmin() {
        let fetchData = await fetch(API + "headers")
        let json = await fetchData.json()
        sethero(json.data[0])
    }
    let titlee =useRef()
    let imglink =useRef()
    function handleSubmit(e) {
        e.preventDefault()
        let redy = {
            title:titlee.current.value,
            imageLink: imglink.current.value
        }

        fetch(API + "headers/66b59e7bf1aebf64ce6b0eb4", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(redy)
        })
    }
    return (
        <div onSubmit={(e) => handleSubmit(e)} className='adminhero'>
            <h1>Admin hero</h1>
            <form className='form' >
                <h2>Update</h2>
                <span>ImageLink</span>
                <input ref={imglink} type="text" defaultValue={hero?.imageLink} />
                <span>Title</span>
                <input ref={titlee} type="text" defaultValue={hero?.title} />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AdminHero
