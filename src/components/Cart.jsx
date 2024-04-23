import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

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
                  <div className=" row mb-3 border border-black" key={index}>
                    <div className="col-lg-4">
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
                        <button type="button" className="btn btn-warning">
                          -
                        </button>
                        <button type="button" className="">
                          <span className="fw-bold me-2">
                            {product.quantity}
                          </span>
                        </button>
                        <button type="button" className="btn btn-success">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card ">
              <div className="card-header text-center fw-bold">
                Cart Summary- {cartItem.length} Items
              </div>
              <div className="card-body">
                <p>Total Items : 6 </p>
                <p>Total Price : ₹ {totalPrice()} </p>
              </div>
              <div className="card  ">
                <div className="d-flex justify-content-between mb-4">
                  <span>Total Amount</span>
                  <span>₹ {totalPrice()}</span>
                </div>
                <p className="bg-secondary text-center fw-bold p-3">
                  Place Order
                </p>
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
