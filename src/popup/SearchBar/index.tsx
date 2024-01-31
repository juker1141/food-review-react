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
          className=" grow flex justify-center items-center text-xl rounded-r bg-black p-2"
        >
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
