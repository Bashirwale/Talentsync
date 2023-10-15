import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className=" relative flex items-center justify-between px-4 py-2 md:py-6 lg:px-8 lg:py-4 bg-[#F2F4F7] rounded-[100px] border border-[#D0D5DD]">
      <div className="flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
          >
            <path
              d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
              fill="#1570EF"
            />
            <path
              d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
              fill="#53B1FD"
            />
          </svg>
        </span>
        <p className="text-gray text-lg md:text-2xl font-semibold">ClearLink</p>
      </div>
      <ul className="hidden lg:flex items-center justify-between gap-5">
        <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
          Solutions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
          Pricing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
      <div className="hidden lg:flex items-center gap-4 ">
        <button className="px-[14px] py-3 text-gray text-base font-semibold border border-[#98A2B3] rounded-[100px] ">
          Talk to sales
        </button>
        <button className="px-[14px] py-3 text-white text-base font-semibold bg-pryColor rounded-[100px]">
          Signup for free
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0,0,256,256"
        onClick={handleToggleMenu}
      >
        <g
          fill="#101828"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(10.66667,10.66667)">
            <path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path>
          </g>
        </g>
      </svg>
      <div
        className={`absolute top-16 right-0 lg:hidden flex flex-col gap-8 p-8 rounded-lg transform animate-fade-in ${
          showMenu ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform duration-300 ease-in-out bg-[#F9FAFB] w-full`}
      >
        <ul className="flex flex-col gap-5">
          <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
            Solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
            Resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="flex gap-2 items-center text-[18px] text-[#667085] font-semibold">
            Pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </ul>
        <div className="flex items-center gap-4 ">
          <button className="px-[14px] py-3 text-gray text-base font-semibold border border-[#98A2B3] rounded-[100px] ">
            Talk to sales
          </button>
          <button className="px-[14px] py-3 text-white text-base font-semibold bg-pryColor rounded-[100px]">
            Signup for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
