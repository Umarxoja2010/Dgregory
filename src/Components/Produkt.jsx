import React, { useEffect, useState } from 'react'
import { getData } from '../Utils/GettingData'
import "../Stayles/produkt.css"
import { NavLink } from 'react-router-dom';
function Produkt() {
    const [produkt, setprodukt] = useState(null)
    useEffect(() => {
        getData("products").then((res) => setprodukt(res));
    }, []);
    return (
        <section className='produkt' >
            <div className="container">
                <div className="produkt_wrapper">
                    {produkt?.data?.map((item) => {
                        return (
                            < NavLink to={`/pdp/${item._id}`} className="produkt_card" key={item?._id}>
                                <img src={item?.imageLink} alt="" />
                                <h2>{item?.name}</h2>
                                <h3>{item?.price}</h3>
                                <h4>{item?.count}</h4>
                            </NavLink>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Produkt
