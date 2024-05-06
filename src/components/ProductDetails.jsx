import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import {  useParams } from "react-router-dom";
const ProductDetails = () => {
  const [productList, setProductList] = useState({});
  const { purl } = useParams();
  const searchedProduct = async () => {
    // alert(purl);
    let url = "https://cybotrix.com/webapi/product/searchproductbyurl";
    let searchData = { url: purl, type: "pdetails" };
    let postData = {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(searchData),
    };
    await fetch(url, postData)
      .then((response) => response.json())
      .then((resultArr) => {
        console.log(resultArr);
        // setShowSuggestions(resultArr);
        setProductList(resultArr);
      })
      .catch((err) => console.log("Error in getting product", err));
  };
  useEffect(() => {
    searchedProduct();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="mb-3">
            <img
              className="border border-secondary-subtle p-5 rounded-3 shadow-sm"
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=20&crop=false"
              alt="pic"
              height={"400px"}
            />
          </div>

          <button
            className=" rounded-3 px-2 text-white btn-hover text-center ms-5"
            style={{ backgroundColor: "#866528" }}
          >
            Add to cart
          </button>
        </div>
        <div className="col-lg-6">
          <h1 className="text-center">Product Details</h1>
          <p> {productList.productname}</p>
          <p>{productList.brandname}</p>
          <p> {productList.categorydetails}</p>
          <p> {productList.details}</p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
