import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Card() {
  return (
    <>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '370px' }}>
          <img className="card-img-top" src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D" alt="Card image cap" />
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
    </>
  )
}
