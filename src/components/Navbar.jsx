import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  const getCartItem = () => {
    const url = " https://cybotrix.com/webapi/cart/getcartitem";
    const addProduct = {
      orderid: "7008525309",
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(addProduct),
    };
    fetch(url, postData)
      .then((response) => response.json())
      .then((msg) => {
        // console.log(msg);
        setCartItem(msg);
      });
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    getCartItem();
  }, [cartItem]);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top mb-5">
      <div className="container">
        <Link className="navbar-brand">
          <i className="fa fa-building fa-lg mx-2"></i>
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link className="nav-link active" to={"/"}>
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to={"/"}>
                <i className="fa fa-home"></i> About us
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to={"/cart"}>
                <i className="fa fa-shopping-cart"></i> My Cart
                {cartItem.length === 0 ? "" : cartItem.length}
              </Link>
            </li>
            <li className="nav-item me-4">
              {localStorage.getItem("tokenno") ? (
                <Link className="nav-link active" to={"/cart"}>
                  <i className="fa fa-user"></i> {localStorage.getItem("name")}
                </Link>
              ) : (
                <Link className="nav-link active" to={"/login"}>
                  <i className="fa fa-lock"></i> Login
                </Link>
              )}
            </li>
            <li className="nav-item me-4">
              {localStorage.getItem("status") === "SUCCESS" ? (
                <button className="nav-link active" onClick={logout}>
                  <i className="fa fa-power-off"></i> Logout
                </button>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
