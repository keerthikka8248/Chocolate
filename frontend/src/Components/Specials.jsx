import React from 'react'

const Specials = () => {
  return (
    <div>
        <section id="specials" className="specials">
        <h2>Our Specials</h2>
        <div className="specials-grid">
          <div className="special-item">
            <img src="brownie.jpg" alt="Brownie" />
            <p>Brownie</p>
          </div>
          <div className="special-item">
            <img src="macroon.jpg" alt="Macaroon" />
            <p>Macaroon</p>
          </div>
          <div className="special-item">
            <img src="dark-chocolate.jpg" alt="Dark Chocolate" />
            <p>Homemade Dark Chocolate</p>
          </div>
          <div className="special-item">
            <img src="choco-truffle.jpg" alt="Choco Truffle Cake" />
            <p>Choco Truffle Cake</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specials