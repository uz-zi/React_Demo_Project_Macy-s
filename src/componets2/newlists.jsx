import { AiOutlineClose, AiOutlineCaretRight } from "react-icons/ai";

const OptionsSideNavList = () => {
  const list = [
    "Women", 
    "Men", 
    "Kids & Baby", 
    "Home", 
    "Shoes", 
    "Handbags & Accessories", 
    "Jewelry", 
    "Sale & Clearance"
  ];

  return (
    <div className="hidden md:block fixed md:top-[450px] left-0 bottom-0 bg-white p-4 shadow-lg z-50 md:w-[850px]">
      <div className="m-8 text-4xl">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">Shop By Department</h1>
          <span className="cursor-pointer">
            <AiOutlineClose size={24} />
          </span>
        </div>

        <ul className="space-y-[60px] font-thin mt-[95px] relative">
          {list.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{item}</span>
              <AiOutlineCaretRight className="text-gray-500" size={20} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OptionsSideNavList;
