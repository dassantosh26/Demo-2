import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  // const [qty, setQty] = useState("");
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
  const totalPrice = () => {
    let totalCost = 0;
    cartItem.map((item) => {
      totalCost += Number(item.total);
    });
    return totalCost;
  };
  // console.log(totalPrice());

  const deleteProduct = (product) => {
    const url = "https://cybotrix.com/webapi/cart/removeCartItem";
    const addProduct = {
      productid: product.orderid,
      id:product.id,
      qty: product.quantity,
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(addProduct),
    };
    fetch(url, postData)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getCartItem();
      });
  };

  const updateCart = (product, action) => {
    const url = " https://cybotrix.com/webapi/cart/addtocart";
    const addQty =
      action === "add"
        ? {
            productid: product.productid,
            orderid: "7008525309",
            qty: 1,
            price: product.priceperunit,
          }
        : product.quantity <= 1
        ? deleteProduct(product.id, product.productid, product.quantity)
        : {
            productid: product.productid,
            orderid: "7008525309",
            qty: -1,
            price: product.priceperunit,
          };

    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(addQty),
    };

    fetch(url, postData)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getCartItem();
      });
  };

  const loginAuth = () => {
    if (localStorage.getItem("tokenno")) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h3 className="text-center">Cart Items</h3>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h4 className="text-center mb-3">Item Added</h4>
            <div>
              {cartItem.map((product, index) => {
                return (
                  <div
                    className=" row mb-3 border border-black main-div"
                    key={index}
                  >
                    <div className="col-lg-3">
                      {
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lOAbGwrTH9HV2C9md0fn379g-KY4avQ_Jubs6IkBQg&s"
                          className="card-img-top"
                          alt="..."
                        />
                      }
                    </div>
                    <div className="col-lg-4 ">
                      <p className="mt-3 fw-bold">{product.productname}</p>
                      <p>
                        <span className="fw-bold">Price</span> : ₹
                        {product.priceperunit}
                      </p>
                      <p>
                        <span className="fw-bold">Total Amount</span> : ₹
                        {product.total}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p className="mt-3 ">
                        <span className="fw-bold">Order Id</span> :
                        {product.orderid}
                      </p>

                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={updateCart.bind(this, product, "sub")}
                        >
                          -
                        </button>
                        <button type="button" className="">
                          <span className="fw-bold me-2">
                            {product.quantity}
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={updateCart.bind(this, product, "add")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <i
                        className="fa fa-circle-xmark fa-2x delete-btn mt-3 del-icon"
                        onClick={deleteProduct.bind(this, product)
                        }
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card ">
              <div className="card-header text-center fw-bold">
                Cart Summary
              </div>
              <div className="card-body">
                <p>Total Items : {cartItem.length} </p>
                <p>Total Price : ₹ {totalPrice()} </p>
              </div>
              <div className="card ">
                <div className="d-flex justify-content-between mb-4 p-3">
                  <span>Total Amount</span>
                  <span>₹ {totalPrice()}</span>
                </div>
                <button
                  className="btn btn-secondary w-100 "
                  onClick={loginAuth}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
