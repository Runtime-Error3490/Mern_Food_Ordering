import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Card(props) {
  let option = props.options;
  console.log(option)
  let priceOption = Object.keys(option[0]);
  return (
    <>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '370px' }}>
        <img className="card-img-top" src={props.imgSrc} alt="Card image cap" style={{
          height: '200px',
          width: 'auto',
          objectFit: 'cover'
        }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className='conatiner '>
            <select className='m-2 h-100 bg-success rounded'>
              {
                Array.from(Array(10).keys()).map((item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })
              }
            </select>
            <select className='m-2 h-100  bg-success rounded'>
              {
                priceOption.map((data) => {
                  return (<option key={data} value={data}>{data}</option>);
                })
              }
            </select>
            <div className='d-inline h-100 fs-5'>Final Price</div>
          </div>
        </div>
      </div>
    </>
  )
}
