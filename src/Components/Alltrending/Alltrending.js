import React from 'react'

const Alltrending = () => {
    return (
        <div>
            <section className="category__section section" id="category">
        <div className="tab__list">
          <div className="title__container tabs">
            <div className="section__titles category__titles ">
              <div className="section__title filter-btn active" data-id="All Products">
                <span className="dot"></span>
                <h1 className="primary__title">All Products</h1>
              </div>
            </div>
            <div className="section__titles">
              <div className="section__title filter-btn" data-id="Trending Products">
                <span className="dot"></span>
                <h1 className="primary__title">Trending Products</h1>
              </div>
            </div>

            <div className="section__titles">
              <div className="section__title filter-btn" data-id="Special Products">
                <span className="dot"></span>
                <h1 className="primary__title">Special Products</h1>
              </div>
            </div>

            <div className="section__titles">
              <div className="section__title filter-btn" data-id="Featured Products">
                <span className="dot"></span>
                <h1 className="primary__title">Featured Products</h1>
              </div>
            </div>

          </div>
        </div>
        </section>
        </div>
    )
}

export default Alltrending
