import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  const getCartItem = async () => {
    const url = "https://cybotrix.com/webapi/cart/getcartitem";
    const addProduct = {
      orderid: localStorage.getItem("orderid"),
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(addProduct),
    };
    try {
      const response = await fetch(url, postData);
      const msg = await response.json();
      setCartItem(msg);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    getCartItem();
  }, []);
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
            {localStorage.getItem("status") === "SUCCESS" ? (
              <>
                <li className="nav-item me-4">
                  <Link className="nav-link active" to={"/orderlist"}>
                    <i className="fa fa-home"></i> My Order
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <button className="nav-link active" onClick={logout}>
                    <i className="fa fa-power-off"></i> Logout
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
