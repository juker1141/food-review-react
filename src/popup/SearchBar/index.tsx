import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <form action="/" className="flex justify-center items-stretch">
        <input
          type="text"
          placeholder="請輸入要搜尋的關鍵字"
          className="border-gray-300 border rounded-l p-2 focus:outline-blue-400 focus:rounded-l"
        />
        <button
          type="submit"
          className="grow flex justify-center items-center text-xl rounded-r bg-primary p-2"
        >
          <FontAwesomeIcon color="white" icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
