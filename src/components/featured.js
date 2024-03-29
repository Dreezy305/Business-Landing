import React from "react";
import StarRatings from "react-star-ratings";

import Briefcase from "../assets/briefcase.svg";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import Ellipse5 from "../assets/Ellipse5.png";
import Ellipse6 from "../assets/Ellipse6.png";

function Featured() {
  const reviews = [
    {
      id: 1,
      review: "sexual assault",
      company: "Google",
      pic: Ellipse1,
      rating: 4,
    },
    { id: 2, review: "nepotism", company: "Apple", pic: Ellipse2, rating: 4.7 },
    { id: 3, review: "racism", company: "Google", pic: Ellipse3, rating: 2 },
    {
      id: 4,
      review: "sexual assault",
      company: "Starbuck",
      pic: Ellipse4,
      rating: 4,
    },
    { id: 5, review: "racism", company: "Facebook", pic: Ellipse5, rating: 4 },
    { id: 6, review: "racism", company: "Google", pic: Ellipse6, rating: 2 },
  ];

  return (
    <section className="mt-5 pt-5">
      <div className="container featured">
        <div className="row text-center">
          <h1 className="fw-bold mb-4">Featured Reviews</h1>
          <p className="mt-2 mb-4">
            Here are some from the review been done by some of the employees on
            this platform.
          </p>
          <div className="container mt-4 mb-3">
            <div className="row justify-content-evenly">
              {reviews.map((item) => (
                <div className="card featured_card p-2 mb-5">
                  <div class="card-body">
                    <div className="d-flex flex-row align-items-baseline ">
                      <StarRatings
                        rating={item.rating}
                        starDimension="11px"
                        starSpacing="3px"
                        starRatedColor="#FF6634"
                      />
                      <span className="fw-bold ms-1">4.0</span>
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
                    <div className="featured_card--bottom featuredBottom pb-2">
                      <img src={item.pic} className="" alt="..." />
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
      <div className="d-flex flex-row justify-content-center mb-5 pb-3">
        <div className="dot1 me-2"></div>
        <div className="dot2 me-2"></div>
        <div className="dot2"></div>
      </div>
    </section>
  );
}

export default Featured;
