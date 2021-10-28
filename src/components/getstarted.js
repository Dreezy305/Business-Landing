import React from "react";

function GetStarted() {
  return (
    <section className="mt-5 pt-5 mb-5 pb-5">
      <div className="container getStarted">
        <div className="row justify-content-around">
          <div className="col-md-7">
            <h1 className="p-5">
              Get started today sign up and start reveiwing business.
            </h1>
          </div>
          <div className="col-md-3 getStarted_btn">
            <button type="button" className="btn mt-5 px-4">
              Create free Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
