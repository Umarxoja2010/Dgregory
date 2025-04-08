import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Stayles/pdpFirst.css"
function Pdpfirt() {
    let id = useParams()
    const [pro, setpro] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch("https://umar-aka-backend-2.onrender.com/products")
        let json = await fetchData.json()
        setpro(json.data)
    }
    let selectPro = pro?.find((item) => item._id === id.produktId)
    console.log(selectPro);


    return (
        <section className='pdpFirst'>
            <div className="container">
                <div className="pdpFirst_wrapper">
                    <div className="pdpFirst_left">
                        <img src={selectPro?.imageLink} alt="" />

                    </div>
                    <div className="pdpFirst_right">
                        <h2>{selectPro?.name}</h2>
                        <h3>{selectPro?.price}</h3>
                        <select>
                            <option>Select Size</option>
                            <option>Select Size</option>
                            <option>Select Size</option>
                        </select>
                        <button>Add to cart</button>
                        <p>{selectPro?.description}</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Pdpfirt