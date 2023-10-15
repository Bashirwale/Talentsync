import { useState } from "react";

const FaqsSection = () => {
  const [showDetails, setShowDetails] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
  });

  const handleToggleDetails = (divKey) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [divKey]: !prevDetails[divKey],
    }));
  };
  return (
    <div className="flex flex-col lg:flex-row gap-16 py-10 md:py-16 lg:py-24">
      <div className="lg:w-1/2">
        <p className="text-pryColor text-base md:text-[18px] font-semibold">
          Support
        </p>
        <h2 className="text-gray text-3xl md:text-5xl font-semibold mt-2">
          FAQs
        </h2>
        <p className="text-[#667085] text-lg md:text-2xl mt-5">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="border-b border-[#667085]">
            chat to our friendly team.
          </span>
        </p>
      </div>
      <ul className="flex flex-col gap-4 lg:w-1/2">
        <li
          className={
            showDetails.open1
              ? "flex bg-[#F9FAFB] justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open1")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              How many participants can join a ClearLink video conference?
            </h3>
            <p
              className={
                showDetails.open1
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          className={
            showDetails.open2
              ? "flex bg-[#F9FAFB] justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open2")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              Can I use ClearLink on multiple devices?
            </h3>
            <p
              className={
                showDetails.open2
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          className={
            showDetails.open3
              ? "flex bg-[#F9FAFB] justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open3")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              Is ClearLink compatible with other video conferencing platforms?
            </h3>
            <p
              className={
                showDetails.open3
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          className={
            showDetails.open4
              ? "flex bg-[#F9FAFB] justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open4")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              How does ClearLink ensure the security of my video conferences?
            </h3>
            <p
              className={
                showDetails.open4
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          className={
            showDetails.open5
              ? "flex bg-[#F9FAFB] justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open5")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              Do I need to download any software to use ClearLink?
            </h3>
            <p
              className={
                showDetails.open5
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          className={
            showDetails.open6
              ? "flex bg-[#F9FAFB] p-4 md:p-6 lg:p-8 border-b border-[#EAECF0] rounded-2xl"
              : "flex items-center justify-between p-4 md:p-6 lg:p-8 border-b border-[#EAECF0]"
          }
          onClick={() => handleToggleDetails("open6")}
        >
          <div>
            <h3 className="text-gray text-lg md:text-xl font-semibold">
              What kind of customer support does ClearLink provide?
            </h3>

            <p
              className={
                showDetails.open6
                  ? " text-[#475467] text-[18px] font-normal"
                  : "hidden text-[#475467] text-[18px] font-normal"
              }
            >
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default FaqsSection;
