import React, { useEffect, useRef, useState } from 'react'
import { API } from '../Utils/Url'
import "../Stayles/adminprofuture.css"

function AdminProdactFiture() {
    const [fiture, setfiture] = useState(null)
    const [upfiture, setupfiture] = useState(null)
    let titleee = useRef()

    useEffect(() => {
        getData()
        titleFuture()
    }, []) 

    async function getData() {
        let fetchDAta = await fetch(API + "products")
        let json = await fetchDAta.json()
        setfiture(json.data)
    }

    async function titleFuture() {
        let fetchDAta = await fetch(API + "product-features")
        let json = await fetchDAta.json()
        setupfiture(json.data[0])
    }

    async function updateform(e) {
        e.preventDefault()
        let allTanlaPros = document.querySelectorAll(".tanla")
        let ids = []
        allTanlaPros.forEach(item => {
            ids.push(item.id)
        })

        let ready = {
            title: titleee.current.value,
            product_ref_id: ids
        }

        await fetch(API + "product-features/669795e9be42387d8060942d", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ready)
        })
    }

    function selectpro(e) {
        e.target.classList.toggle("tanla")
    }

    return (
        <div>
            <form onSubmit={(e) => updateform(e)} className='future'>
                <h1>Admin product-fiture</h1>
                <span>Title</span>
                <input ref={titleee} type="text" defaultValue={upfiture?.title} />
                <div className="future_wrapper">
                    {fiture?.map((item) => {
                        return (
                            <div onClick={(e) => selectpro(e)} className="future_card" id={item._id} key={item._id}>
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminProdactFiture
