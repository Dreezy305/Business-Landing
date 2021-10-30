import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ratings({
  starObj,
  stars = 5,
  ratingValue,
  fillColor,
  emptyColor,
  className,
}) {
  const getRating = () => {};
  return <FontAwesomeIcon icon="star" />;
}

export default Ratings;

Ratings.propTypes = {
  starObj: PropTypes.array,
  stars: PropTypes.number,
  ratingValue: PropTypes.number,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};
