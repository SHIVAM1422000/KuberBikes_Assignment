import React from "react";
import CrouselCSS from "../CSS/Crousel.css"
import ione from '../images/poster.jpg';
import itwo from '../images/1.jpg';
import ithree from '../images/2.jpg';

function Crousel() {
    return (
        <>
           

           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" alt="img1">
      <img src={ione}/>
    </div>
    {/* className="d-block w-100" */}
    <div className="carousel-item">
      <img src={itwo}  className="" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={ithree} alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}

export default Crousel
