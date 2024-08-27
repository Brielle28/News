import NewsSectionDataMapping from "../Utils/NewsSectionDataMapping";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between w-full mt-2">
      <div className="logoDiv fixed top-[23px] left-16 z-20 flex items-center gap-2 bg-white p-2">
        <img src="/news.png" alt="news" className="logo size-7 mt-1" />
        <h2 className="logoName text-[30px] text-blue-400 font-bold font-serif">NewsMag</h2>
      </div>
      <div className="relative flex-1 ml-[200px] overflow-hidden">
        <NewsSectionDataMapping />
        {/* Arrow indicator on small screens */}
        {/* <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
          <div className="relative">
            <div className="arrow-right" />
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
