import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Imageslider from "./components/Imageslider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Offers />
          <Plan />
          <Rooms />
          <Imageslider />
          <Footer />
    </div>
  );
}

export default App;
