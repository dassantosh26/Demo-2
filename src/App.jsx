import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import OrdeList from "./components/OrdeList";
// import Footer from "./components/Footer";

function App() {
  if (localStorage.getItem("orderid") == null) {
    let orderid = Math.ceil(Math.random() * 7008525309);
    localStorage.setItem("orderid", orderid);
  }
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderlist" element={<OrdeList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
}

export default App;
