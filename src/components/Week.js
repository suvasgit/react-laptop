import React from 'react'

const Week=()=> {
    return (
        <>
            <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/4.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Gaming Laptop</h5>
        <p>This is the one of the most popular Gaming laptop for Game Lover.</p>
        <button className="btn btn-primary">Add to Cart</button>
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
        <button className="btn btn-primary">Add to Cart</button>
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
      <button className="btn btn-primary">Add to Cart</button>
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
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>

  </div>
</div>     
        </>
    )
}

export default Week
