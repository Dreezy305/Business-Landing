import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../assets/card.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";

function GrowYourBusiness() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const TEXTS = [
    "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing",
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference",
  ];

  return (
    <section className="mt-3 mb-5 pb-5 grow">
      <div className="container position-relative grow_box">
        <div className="">
          <img src={Card} className="bgImage1 position-absolute" alt="..." />
          <img src={Card2} className="bgImage2 position-absolute" alt="..." />
          <img src={Card3} className="bgImage3 position-absolute" alt="..." />
        </div>
        <div className="row">
          <div className="col-md-6 pt-5 ">
            <h1 className="mt-5 pt-5 py-4">
              Grow your business with real-time reviews
            </h1>

            <p>
              Find out more on what people and saying about your company, with
              real time reveiw and data.
            </p>
            <div className="d-flex flex-row grow_box--input">
              <input
                type="text"
                className="px-4"
                placeholder="Search for companies"
              />
              <button type="button">Search</button>
            </div>
            <p className="mt-3 grow_box--p alreadySignedIn">
              <span className="me-1">Already have an account?</span>
              <span>Sign In</span>
            </p>
          </div>
        </div>

        <div className="grow_box--quote position-relative pb-5 mb-5">
          <FontAwesomeIcon
            icon="quote-left"
            color="#FF6634"
            className="position-absolute rightQuote rightQuoteB"
          />
          <FontAwesomeIcon
            icon="quote-right"
            color="#FF6634"
            className="leftQuote position-absolute"
          />
          <p className="Quote" id="p">
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default GrowYourBusiness;
