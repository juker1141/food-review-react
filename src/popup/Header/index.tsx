import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="fixed z-10 top-0 w-full flex justify-between items-center p-2 border-b border-gray-200 bg-white h-[60px] max-h-[60px]">
      <a href="/">
        <h1 className="w-10 h-10">
          <img
            className="rounded"
            src={`${process.env.PUBLIC_URL}/images/foodpanda.png`}
            alt="logo192.png"
          />
        </h1>
      </a>
      <SearchBar />
    </header>
  );
};

export default Header;
