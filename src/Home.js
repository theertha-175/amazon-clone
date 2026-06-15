import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon banner"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="2"
            title="Kenwood Chef"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung Monitor"
            price={400.99}
            rating={3}
            image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop"
          />
          <Product
            id="4"
            title="Amazon Echo"
            price={98.99}
            rating={5}
            image="https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop"
          />
          <Product
            id="5"
            title="iPad Pro"
            price={598.99}
            rating={4}
            image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung 4K Smart TV"
            price={600.99}
            rating={5}
            image="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;