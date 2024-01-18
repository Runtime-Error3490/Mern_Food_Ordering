import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export default function Card() {
  return (
    <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='conatiner w-100'>
              <select className='m-2 h-100 bg-success rounded'>
                {
                  Array.from(Array(10).keys()).map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })
                }
              </select>
              <select className='m-2 h-100  bg-success rounded'>
                return(
                <option value="half">half</option>
                <option value="full">full</option>
                )
              </select>
              <div className='d-inline h-100 fs-5'>Final Price</div>
            </div>
          </div>
        </div>
    </div>
  )
}
