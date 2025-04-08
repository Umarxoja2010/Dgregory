import React, { useEffect, useState } from 'react'
import { getData } from '../Utils/GettingData';
import "../Stayles/hero.css"
function Hero() {
  const [hero, setHero] = useState(null)
  useEffect(() => {
    getData("headers").then((res) => setHero(res));
  }, []);
  console.log(hero);
  return (
    <section className='hero' style={{ backgroundImage: `url(${hero?.data?.[0]?.imageLink})` }}>
      <div className="container">
        <h2>{hero?.data?.[0]?.title}</h2>

        <button>Shop Collection</button>
      </div>
    </section>
  )
}

export default Hero
