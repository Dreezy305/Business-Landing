import React from "react";
import Star from "../assets/star.svg";
import Briefcase from "../assets/briefcase.svg";
import Ellipse1 from "../assets/ellipse1.svg";
import unfilledstar from "../assets/unfilledstar.svg";
import Bistar from "../assets/bistar.svg";

function Featured() {
  const reviews = [
    { id: 1, review: "sexual assault", company: "Google" },
    { id: 2, review: "nepotism", company: "Apple" },
    { id: 3, review: "racism", company: "Google" },
    { id: 4, review: "sexual assault", company: "Starbuck" },
    { id: 5, review: "racism", company: "Facebook" },
    { id: 6, review: "racism", company: "Google" },
  ];

  const renderStars = (stars) => {
    const starsArray = [1, 2, 3, 4, 5, 6];
    const numberOfFilledStars = starsArray.slice(0, stars);
    const numberOfOpenStars = stars < 5 ? starsArray.slice(0, 5 - stars) : [];
    return (
      <>
        {numberOfFilledStars.map((item, index) => (
          <img
            // key={index}
            src={Star}
            alt="star_filled_icon"
            className="me-1"
          />
        ))}
        {numberOfOpenStars.map((item, index) => (
          <img
            // key={index}
            src={unfilledstar}
            alt="star_filled_icon"
            className="me-1"
          />
        ))}
      </>
    );
  };

  return (
    <section className="mt-5 pt-5">
      <div className="container featured">
        <div className="row text-center">
          <h1 className="fw-bold mb-2">Featured Reviews</h1>
          <p className="mt-2">
            Here are some from the review been done by some of the employees on
            this platform.
          </p>
          <div className="container">
            <div className="row justify-content-evenly">
              {reviews.map((item) => (
                <div className="card featured_card p-2 mb-5">
                  <div class="card-body">
                    <div className="d-flex flex-row">
                      {/*<img src={Star} className="me-1" alt="..." />*/}
                      {renderStars(
                        item.id == 1 || item.id == 3 || item.id == 5
                      )}
                      <span className="fw-bold">4.0</span>
                    </div>
                    <p class="card-text text-left mt-2">
                      Great place to work with the good work culture and people
                      skills.
                    </p>
                    <div className="d-flex flex-row justify-content-between featured_card--mid">
                      <p className="px-2">{item.review}</p>
                      <p className="text-right bg-light secondP">
                        <img src={Briefcase} className="me-2" alt="..." />

                        <span>{item.company}</span>
                      </p>
                    </div>
                    <div className="featured_card--bottom pb-2">
                      <img src={Ellipse1} className="" alt="..." />
                      <h5 className="">Anonymous</h5>
                      <p className="">Business Analysis</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
