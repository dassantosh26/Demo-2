import { useEffect, useState } from "react";

const OrdeList = () => {
  const [orderList, setOrderList] = useState([]);

  const getOrderList = async () => {
    const url = "https://cybotrix.com/webapi/cart/myorder";
    const getProduct = {
      userid: localStorage.getItem("tokenno"),
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(getProduct),
    };
    const response = await fetch(url, postData);
    const msg = await response.json();
    return msg;
  };

  useEffect(() => {
    getOrderList().then((msg) => {
      setOrderList(msg);
    });
  }, []);

  useEffect(() => {
    // console.log(orderList);
  }, [orderList]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <h2 className="text-center">
            Order History - {orderList.length} Items
          </h2>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {orderList.map((order) => {
            return order.map((item, index) => {
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
                    <p className="text-capitalize">
                      <span className="fw-bold">Product Name : </span>
                      {item.productname}
                    </p>
                    <p>
                      <span className="fw-bold">Price</span> : ₹
                      {item.priceperunit}
                    </p>
                    <p>
                      <span className="fw-bold">Total Amount</span> : ₹
                      {item.total}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="mt-3 ">
                      <span className="fw-bold">Order Id</span> : {item.orderid}
                    </p>
                  </div>
                </div>
              );
            });
          })}
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default OrdeList;
