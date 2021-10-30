import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ratings({ starObj, stars = 5 }) {
  const getRating = () => {};
  return <FontAwesomeIcon icon="star" />;
}

export default Ratings;

Ratings.propTypes = {
  starObj: PropTypes.object.isRequired,
  stars: PropTypes.number,
  ratingValue: PropTypes.number,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string,
  className: PropTypes.string,
};
