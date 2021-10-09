import React from 'react'
const Hero = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="img/freestocks-VFrcRtEQKL8-unsplash.jpg" class="d-block w-100" alt="..." style ={{height:"600px"}}/>
        </div>
        <div class="carousel-item">
            <img src="img/erik-mclean-nfoRa6NHTbU-unsplash.jpg" class="d-block w-100" alt="..." style ={{height:"600px"}}/>
        </div> 
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
   
  )
}

export default Hero



