import React, { useEffect, useRef, useState } from 'react'
import "../Stayles/categor.css"
import { API } from '../Utils/Url'

function Categor() {
    let cat_name = useRef()
    let upcat_name = useRef()
    let updateform = useRef()
    const [cate, setcate] = useState(null)
    const [selectedCAT, setselectedcat] = useState({})
    const [id, setid] = useState("")

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let fetchData = await fetch(API + "category")
        let json = await fetchData.json()
        setcate(json.data)
    }

    async function createCategor(w) {
        w.preventDefault()
        let ready = {
            cat_name: cat_name.current.value,
        }

        await fetch(API + "category", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ready)
        })
        getData()  // create dan keyin kategoriyalarni qayta yuklash
    }

    async function updateCategor(e) {
        e.preventDefault()
        let ready = {
            cat_name: upcat_name.current.value, 
        }

        await fetch(API + "category/" + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ready)
        })
        getData() 
        updateform.current.classList.remove("updateshow") 
    }

    function openupdateform(e) {
        setid(e.target.id) 
        updateform.current.classList.add("updateshow")
        let selectedcat = cate?.find((item) => item._id === e.target.id)
        setselectedcat(selectedcat)
    }

    async function deleteCategory(e) {
        await fetch(API + `category/${e.target.id}`, {
            method: "DELETE"
        })
        getData() 
    }

    return (
        <div className='categor container'>
            <div>
                <form className='form' onSubmit={(e) => createCategor(e)}>
                    <h2>create</h2>
                    <span>Title</span>
                    <input ref={cat_name} type="text" />
                    <button type="submit">Create</button>
                </form>
            </div>

            <div>
                <form ref={updateform} className='form updateform' onSubmit={(e) => updateCategor(e)}>
                    <h2>Update</h2>
                    <span>Title</span>
                    <input ref={upcat_name} type="text" defaultValue={selectedCAT?.cat_name} />
                    <button type="submit">update</button>
                </form>
            </div>

            <div className='cat_grid'>
                {cate?.map((item) => {
                    return (
                        <div className="cat_card" key={item._id}>
                            <h4>{item.cat_name}</h4>
                            <button onClick={(e) => openupdateform(e)} id={item._id}>Update</button>
                            <button onClick={(e) => deleteCategory(e)} id={item._id}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categor
