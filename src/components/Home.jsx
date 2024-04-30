import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShimmerUi from "../shimmer/ShimmerUi";
import SidebarShimmer from "../shimmer/SidebarShimmer";
const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [brandList, setBrandList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getBrand = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://cybotrix.com/webapi/brand/getall");
      const itemList = await response.json();
      setBrandList(itemList);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  const getCategoryList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cybotrix.com/webapi/category/getall"
      );
      const itemList = await response.json();
      setCategoryList(itemList);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  const getproductList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cybotrix.com/webapi/product/getall"
      );
      const itemList = await response.json();
      setProductList(itemList);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addCart = async (id, price) => {
    try {
      const url = "https://cybotrix.com/webapi/cart/addtocart";
      const addProduct = {
        productid: id,
        orderid: localStorage.getItem("orderid"),
        qty: "1",
        price: price,
      };
      let postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(addProduct),
      };

      const response = await fetch(url, postData); // Corrected variable name
      const productInfo = await response.text(); // Changed variable name for consistency
      toast.success(productInfo, {
        autoClose: 1000, // Close after 1 seconds
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart. Please try again.", {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    getBrand();
    getCategoryList();
    getproductList();
  }, []);

  //pagination
  const PER_PAGE = 12;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(productList.length / PER_PAGE);
  return (
    <div className="container">
      <ToastContainer position="top-right" />
      <div className="row mb-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search ...."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-3">
          <div
            className="border d-flex flex-column align-items-center mb-2"
            style={{ height: "250px", width: "250px" }}
          >
            <div className="mb-3 shadow-lg p-3 w-100 text-center fw-bold">
              Shop By Category
            </div>
            <div className=" w-100 p-3" style={{ overflowY: "scroll" }}>
              {isLoading ? (
                <SidebarShimmer />
              ) : (
                brandList.map((brand, index) => {
                  return (
                    <Link key={index} className="text-decoration-none">
                      <p className="ms-3">{brand.brandname}</p>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
          <div
            className="border d-flex flex-column align-items-center "
            style={{ height: "250px", width: "250px" }}
          >
            <div className="mb-3 shadow-lg p-3 w-100 text-center fw-bold">
              Shop By Brand
            </div>
            <div className=" w-100 p-3" style={{ overflowY: "scroll" }}>
              {isLoading ? (
                <SidebarShimmer />
              ) : (
                categoryList.map((category, index) => {
                  return (
                    <Link key={index} className="text-decoration-none ">
                      <p className="ms-3">{category.categoryname}</p>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-9 product mb-3">
          <div className="row">
            {isLoading ? (
              <ShimmerUi />
            ) : (
              productList
                .slice(offset, offset + PER_PAGE)
                .map((product, index) => {
                  return (
                    <div className="col-lg-3" key={index}>
                      <div className="card mb-4">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lOAbGwrTH9HV2C9md0fn379g-KY4avQ_Jubs6IkBQg&s"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.productname}</h5>
                          <p className="card-text text-truncate">
                            {product.details}
                          </p>
                          <p>
                            <span className="fw-bold">Price : ₹ </span>
                            {product.price}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <button
                              className=" rounded-3 px-2 text-white btn-hover"
                              style={{ backgroundColor: "#866528" }}
                              onClick={addCart.bind(
                                this,
                                product.productid,
                                product.price
                              )}
                            >
                              <i className="fa fa-bag-shopping mx-2"></i>
                              Add to Cart
                            </button>
                            <button className="btn btn-warning rounded-3 ">
                              <i className="fa fa-heart fs-6  text-light "></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
      {/* React Paginate */}
      <div className="mb-4 mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination  justify-content-center"}
          pageClassName={"page-item "}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active primary"}
        />
      </div>
    </div>
  );
};

export default Home;
