import React from 'react'
import "../Stayles/next.css"
function Next() {
    return (
        <section className='next'>
            <div className="container">
                <div className="next_wrapper">
                    <div className="next_card1">
                        <h4>
                            previous

                        </h4>
                    </div>
                    <div className="next_card2">
                        <span>1    ...    2    3  </span>
                        <div>

                            <h5>4</h5>
                        </div>
                        <span>5    6    ...    12</span>
                    </div>
                    <div className="next_card3">Next</div>
                </div>
            </div>
        </section>
    )
}

export default Next
