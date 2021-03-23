import React from 'react'
import './Style.css';

function Products() {
    return (
        <>
           <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-5 mt-1 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/4.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Gaming Laptop</h5>
        <p>This is the one of the most popular Gaming laptop for Game Lover.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/5.jpeg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Officer Laptop</h5>
        <p>This is the one of the most popular Offical laptop for Offical Worker.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/6.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Oven</h5>
        <p>This is the one of the most popular Oven that the all Top Chiefs used.</p>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/7.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Mobile</h5>
        <p>This is cheap & the best Mobile for using internet and playing games.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/8.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Play Station</h5>
        <p>This is cheap and the best Play Station for home base game lover.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/9.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Expensive Play Station</h5>
        <p>This is one of the most Expensive Play Station of the worlds.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/10.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">LED TV</h5>
        <p>This is most demanded LED TV in the world.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/11.jpg" className="card-img-top" alt="..."style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Washing Machine</h5>
        <p>This is one of the most Popular Washing Machine of the worlds.</p>
        
      </div>
    </div>
  </div>
  </div>
</div>    
        </>
    )
}

export default Products
