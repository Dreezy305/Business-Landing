import React from "react";
import Indeed from "../assets/1.png";
import GoDaddy from "../assets/2.png";
import Monster from "../assets/3.png";
import eBay from "../assets/4.png";
import Linkedln from "../assets/5.png";

function Company() {
  const logos = [
    { id: 1, logo: eBay },
    { id: 2, logo: Linkedln },
    { id: 3, logo: Indeed },
    { id: 4, logo: GoDaddy },
    { id: 5, logo: Monster },
  ];
  return (
    <section className="border-bottom mb-5">
      <div className="container company ">
        <div className="row company_box align-items-baseline justify-content-evenly mt-2 pb-2">
          {logos.map((item) => (
            <div class="col-md-4 col-lg-2">
              <img src={item.logo} className="" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Company;
