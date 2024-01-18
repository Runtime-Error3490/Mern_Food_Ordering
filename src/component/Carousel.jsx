import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption'>
                        <form className="form-inline d-flex justify-content-center align-items-center">
                            <input className="form-control mr-sm-2 w-75 " type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/wallhaven-gpdyyq_1280x720.png" alt="First slide"  style={{objectFit:"contain"}}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/wallhaven-d6dmyg_1280x720.png" alt="Second slide" style={{objectFit:"contain"}} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/wallhaven-0jg7jp_1280x720.png" alt="Third slide" style={{objectFit:"contain"}} />
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
    );
}
