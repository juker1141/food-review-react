import { type Stars } from "./ReviewList";

const ReviewStars = ({ stars }: { stars: Stars }) => {
  return (
    <ul className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((number) => {
        return (
          <li key={number}>
            <i
              className={`${
                number <= stars
                  ? "fa-solid fa-star text-yellow-400"
                  : "fa-regular fa-star text-blue-300"
              }`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewStars;
