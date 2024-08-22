import logo from "../images/logo.png";
function nav1() {
  return (
    <nav className="h-[120px] border-b-2 mx-3">
      <div className="upper">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2 flex justify-left">
            <img
              src={logo}
              alt="Company logo"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-4">
            <form className="w-full">
              <input
                type="text"
                className="w-full h-10 rounded-2xl border border-black px-4"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-2 flex justify-end">
            <img src={logo} alt="Company logo" className="h-20 w-20" />
          </div>
        </div>
      </div>

      <div className="lower flex justify-between items-center overflow-x-auto whitespace-nowrap text-xs-custom font-helvetica text-custom-grey">
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Women
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Men
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Kids & Baby
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Home
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Shoes
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Handbags & Accessories
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Jewelry
        </a>
        <a
          href="#"
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Sale
        </a>
      </div>
    </nav>
  );
}

export default nav1;
