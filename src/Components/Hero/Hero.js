import React from 'react'
const Hero = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="img/freestocks-VFrcRtEQKL8-unsplash.jpg" className="d-block w-100" alt="..." style ={{height:"600px"}}/>
        </div>
        <div className="carousel-item">
            <img src="img/erik-mclean-nfoRa6NHTbU-unsplash.jpg" className="d-block w-100" alt="..." style ={{height:"600px"}}/>
        </div> 
    </div>
    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
   
  )
}

export default Hero



