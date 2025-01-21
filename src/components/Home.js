import React from 'react'
import Section from './Section'

const Home = () => {
  return (
    <div className='container'>
      <Section
        title = "Model S"
        description = "Order Online for Delivery"
        backgroundImg = "/images/model-s.jpg"
        leftButton = "Custom Order"
        rightButton = "Existing Inventory"
      />
      <Section
        title = "Model Y"
        description = "Order Online for Delivery"
        backgroundImg = "/images/model-y.jpg"
        leftButton = "Custom Order"
        rightButton = "Existing Inventory"
      />
      <Section
        title = "Model X"
        description = "Order Online for Delivery"
        backgroundImg = "/images/model-x.jpg"
        leftButton = "Custom Order"
        rightButton = "Existing Inventory"
      />
      <Section
        title = "Lowest Cost Solar Panel in America"
        description = "Money-Back Gurantee"
        backgroundImg = "/images/solar-panel.jpg"
        leftButton = "Order Now"
        rightButton = "Learn More"
      />
      <Section
        title = "Solar for New Roofs"
        description = "Solar Roof costs Less than New Roof"
        backgroundImg = "/images/solar-roof.jpg"
        leftButton = "Order Now"
        rightButton = "Learn More"
      />
      <Section
        title = "Accessories"
        description = ""
        backgroundImg = "/images/accessories.jpg"
        leftButton = "Shop Now"
      />

      
    </div>
  )
}

export default Home