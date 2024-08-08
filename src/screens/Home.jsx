import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  const [search,setSearch]=useState('');
  const [food_category, setFood_category] = useState([]);
  const [food_items, setFood_items] = useState([]);
  const loadData = async () => {
    let response = await fetch('https://mern-food-ordering-d891.onrender.com/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFood_category(response[1]);
    setFood_items(response[0]);

  }
  useEffect(() => { loadData() }, []);
  return (
    <div>
      <div> <Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className='carousel-caption'>
              <div className="form-inline d-flex justify-content-center align-items-center">
                <input className="form-control mr-sm-2 w-75 " type="search" placeholder="Search" aria-label="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100" src="/wallhaven-gpdyyq_1280x720.png" alt="First slide" style={{ objectFit: "contain" }} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/wallhaven-d6dmyg_1280x720.png" alt="Second slide" style={{ objectFit: "contain" }} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/wallhaven-0jg7jp_1280x720.png" alt="Third slide" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className='container-fluid' >
        {food_category.length > 0
          ? food_category.map((data) => (
            <div key={data.id}>
              <div className='row mb-3'>
                <div className="ms-2 col-12" style={{ fontSize: "30px" }}>
                  {data.CategoryName}
                </div>
              </div>
              <div className='row'>
                {food_items.length > 0
                  ? food_items.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((filterItems) => (
                      <div className='col-12 col-md-6 col-lg-2 m-3' key={filterItems.id}>
                        <Card food_item={filterItems}
                          options={filterItems.options}
                        >
                        </Card>
                      </div>
                    ))
                  : <div className='col-12'>No Data Found</div>
                }
              </div>

              <hr />
            </div>
          ))
          : null
        }
      </div>

      <div><Footer /></div>
    </div>
  )
}
//object kae andar for in and [] mei map
