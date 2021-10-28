import React from "react";
import Indeed from "../assets/1.png";
//import Go from "../assets/godaddy.svg";

function Company() {
  return (
    <section>
      <div className="container company">
        <div className="row company_box">
          <img src={Indeed} className="img-fluid" alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Company;
