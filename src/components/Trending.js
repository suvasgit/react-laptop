import React from 'react'
import Slider from "react-slick";

const Trending=()=> {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
           <div className="container">
            <div className="row mt-3 mb-5">
            <Slider {...settings}>
          <div>
            <img src="images/4.jpg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/5.jpeg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/6.jpg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/7.jpg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/8.jpg"className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/9.jpg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/5.jpeg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
          <div>
          <img src="images/11.jpg" className="img-fluid" alt="" style={{height:'200px'}}/>
          </div>
        </Slider>
              </div>   
            </div> 
        </>
    )
}

export default Trending
