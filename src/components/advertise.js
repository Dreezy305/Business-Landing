import React from "react";

function Advertise() {
  const advertArray = [
    { id: 1, content: "ADVERTISEMENT" },
    { id: 2, content: "ADVERTISEMENT" },
    { id: 2, content: "ADVERTISEMENT" },
  ];
  return (
    <section className="mt-5 py-5 mb-5 pb-5">
      <div className="container advert pb-3">
        <div className="row justify-content-evenly">
          {advertArray.map((item) => (
            <div className="card advert_card position-relative w-25">
              <div className="card-body">
                <h1 className="text-center px-2">{item.content}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advertise;
