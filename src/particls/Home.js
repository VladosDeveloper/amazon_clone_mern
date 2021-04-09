import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <div className="component__row">
          <Product
            id={1}
            title="The Lean Startup"
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            price="29.99"
            rating={4}
          />
          <Product
            id={2}
            title="RUPS BW801852 Smart Temp Digital Kettle Full Stainless Interior and Safety Off, 1.7-Liter, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/711pyABTCrL._AC_SL1500_.jpg"
            price="59.99"
            rating={5}
          />
        </div>
        <div className="component__row">
          <Product
            id={3}
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            price="255.99"
            rating={5}
          />
          <Product
            id={4}
            title="Echo Studio – High-fidelity smart speaker with Philips Hue Bulbs – Alexa smart home starter kit"
            image="https://images-na.ssl-images-amazon.com/images/I/71KEIWsn0tL._AC_SL1000_.jpg"
            price="199.99"
            rating={4}
          />
          <Product
            id={5}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
            price="557.99"
            rating={5}
          />
        </div>
        <div className="component__row">
          <Product
            id={6}
            title="Samsung C49HG90DMU 124.2 cm (48.9) Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            price="1200.39"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
