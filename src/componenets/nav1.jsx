function nav1(){
    return(
        <nav className="flex lg:flex-row lg:justify-between p-2 text-xs-custom font-helvetica text-custom-grey border-b-2 flex-row justify-center mx-2">
        <div className="flex lg:flex-row lg:items-center lg:justify-start lg:space-x-2">
          <p className="text-center lg:text-left">
            We now ship to 200 locations worldwide
          </p>
          <a
            className="border-b-2 border-black text-center lg:text-left"
            href="/"
          >
            Details
          </a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <ul className="flex space-x-4">
            <li className="border-r-2 border-custom-grey pr-4">
              <a className="hover:border-b-2 hover:border-black" href="/">
                Order Tracking
              </a>
            </li>
            <li className="border-r-2 border-custom-grey pr-4">
              <a className="hover:border-b-2 hover:border-black" href="/">
                Stores
              </a>
            </li>
            <li className="border-r-2 border-custom-grey pr-4">
              <a className="hover:border-b-2 hover:border-black" href="/">
                Gift Registry
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 hover:border-black" href="/">
                Shipping To
              </a>
            </li>
          </ul>
        </div>
      </nav>

    );
}

export default nav1;