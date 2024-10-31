import React from "react";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Background from "./Component/Background/Background.jsx";
import Partners from "./Component/partners/Partners.jsx";
import OfferComponent from "./Component/offer/OfferComponent.jsx";
import ProductCard from "./Component/ProductCards/ProductCard.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Partners />
      <OfferComponent />
      <ProductCard />

    </div>
  );
};

export default App;
