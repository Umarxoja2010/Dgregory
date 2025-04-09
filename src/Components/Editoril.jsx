import React, { useEffect, useState } from 'react'
import { getData } from '../Utils/GettingData'
import "../Stayles/editoril.css"
function Editoril() {
    const [editoril, setEditoril] = useState(null)
    useEffect(() => {
        getData("editoril").then((res) => setEditoril(res));
    }, []);
    return (
        <section className='editoril' style={{ backgroundImage: `url(${editoril?.data?.[0]?.imageLink})` }}>
            <div className="container">
                <div className="editoril_content">
                    <h2>{editoril?.data?.[0]?.description}</h2>
                    <h3>Enter your Email</h3>
                    <input type="text" className='chiziq' />
                    <button>Sign up</button>
                </div>
            </div>
        </section>
    )
}

export default Editoril
