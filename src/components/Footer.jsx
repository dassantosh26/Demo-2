import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="container-fluid bg-black footer">
          <div className="container p-5 ">
          <div className="row text-white">
        <div className="col-lg-3 ">
          <div >
            <li >
              <Link className="footer1" >About Us</Link>
            </li>
            <li>
              <Link className="footer1" >Contact Us</Link>
            </li>
            <li>
              <Link className="footer1" >Careers</Link>
            </li>
            <li>
              <Link className="footer1" >Press</Link>
            </li>
            <li>
              <Link className="footer1" >Corporate Information</Link>
            </li>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <h6>Help</h6>
            <li>
              <Link className="footer1" >Payments</Link>
            </li>
            <li>
              <Link className="footer1" >Shipping</Link>
            </li>
            <li>
              <Link className="footer1" >Cancellation & Returns</Link>
            </li>
            <li>
              <Link className="footer1" >Report Infringement</Link>
            </li>
            <li>
              <Link className="footer1" >FAQ</Link>
            </li>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <h6>Consumer Policy</h6>
            <li>
              <Link className="footer1" >Cancellation & Returns</Link>
            </li>
            <li>
              <Link className="footer1" >Terms & use</Link>
            </li>
            <li>
              <Link className="footer1" >Privacy</Link>
            </li>
            <li>
              <Link className="footer1" >Security</Link>
            </li>
            <li>
              <Link className="footer1" >Cancellation & Returns</Link>
            </li>
          </div>
        </div>
        <div className="col-lg-3">
          <h6>Social</h6>
          <div>
            <Link className="footer1" >
              <span>
                <i className="fa-brands fa-facebook fa-2x mx-2"></i>
              </span>
            </Link>
            <Link className="footer1" >
              <span>
                <i className="fa-brands fa-instagram fa-2x mx-2"></i>
              </span>
            </Link>
            <Link className="footer1 mx-3" >
              <span>
                <i className="fa-brands fa-twitter fa-2x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
          </div>
     
    </div>
  );
};

export default Footer;

// {
//   /* <div className="container-fluid bg-black" style={{height:"35vh"}}>
// <div className="row footer p-2">
//     <div className="col-lg-3 d-flex flex-column">
//       <p className='text-white fs-2 d-flex align-items-center gap-2  '> Shopify</p>
//       <li><a href="" className=''>About Us</a></li>
//       <li><a href="">Contact</a></li>
//       <li><a href="">Careers</a></li>
//       <li><a href="">Press</a></li>
//       <li><a href="">Corporate Information</a></li>
//     </div>
//     <div className="col-lg-3">
//         <h6>Help</h6>
//         <li><a href="">Payments</a></li>
//       <li><a href="">Shipping</a></li>
//       <li><a href="">Cancellation & Returns</a></li>
//       <li><a href="">FAQ</a></li>
//       <li><a href="">Report Infringement</a></li>
//     </div>
//     <div className="col-lg-3">
//         <h6>Consumer Policy</h6>
//         <li><a href="">Cancellation & Returns</a></li>
//       <li><a href="">Terms & use</a></li>
//       <li><a href="">Privacy</a></li>
//       <li><a href="">Security</a></li>
//       <li><a href="">Grievance Redresasl</a></li>
//     </div>
//     <div className="col-lg-3 social-links">
//         <h6>Follow Us</h6>
//         <div className='d-flex'>
//             {/* <span><FaFacebook /></span>
//             <span><FaInstagramSquare /></span>
//             <span><FaTwitterSquare /></span> */
// }
// {
//   /* <span><IoLogoYoutube /></span> */
// }
// //         </div>
// //     </div>
// // </div>
// // <div className='text-white text-center  '>
// //     <p className='p-5'>© Copyright 2024<span className='footer-logoname'> Shopify </span>. All rights reserved.  </p>

// // </div>
// // </div> */}
