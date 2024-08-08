import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("https://mern-food-ordering-d891.onrender.com/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (response.ok) {
        const data = await response.json();
        setOrderData(data.orderData.order_data || []);
        console.log(orderData)
      } else {
        console.error('Failed to fetch my order:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching my order:', error.message);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {Array.isArray(orderData) && orderData.length > 0 ? (
            orderData.map((order, index) => (
              <div key={order.order_date} className='m-auto mt-5' style={{display:'block'}}>
                <h3>Order Date: {order.order_date}</h3>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Size</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.size}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {index !== orderData.length - 1 && <hr />} {/* Add HR except for the last order */}
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
