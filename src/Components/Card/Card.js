import React from 'react'

const Card = () => {
    return (
        <section className="section news" id="news">
      <div className="container">
        <div className="title__container">
          <div className="section__titles">
            <div className="section__title active">
              <span className="dot"></span>
              <h1 className="primary__title">Hot News</h1>
            </div>
          </div>
        </div>
        <div className = "row">
            <div className="col-lg-4 col-md-6">
                <li className="glide__slide">
                  <div className="new__card">
                    <div className="card__header">
                      <img src="images/news2.jpg" alt=""/>
                    </div>
                    <div className="card__footer">
                      <h3>Styling White Shirts After A Cool Day</h3>
                      <span>By Admin</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                        provident rem sed minus natus unde vel modi!</p>
                      <a href="#"><button>Read More</button></a>
                    </div>
                  </div>
                </li>
            </div>
            <div className="col-lg-4 col-md-6">
                <li className="glide__slide">
                  <div className="new__card">
                    <div className="card__header">
                      <img src="images/news4.jpg" alt=""/>
                    </div>
                    <div className="card__footer">
                      <h3>Styling White Shirts After A Cool Day</h3>
                      <span>By Admin</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                        provident rem sed minus natus unde vel modi!</p>
                      <a href="#"><button>Read More</button></a>
                    </div>
                  </div>
                </li>
            </div>
            <div className="col-lg-4 col-md-6">
                <li className="glide__slide">
                  <div className="new__card">
                    <div className="card__header">
                      <img src="images/news5.jpg" alt=""/>
                    </div>
                    <div className="card__footer">
                      <h3>Styling White Shirts After A Cool Day</h3>
                      <span>By Admin</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                        provident rem sed minus natus unde vel modi!</p>
                      <a href="#"><button>Read More</button></a>
                    </div>
                  </div>
                </li>
            </div>
            </div>
      </div>
    </section>
    )
}

export default Card

