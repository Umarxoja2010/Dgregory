import React, { useEffect, useState, } from 'react'
import { getData } from '../Utils/GettingData'
import "../Stayles/bgimage.css"
function Bgimage() {


  const [bgimage, setbgimage] = useState(null)
  useEffect(() => {
    getData("bgImage").then((res) => setbgimage(res));
  }, []);
  console.log(bgimage);

  return (
    <section className='bgimage'>
      <img src={bgimage?.data?.[0]?.imageLink} alt="" />
    </section>
  )
}

export default Bgimage
