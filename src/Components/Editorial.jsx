import React, { useEffect, useState } from 'react'
import "../Stayles/editorial.css"
import { getData } from '../Utils/GettingData'
function Editorial() {
  const [editorial, setEditorial] = useState(null)
  useEffect(() => {
    getData("editorial").then((res) => setEditorial(res));
  }, []);
  return (
    <section className='editorial'>
        <div className="yon_chiziq1"></div>
        <div className="yon_chiziq2"></div>
        <div className="yon_chiziq3"></div>
        <div className="yon_chiziq4"></div>
        <div className="container">
          <div className="editorial_wrapper">
            <div className="editorial_left">
              <img src={editorial?.data?.[0]?.imageLink} alt="" />
            </div>
            <div className="editorial_right">
              <h2>{editorial?.data?.[0]?.title}</h2>
              <p>{editorial?.data?.[0]?.description}</p>
              <button>Shop the collection</button>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Editorial
