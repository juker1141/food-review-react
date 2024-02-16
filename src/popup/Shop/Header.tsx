import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="px-4 py-4 w-full border-b border-gray-200 flex">
      <div className="w-12 h-12 shrink-0 flex items-center mr-4 border border-gray-200 rounded">
        <img
          className="rounded"
          src={`${process.env.PUBLIC_URL}/images/default-shop.png`}
          alt="logo192.png"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-medium truncate" title={"Shop Title"}>
            Shop Title
          </h3>
          <span className="text-sm">
            3.5
            <FontAwesomeIcon
              className="ml-1"
              color="#facc15"
              icon={faSolidStar}
            />
          </span>
        </div>
        <p
          className="text-sm font-light text-gray-500 truncate"
          title={"Lorem ipsum dolor sit amet."}
        >
          address
        </p>
      </div>
    </div>
  );
};

export default Header;
