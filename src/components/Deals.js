import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'




const Deals=()=> {
    return (
        <>
        <Navbar/>

           <div className="container-fluid">
               <div className="row">
                   <h2>Deals and Promotion</h2>
                   <span>Shop Today’s Deals, Lightning Deals, and limited-time discounts</span>

                <div className="col-md-2 p-3 shadow" style={{backgroundColor:'#f5f5f5'}}>
                    <h4>Categories</h4>
                    <form>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Mobile
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Laptop
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Foods
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Clothes
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Books
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Camera
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Sunglass
  </label>
</div>
<Link className="text-decoration-non btn btn-info">See more</Link>
    </form>
      </div>

      <div className="mt-2">
          <h3>Deal Type</h3>
          <Link to="#" className="text-decoration-none text-dark">Deal of the Day</Link> <br/>
          <Link to="#"  className="text-decoration-none text-dark">Lightening Deal</Link> <br/>
          <Link to="#"  className="text-decoration-none text-dark">Saving and Sales</Link> <br/>
          <Link to="#"  className="text-decoration-none text-dark">Weeken Deals</Link> <br/>
           </div>
                <div className="col-md-6"></div>

               </div>
            </div>
            <Footer/>

        </>
    )
}

export default Deals
