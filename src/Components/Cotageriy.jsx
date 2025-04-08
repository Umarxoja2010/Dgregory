import React, { useEffect, useState } from 'react'
import "../Stayles/cotageriy.css"
import { getData } from '../Utils/GettingData'
function Cotageriy() {
    const [categoriy, setcategoriy] = useState(null)
    useEffect(() => {
        getData("category").then((res) => setcategoriy(res));
    }, []);
    console.log(categoriy);
    return (
        <section className='cotagoriy'>
            <div className="container">
                <div className="category_wrapper">
                    {categoriy?.data?.map((item) => {
                        return <div className="category_card" key={item?._id}>
                            <h3>{item?.cat_name}</h3>
                        </div>
                    })}
                </div>
                <div className="category_inp_wrapper">
                    <div className="category_inp">
                        <span>Sort by</span>
                        <input type="text" placeholder='Select' />
                    </div>
                    <div className="category_inp">
                        <span>Sort by</span>
                        <input type="text" placeholder='Select' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cotageriy
