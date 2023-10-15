import appscreen from "../assets/chatscreen.png";

const CTASection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 md:py-16 lg:py-24">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl text-gray font-semibold">
          Ready to clear the path to perfect communication?
        </h2>
        <ul className="flex flex-col gap-4 px-4">
          <li className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-lg md:text-2xl text-[#475467]">
              30 days free trial
            </span>
          </li>
          <li className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-lg md:text-2xl text-[#475467]">
              Cancel at any time
            </span>
          </li>
          <li className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-lg md:text-2xl text-[#475467]">
              Access to all features
            </span>
          </li>
          <li className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-lg md:text-2xl text-[#475467]">
              Peronalized onboarding
            </span>
          </li>
        </ul>
        <div className="flex items-center gap-4 mt-2">
          <button className="px-6 py-[14px] text-gray text-base font-semibold border border-[#98A2B3] rounded-[100px] ">
            Talk to sales
          </button>
          <button className="px-6 py-[14px] text-white text-base font-semibold bg-pryColor rounded-[100px]">
            Signup for free
          </button>
        </div>
      </div>
      <div className="mt-16 lg:w-1/2">
        <img src={appscreen} alt="screen mockup" />
      </div>
    </div>
  );
};

export default CTASection;
