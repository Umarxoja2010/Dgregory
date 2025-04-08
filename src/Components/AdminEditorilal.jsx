import React, { useEffect, useRef, useState } from 'react'
import { API } from '../Utils/Url'
function AdminEditorilal() {
    const [edit, setedit] = useState(null)
    let titlee = useRef()
    let imgLink = useRef()
    let descrip = useRef()
    useEffect(() => {
        Editadmin()
    })
    async function Editadmin() {
        let getData = await fetch(API + "editorial")
        let json = await getData.json()
        setedit(json.data[0])
    }
    function handleSubmit(e) {
        e.preventDefault()
        let redy = {
            imageLink: imgLink.current.value,
            title: titlee.current.value,
            description: descrip.current.value
        }
        fetch(API + "editorial/66a717a3b138ce1ab4f8d0e7", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(redy)
        })
    }
    return (
        <div onSubmit={(e) => handleSubmit(e)} >
            <h1>AdminEditorial</h1>
            <form className='form' >
                <h2>Update</h2>
                <span>ImageLink</span>
                <input ref={imgLink} type="text" defaultValue={edit?.imageLink} />
                <span>Title</span>
                <input ref={titlee} type="text" defaultValue={edit?.title} />
                <span>description</span>
                <input ref={descrip} type="text" defaultValue={edit?.description} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminEditorilal
