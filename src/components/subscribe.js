import React from "react";

function Subscribe() {
  return (
    <section className="sub">
      <div className="container subscribe">
        <div className="row ">
          <div className="col-md-6 p-5">
            <h1 className="fw-bold mb-2">Subscribe to our Newsletter</h1>
            <p className="mt-1 mb-4">
              Get latest update lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
            <div className="d-flex flex-row mt-2">
              <input
                type="text"
                placeholder="Enter a valid email address"
                className="px-4 me-2"
              />
              <button type="button" className="btn ms-1 px-3">
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-6 subscribe_mail p-5"></div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
