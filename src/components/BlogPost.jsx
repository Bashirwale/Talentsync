import star from "../assets/Star.svg";

import img1 from "../assets/Image.png";
import img2 from "../assets/Image (1).png";
import img3 from "../assets/Image (2).png";
import img4 from "../assets/Image (3).png";
import img5 from "../assets/Image (4).png";

import sara from "../assets/sarah.png";

const BlogPost = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center px-5 md:px-8 md:py-16 py-10 lg:py-24 gap-16">
      <div className="flex flex-col gap-5 md:gap-8 lg:gap-12 lg:w-1/2">
        <svg
          width="113"
          height="32"
          viewBox="0 0 113 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_9064)">
            <path
              d="M24.3283 6.0608C24.3065 5.90185 24.1676 5.81367 24.0524 5.80407C23.938 5.79447 21.6973 5.76042 21.6973 5.76042C21.6973 5.76042 19.8233 3.94059 19.6381 3.75546C19.4531 3.57034 19.0915 3.62622 18.9509 3.66814C18.9492 3.66902 18.599 3.7773 18.0096 3.9598C17.9109 3.6402 17.7659 3.24724 17.559 2.85254C16.8919 1.57936 15.9147 0.906098 14.7341 0.904357C14.7323 0.904357 14.7314 0.904357 14.7297 0.904357C14.6476 0.904357 14.5664 0.912215 14.4844 0.919197C14.4494 0.877283 14.4145 0.836244 14.3778 0.796071C13.8635 0.245936 13.2042 -0.0221472 12.4139 0.0014301C10.8892 0.0450918 9.3707 1.14624 8.13944 3.10228C7.27318 4.4785 6.61388 6.20753 6.42702 7.54618C4.67617 8.08845 3.45189 8.46741 3.42482 8.47617C2.54111 8.75384 2.51317 8.78091 2.3979 9.61401C2.31233 10.2436 0 28.124 0 28.124L19.3779 31.4754L27.7767 29.3875C27.7767 29.3875 24.3501 6.21975 24.3283 6.0608ZM17.0394 4.26019C16.5932 4.39816 16.0858 4.55535 15.5357 4.72563C15.5244 3.95369 15.4327 2.87961 15.0729 1.95136C16.2299 2.17054 16.7993 3.47952 17.0394 4.26019ZM14.5219 5.03999C13.5063 5.35433 12.3982 5.69752 11.2866 6.0416C11.5992 4.84439 12.1921 3.65242 12.9204 2.87088C13.1911 2.58009 13.57 2.25612 14.0189 2.07099C14.4407 2.95121 14.5324 4.19732 14.5219 5.03999ZM12.4444 1.01613C12.8025 1.00827 13.1037 1.08686 13.3614 1.25627C12.9492 1.47021 12.551 1.77759 12.1773 2.1784C11.2088 3.21755 10.4666 4.83042 10.1705 6.38652C9.24753 6.67205 8.3446 6.95239 7.51329 7.20913C8.03814 4.75969 10.0911 1.08424 12.4444 1.01613Z"
              fill="#95BF47"
            />
            <path
              d="M24.0532 5.80495C23.9388 5.79535 21.6981 5.76131 21.6981 5.76131C21.6981 5.76131 19.8242 3.94147 19.639 3.75635C19.5701 3.68736 19.4766 3.65156 19.3788 3.63672L19.3797 31.4746L27.7776 29.3875C27.7776 29.3875 24.351 6.22064 24.3292 6.06169C24.3073 5.90274 24.1676 5.81455 24.0532 5.80495Z"
              fill="#5E8E3E"
            />
            <path
              d="M14.7241 10.1231L13.7487 13.7723C13.7487 13.7723 12.6607 13.2772 11.3709 13.3584C9.47947 13.478 9.45938 14.6708 9.47863 14.9704C9.58166 16.6024 13.8753 16.9587 14.1164 20.7817C14.3059 23.7892 12.5209 25.8465 9.94929 26.0089C6.8624 26.2036 5.16309 24.3829 5.16309 24.3829L5.81715 21.6008C5.81715 21.6008 7.52779 22.8915 8.89702 22.805C9.79124 22.7483 10.1108 22.0209 10.0785 21.5065C9.94405 19.3776 6.4476 19.5033 6.2267 16.0051C6.04068 13.0615 7.97405 10.0785 12.2398 9.80956C13.8832 9.7039 14.7241 10.1231 14.7241 10.1231Z"
              fill="white"
            />
            <path
              d="M38.8366 17.7645C37.8709 17.2405 37.3745 16.7988 37.3745 16.1916C37.3745 15.4191 38.064 14.9228 39.1406 14.9228C40.3938 14.9228 41.5128 15.4468 41.5128 15.4468L42.3954 12.7428C42.3954 12.7428 41.5838 12.1079 39.1951 12.1079C35.871 12.1079 33.5671 14.0116 33.5671 16.6879C33.5671 18.2053 34.6428 19.3642 36.078 20.1913C37.2368 20.853 37.6508 21.3225 37.6508 22.0119C37.6508 22.7291 37.0714 23.3085 35.9957 23.3085C34.3925 23.3085 32.8785 22.4805 32.8785 22.4805L31.9406 25.1845C31.9406 25.1845 33.3393 26.1225 35.6925 26.1225C39.1137 26.1225 41.5692 24.4396 41.5692 21.4047C41.5683 19.7782 40.3271 18.6193 38.8366 17.7645Z"
              fill="black"
            />
            <path
              d="M52.4658 12.0811C50.7828 12.0811 49.4586 12.8814 48.4383 14.0949L48.3828 14.0671L49.8448 6.42542H46.0374L42.3408 25.8749H46.1482L47.4171 19.2266C47.9134 16.7157 49.21 15.1714 50.4243 15.1714C51.2791 15.1714 51.6109 15.7508 51.6109 16.5789C51.6109 17.1029 51.5554 17.7377 51.4454 18.2617L50.0111 25.8758H53.8188L55.3081 18.0131C55.4738 17.1851 55.5845 16.1926 55.5845 15.53C55.5829 13.3777 54.4519 12.0811 52.4658 12.0811Z"
              fill="black"
            />
            <path
              d="M64.1902 12.0811C59.61 12.0811 56.5763 16.2194 56.5763 20.8262C56.5763 23.7779 58.3966 26.1502 61.818 26.1502C66.3148 26.1502 69.3496 22.1228 69.3496 17.4051C69.3496 14.6742 67.749 12.0811 64.1902 12.0811ZM62.3143 23.2271C61.0175 23.2271 60.4656 22.1237 60.4656 20.7439C60.4656 18.5648 61.5972 15.006 63.6661 15.006C65.018 15.006 65.4587 16.1648 65.4587 17.296C65.4587 19.6405 64.3287 23.2271 62.3143 23.2271Z"
              fill="black"
            />
            <path
              d="M79.0883 12.0811C76.5183 12.0811 75.0599 14.3433 75.0599 14.3433H75.0054L75.2262 12.3019H71.8605C71.6952 13.6816 71.391 15.7776 71.0883 17.3505L68.4396 31.2819H72.2471L73.2947 25.6539H73.3781C73.3781 25.6539 74.1592 26.1502 75.6129 26.1502C80.0818 26.1502 83.0059 21.5711 83.0059 16.9357C83.0059 14.3711 81.8744 12.0811 79.0883 12.0811ZM75.4466 23.2816C74.4582 23.2816 73.8733 22.7299 73.8733 22.7299L74.5081 19.1711C74.9498 16.7988 76.191 15.2259 77.5156 15.2259C78.6744 15.2259 79.0327 16.3016 79.0327 17.3228C79.0327 19.7782 77.5706 23.2816 75.4466 23.2816Z"
              fill="black"
            />
            <path
              d="M88.4407 6.61853C87.2273 6.61853 86.2615 7.58425 86.2615 8.82538C86.2615 9.95655 86.9786 10.7291 88.0546 10.7291H88.1096C89.2963 10.7291 90.3166 9.9288 90.3444 8.52227C90.3444 7.41879 89.5995 6.61853 88.4407 6.61853Z"
              fill="black"
            />
            <path
              d="M83.1163 25.875H86.9227L89.5168 12.3853H85.6815L83.1163 25.875Z"
              fill="black"
            />
            <path
              d="M99.2007 12.3573H96.552L96.6895 11.7225C96.9103 10.4259 97.683 9.26702 98.952 9.26702C99.6293 9.26702 100.165 9.46017 100.165 9.46017L100.91 6.48076C100.91 6.48076 100.248 6.1499 98.8408 6.1499C97.4889 6.1499 96.1381 6.53616 95.1167 7.41873C93.8199 8.5222 93.213 10.1219 92.9098 11.7225L92.8001 12.3573H91.0339L90.482 15.2268H92.2483L90.2344 25.8756H94.0418L96.0558 15.2268H98.6766L99.2007 12.3573Z"
              fill="black"
            />
            <path
              d="M108.36 12.3852C108.36 12.3852 105.98 18.3812 104.911 21.6543H104.855C104.783 20.6003 103.917 12.3852 103.917 12.3852H99.9169L102.208 24.7714C102.263 25.0469 102.236 25.2132 102.125 25.4063C101.683 26.2612 100.938 27.0892 100.055 27.6963C99.3383 28.2203 98.5383 28.5511 97.9041 28.772L98.9522 32C99.7249 31.8346 101.324 31.1997 102.676 29.9309C104.415 28.3034 106.014 25.7926 107.669 22.3714L112.332 12.3843H108.36V12.3852Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_9064">
              <rect width="112.787" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="flex items-center gap-2">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <p className="text-gray text-2xl md:text-4xl text-[44px] font-medium">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={sara} alt="Sarah Thompson" />
            <div>
              <p className="text-gray text-base md:text-xl font-semibold">
                Sarah Thompson
              </p>
              <p className="text-[#475467] text-sm md:text-lg font-normal">
                Project Manager, Shopify
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 lg:mt-0 gap-8">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_2_9090)">
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="white"
                  fill-opacity="0.9"
                />
                <path
                  d="M35 28H21M21 28L28 35M21 28L28 21"
                  stroke="#175CD3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="27.5"
                  stroke="#D1E9FF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2_9090"
                  x="-8"
                  y="-8"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_9090"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_9090"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_2_9091)">
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="white"
                  fill-opacity="0.9"
                />
                <path
                  d="M21 28H35M35 28L28 21M35 28L28 35"
                  stroke="#175CD3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="27.5"
                  stroke="#D1E9FF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2_9091"
                  x="-8"
                  y="-8"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_9091"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_9091"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[100%] lg:w-1/2">
        <div className="flex items-end justify-center flex-grow gap-4">
          <img src={img1} alt="pic" className=" w-[86px] lg:w-[160px]" />
          <img src={img2} alt="pic" className="w-[86px] md:w-[160px]" />
        </div>
        <div className="flex items-start flex-grow gap-4">
          <img src={img3} alt="pic" className="w-[96px] md:w-[192px]" />
          <img src={img4} alt="pic" className="w-[86px] md:w-[160px]" />
          <img src={img5} alt="pic" className="w-[96px] md:w-[192px]" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
