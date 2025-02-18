import { Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./Components/Pages/Shop";
import { ShopCategore } from "./Components/Pages/ShopCategore";
import { Product } from "./Components/Pages/Product";
import Card from "./Components/Pages/Card";
import { LoginSignup } from "./Components/Pages/LoginSignup";
import { Footer } from "./Components/Foorer/Footer";
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_womens from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategore banner={banner_mens} categore={"men"} />}
        />
        <Route
          path="/womens"
          element={<ShopCategore banner={banner_womens} categore={"women"} />}
        />
        <Route
          path="/kids"
          element={<ShopCategore banner={banner_kids} categore={"kid"} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/card" element={<Card />} />
        <Route path="/loginSingup" element={<LoginSignup />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
