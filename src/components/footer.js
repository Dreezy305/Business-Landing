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
      <div className="container ">
        <div className="row footer_row">
          <div className="col-md-6 footer_col1 pt-5 pb-4">
            <p className="py-5">
              This platform for minority groups to express their opinions on
              employment, workplace experiences and rate employers.{" "}
            </p>

            <p className="footer_col1--p footer_copy">
              <span className="me-1">&copy;</span>
              <span className="me-1">Copyright</span>
              <span>{new Date().getFullYear()}</span>
            </p>
          </div>
          <div className="col-lg-2 footer_col2 footer-subheader pt-5">
            <h5 className="mb-4">Company</h5>
            <ul class="list-inline company-list">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-2 footer_col2 footer-subheader2 pt-5">
            <h5 className="mb-4">Features</h5>
            <ul class="list-inline company-list">
              <li>Timeline</li>
              <li>Peer Review</li>
              <li>Create Account</li>
              <li>Sign In</li>
            </ul>
          </div>
          <div className="col-lg-2 footer_col2 pt-5">
            <h5 className="mb-4">Contact Us</h5>
            <ul class="list-inline company-list">
              <li>Inquiry@thaapp.com</li>
              <li>1-800-200-300</li>
              <li>54 Currah birin, Castleroy, Limerick</li>
              <li>Ireland</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row footer_img pb-4 ">
        {social.map((item) => (
          <img
            src={item.icon}
            className="p-3 me-2"
            alt="...."
            style={{ ...item.styles }}
          />
        ))}
      </div>
    </section>
  );
}

export default Footer;
