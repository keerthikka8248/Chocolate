import React from 'react'

const Reviews = () => {
  return (
    <div>
        <section id="reviews" className="reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-slider">
          <div className="review-slide">
            <p>"Best chocolates I've ever had!" - Jane Doe</p>
          </div>
          <div className="review-slide">
            <p>"The macarons are to die for!" - John Smith</p>
          </div>
          <div className="review-slide">
            <p>"Brownies are rich and delicious." - Lisa Brown</p>
          </div>
          <div className="review-slide">
            <p>"Loved the choco truffle cake!" - Michael Lee</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews