import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  // const [qty, setQty] = useState("");

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

  const deleteProduct = (id, pId, qty) => {
    const url = "https://cybotrix.com/webapi/cart/removeCartItem";
    const addProduct = {
      productid: pId,
      id: id,
      qty: qty,
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

  const updateQty = (product, action) => {
    // console.log(product);
    if (action === "add") {
      product["quantity"] = Number(product.quantity) + 1;
    } else {
      product["quantity"] = Number(product.quantity) - 1;
    }
    if (product.quantity === 0) {
      deleteProduct(product.productidid);
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
                          onClick={updateQty.bind(this, product, "sub")}
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
                          onClick={updateQty.bind(this, product, "add")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <i
                        className="fa fa-circle-xmark fa-2x delete-btn mt-3 del-icon"
                        onClick={() =>
                          deleteProduct(
                            product.id,
                            product.productid,
                            product.quantity
                          )
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
                <button className="btn btn-secondary w-100 ">
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
