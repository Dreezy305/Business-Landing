import React from "react";
import FaceBook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedln from "../assets/link.svg";

function Footer() {
  const social = [
    { id: 1, icon: FaceBook },
    { id: 2, icon: Twitter },
    { id: 3, icon: Linkedln, styles: { zIndex: "10" } },
  ];
  return (
    <section className="footer mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer_col1 pt-5 pb-3">
            <p className="py-5">
              This platform for minority groups to express their opinions on
              employment, workplace experiences and rate employers.{" "}
            </p>
            <div className="d-flex flex-row pb-3 mb-3">
              {social.map((item) => (
                <img
                  src={item.icon}
                  className="p-3 me-2"
                  alt="...."
                  style={{ ...item.styles }}
                />
              ))}
            </div>
            <p className="footer_col1--p mb-2">
              <span className="me-1">&copy;</span>
              <span className="me-1">Copyright</span>
              <span>{new Date().getFullYear()}</span>
            </p>
          </div>
          <div className="col-md-2 footer_col2 pt-5">
            <h5 className="mb-4">Company</h5>
            <h6>About Us</h6>
            <h6>Contact Us</h6>
            <h6>Terms of Use</h6>
            <h6>Privacy Policy</h6>
          </div>
          <div className="col-md-2 footer_col2 pt-5">
            <h5 className="mb-4">Features</h5>
            <h6>Timeline</h6>
            <h6>Peer Review</h6>
            <h6>Create Account</h6>
            <h6>Sign In</h6>
          </div>
          <div className="col-md-2 footer_col2 pt-5">
            <h5 className="mb-4">Contact Us</h5>
            <h6>Inquiry@thaapp.com</h6>
            <h6>1-800-200-300</h6>
            <h6>54 Currah birin, Castleroy, Limerick</h6>
            <h6>Ireland</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
