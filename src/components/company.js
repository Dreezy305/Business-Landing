import React from "react";
import Indeed from "../assets/1.png";
//import Go from "../assets/godaddy.svg";

function Company() {
  return (
    <section>
      <div className="container company">
        <div className="row company_box">
          <div class="col-md-4 col-lg-2">
            <img src={Indeed} className="" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
