import React from 'react';
import Product from '../Product/Product';
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        <div className="home__row">         
          <Product 
            id="1"
            title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
            />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={159.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/61FJtVQh9bL.__AC_SY300_SX300_QL70_ML2_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={275.99}
            image="https://m.media-amazon.com/images/I/71le4mlb8tL._AC_SX355_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={429.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81raq99wqRS.__AC_SY445_SX342_QL70_ML2_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
              id="6"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={29.99}
              image="https://images.samsung.com/is/image/samsung/p6pim/uk/lc49g93tssrxxu/gallery/uk-odyssey-g9-387510-lc49g93tssrxxu-436439416"
              rating={5}
            />
        </div>
      </div>
    </div>
  )
}

export default Home
