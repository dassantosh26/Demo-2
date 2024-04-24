const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img src="login.gif" alt="pic" />
              </div>
              <div className="col-lg-2"></div>
        <div className="col-lg-4 " style={{marginTop:"100px"}}>
          <div className="card border border-dark shadow-lg ">
            <div className="card-header bg-dark text-white text-center p-2 fw-semibold fs-3">
               Login
            </div>
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="email" className="fs-5 py-2">E-mail </label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="fs-5 py-2">Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-secondary">
                Login <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
