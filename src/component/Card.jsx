import React,{useEffect, useRef, useState} from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {
  const priceRef=useRef();
  let data=useCart();
  let dispatch = useDispatchCart();
  let option = props.options;
  let priceOption = Object.keys(option[0]);
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");
  const handleAddToCart = async() => {
    await dispatch({type:'ADD',id: props.food_item._id,name:props.food_item.name,price:finalPrice,qty:qty,size:size})
    console.log(data)
  }
  let finalPrice=qty*parseInt(option[0][size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '370px' }}>
        <img className="card-img-top" src={props.food_item.img} alt="Card image cap" style={{
          height: '200px',
          width: 'auto',
          objectFit: 'cover'
        }} />
        <div className="card-body">
          <h5 className="card-title">{props.food_item.name}</h5>
          <div className='conatiner '>
            <select className='m-2 h-100 bg-success rounded' onChange={(e)=>{
              setQty(e.target.value)
            }}>
              {
                Array.from(Array(10).keys()).map((item, index) => {
                  return <option key={index+1} value={item+1}>{item+1}</option>
                })
              }
            </select>
            <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>{
              setSize(e.target.value)
            }}>
              {
                priceOption.map((data) => {
                  return (<option key={data} value={data}>{data}</option>);
                })
              }
            </select>
            <div className='d-inline h-100 fs-5'>
            ₹{finalPrice}/-
            </div>
          </div>
          <hr/>
           <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}
