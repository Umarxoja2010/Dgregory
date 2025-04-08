import React, { useEffect, useRef, useState } from 'react'
import { API } from '../Utils/Url'

function AdminEditoril() {
    const [edit, setedit] = useState(null)
    let titlee = useRef()
    let imgLink = useRef()
    useEffect(() => {
        Editadmin()
    })
    async function Editadmin() {
        let getData = await fetch(API + "editoril")
        let json = await getData.json()
        setedit(json.data[0])
    }
    function handleSubmit(e) {
        e.preventDefault()
        let redy = {
            imageLink: imgLink.current.value,
            description: titlee.current.value,
        }
        fetch(API + "editoril/66a0d332d0be52c0e61a01b6", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(redy)
        })
    }
  return (
    <div onSubmit={(e) => handleSubmit(e)}>
        <h1>AdminEditoril</h1>
       <form  className='form' >
                <h2>Update</h2>
                <span>ImageLink</span>
                <input ref={imgLink} type="text" defaultValue={edit?.imageLink} />
                <span>Title</span>
                <input ref={titlee} type="text" defaultValue={edit?.description} />
                <button type="submit">Update</button>
            </form>
    </div>
  )
}

export default AdminEditoril
