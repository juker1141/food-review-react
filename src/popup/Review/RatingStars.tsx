import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

import { type Rating } from "./ReviewList";

const RatingStars = ({ rating }: { rating: Rating }) => {
  return (
    <ul className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((number) => {
        return (
          <li key={number}>
            <FontAwesomeIcon
              color={number <= rating ? "#facc15" : "#93c5fd"}
              icon={number <= rating ? faSolidStar : faRegularStar}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RatingStars;
