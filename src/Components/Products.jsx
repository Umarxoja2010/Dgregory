import React, { useEffect, useState } from 'react'
import "../Stayles/products.css"
import { getData } from '../Utils/GettingData'
import { NavLink } from 'react-router-dom';
function Products() {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        getData("product-features").then((res) => setProduct(res));
    }, []);
    return (
        <section className='product'>
            <div className="container">
                <h2>{product?.data[0]?.title}</h2>
                <div className="product_wrapper">


                    {product?.data[0].product_ref_id?.map((item) => {
                        return (
                            <NavLink to={`/pdp/${item._id}`} className="product_card" key={item._id} >
                                <img src={item.imageLink} alt="" />
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                                <h5>{item.count}</h5>
                            </NavLink>
                        )
                    })}
                </div>
                <NavLink to="/contact">
                    <button>Shop All</button>
                </NavLink>
            </div>
        </section>
    )
}

export default Products
