import { Link } from "react-router-dom";

const Navbar = () => {
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
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to={"/"}>
                <i className="fa fa-lock"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
