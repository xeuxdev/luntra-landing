import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/luntra-logo.png";

export function Footer() {
  return (
    <footer className="pt-20 pb-10 px-5 lg:px-7 xl:px-20 max-w-[1280px] mx-auto">
      <div className="size-full space-y-[80px] lg:space-y-[120px]">
        {/* Desktop and tablet layout - visible only on screens larger than lg */}
        <div className="hidden lg:flex justify-between gap-[232px]">
          <div className="space-y-10 max-w-[448px]">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="Logo" width={36} height={36} />

                <span className="text-[27px]/[36px] font-bold">
                  Luntra Infrastructure
                </span>
              </div>
              <p className="font-fragment text-sm/[155%] opacity-50">
                AI meets blockchain innovation.
              </p>
            </div>
            <button className="btn primary">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1105 1.43971C18.2517 0.527216 17.3841 -0.193022 16.5728 0.163205L0.413286 7.25807C-0.168538 7.51353 -0.125977 8.39489 0.477462 8.58702L3.80991 9.64828C4.44601 9.85084 5.13467 9.74605 5.69011 9.36235L13.2035 4.1716C13.43 4.01504 13.677 4.33722 13.4834 4.53672L8.07512 10.1126C7.55049 10.6536 7.6546 11.5702 8.28572 11.9659L14.3408 15.763C15.02 16.1888 15.8936 15.7611 16.0206 14.9403L18.1105 1.43971Z"
                  fill="white"
                />
              </svg>
              Join our Telegram
            </button>
          </div>

          <div className="flex gap-[50px]">
            <div className="space-y-5 w-[205px]">
              <header className="font-semibold text-lg">Product</header>

              <div className="space-y-2.5 font-fragment text-base text-white/70 *:hover:text-white *:block">
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Integrations</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Changelog</Link>
                <Link href={"/"}>Docs</Link>
              </div>
            </div>
            <div className="space-y-5 w-[205px]">
              <header className="font-semibold text-lg">Company</header>

              <div className="space-y-2.5 font-fragment text-base text-white/70 *:hover:text-white *:block">
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Blog</Link>
              </div>
            </div>
            <div className="space-y-5">
              <header className="font-semibold text-lg">Resources</header>

              <div className="space-y-2.5 font-fragment text-base text-white/70 *:hover:text-white *:block">
                <Link href={"/"}>Brand Kit</Link>
                <Link href={"/"}>Careers</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet layout - visible only on screens smaller than lg */}
        <div className="lg:hidden space-y-10">
          {/* Logo and description */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Logo" width={36} height={36} />

              <span className="text-[27px]/[36px] font-bold">
                Luntra Infrastructure
              </span>
            </div>
            <p className="font-fragment text-sm/[155%] opacity-50 text-left">
              AI meets blockchain innovation.
            </p>
          </div>

          {/* Telegram button */}
          <button className="btn primary !h-[70px]">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1105 1.43971C18.2517 0.527216 17.3841 -0.193022 16.5728 0.163205L0.413286 7.25807C-0.168538 7.51353 -0.125977 8.39489 0.477462 8.58702L3.80991 9.64828C4.44601 9.85084 5.13467 9.74605 5.69011 9.36235L13.2035 4.1716C13.43 4.01504 13.677 4.33722 13.4834 4.53672L8.07512 10.1126C7.55049 10.6536 7.6546 11.5702 8.28572 11.9659L14.3408 15.763C15.02 16.1888 15.8936 15.7611 16.0206 14.9403L18.1105 1.43971Z"
                fill="white"
              />
            </svg>
            Join our Telegram
          </button>

          {/* Links section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-5">
              <header className="font-semibold text-lg">Product</header>
              <div className="space-y-2.5 font-fragment text-base opacity-70 *:block">
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Integrations</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Changelog</Link>
                <Link href={"/"}>Docs</Link>
              </div>
            </div>
            <div className="space-y-5">
              <header className="font-semibold text-lg">Company</header>
              <div className="space-y-2.5 font-fragment text-base opacity-70 *:block">
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Blog</Link>
              </div>
            </div>
            <div className="space-y-5 col-span-2 sm:col-span-1">
              <header className="font-semibold text-lg">Resources</header>
              <div className="space-y-2.5 font-fragment text-base opacity-70 *:block">
                <Link href={"/"}>Brand Kit</Link>
                <Link href={"/"}>Careers</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and social links - responsive for all screen sizes */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 sm:items-center sm:justify-between lg:flex-row-reverse">
          <div className="flex items-center gap-2.5">
            <Link
              href=""
              className="size-[68px] lg:size-[50px] bg-[#1E0303] rounded-full grid place-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 lg:size-5"
              >
                <path
                  d="M11.9 9.2L18.7 1.5H17.1L11.2 8.3L6.5 1.5H1L8.1 10.9L1 19H2.6L8.8 11.8L13.8 19H19.3L11.9 9.2ZM9.6 10.9L8.9 9.9L3.2 2.7H5.7L10.2 8.4L10.9 9.4L17.1 17.9H14.6L9.6 10.9Z"
                  fill="#FF2422"
                />
              </svg>
            </Link>
            <Link
              href=""
              className="size-[68px] lg:size-[50px] bg-[#1E0303] rounded-full grid place-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 lg:size-5"
              >
                <path
                  d="M12.4858 2.5L12.5883 2.505C14.2667 2.68333 15.5275 3.065 16.7267 3.89917C16.8698 3.99901 16.9779 4.14125 17.0358 4.30583C18.5992 8.735 19.0133 12.6283 18.245 14.5392C17.4092 16.21 16.0733 17.5 14.5833 17.5C13.9733 17.5 13.1725 16.6933 12.6433 15.7958C13.234 15.6883 13.8189 15.5512 14.3958 15.385C14.5011 15.3549 14.5994 15.3044 14.6852 15.2363C14.7709 15.1682 14.8424 15.0839 14.8956 14.9882C14.9488 14.8924 14.9825 14.7872 14.995 14.6784C15.0075 14.5696 14.9984 14.4594 14.9683 14.3542C14.9383 14.2489 14.8877 14.1506 14.8196 14.0648C14.7515 13.9791 14.6672 13.9076 14.5715 13.8544C14.4758 13.8013 14.3705 13.7675 14.2617 13.755C14.153 13.7425 14.0428 13.7516 13.9375 13.7817C11.1708 14.5733 8.82918 14.5733 6.06251 13.7817C5.8499 13.7209 5.62185 13.7471 5.42853 13.8544C5.23521 13.9618 5.09246 14.1416 5.03168 14.3542C4.9709 14.5668 4.99707 14.7948 5.10444 14.9882C5.2118 15.1815 5.39157 15.3242 5.60418 15.385C6.20168 15.555 6.78418 15.6933 7.35668 15.7967C6.82751 16.6925 6.02668 17.5 5.41668 17.5C3.92668 17.5 2.59085 16.21 1.72668 14.4758C0.986681 12.6283 1.40168 8.73417 2.96418 4.30583C3.02212 4.14125 3.13026 3.99901 3.27335 3.89917C4.47251 3.065 5.73335 2.68333 7.41168 2.505C7.56223 2.48894 7.71432 2.5142 7.8516 2.57807C7.98887 2.64193 8.10616 2.74199 8.19085 2.8675L8.24335 2.95667L8.78585 4.0275L8.90001 4.01417C9.63227 3.93917 10.3703 3.93917 11.1025 4.01417L11.2142 4.0275L11.7558 2.9575C11.8165 2.83733 11.9053 2.73362 12.0147 2.65525C12.1241 2.57689 12.2509 2.52619 12.3842 2.5075L12.4858 2.5ZM7.50001 8.33333C7.10173 8.33332 6.71661 8.47593 6.4144 8.73534C6.11218 8.99475 5.91285 9.35381 5.85251 9.7475L5.83751 9.87583L5.83335 10L5.83751 10.125C5.86184 10.4484 5.97997 10.7576 6.17743 11.0149C6.3749 11.2721 6.64311 11.4661 6.94922 11.5732C7.25532 11.6803 7.58601 11.6957 7.90076 11.6176C8.2155 11.5396 8.50064 11.3714 8.72121 11.1336C8.94179 10.8959 9.08823 10.599 9.14258 10.2793C9.19693 9.95964 9.15683 9.63102 9.0272 9.33377C8.89757 9.03652 8.68404 8.78354 8.41278 8.60584C8.14151 8.42814 7.8243 8.33344 7.50001 8.33333ZM12.5 8.33333C12.1017 8.33332 11.7166 8.47593 11.4144 8.73534C11.1122 8.99475 10.9129 9.35381 10.8525 9.7475L10.8375 9.87583L10.8333 10L10.8375 10.125C10.8618 10.4484 10.98 10.7576 11.1774 11.0149C11.3749 11.2721 11.6431 11.4661 11.9492 11.5732C12.2553 11.6803 12.586 11.6957 12.9008 11.6176C13.2155 11.5396 13.5006 11.3714 13.7212 11.1336C13.9418 10.8959 14.0882 10.599 14.1426 10.2793C14.1969 9.95964 14.1568 9.63102 14.0272 9.33377C13.8976 9.03652 13.684 8.78354 13.4128 8.60584C13.1415 8.42814 12.8243 8.33344 12.5 8.33333Z"
                  fill="#FF2422"
                />
              </svg>
            </Link>
            <Link
              href=""
              className="size-[68px] lg:size-[50px] bg-[#1E0303] rounded-full grid place-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 lg:size-5"
              >
                <path
                  d="M14.1667 1.66699C15.2718 1.66699 16.3316 2.10598 17.113 2.88738C17.8944 3.66878 18.3334 4.72859 18.3334 5.83366V14.167C18.3334 15.2721 17.8944 16.3319 17.113 17.1133C16.3316 17.8947 15.2718 18.3337 14.1667 18.3337H5.83341C4.72835 18.3337 3.66854 17.8947 2.88714 17.1133C2.10573 16.3319 1.66675 15.2721 1.66675 14.167V5.83366C1.66675 4.72859 2.10573 3.66878 2.88714 2.88738C3.66854 2.10598 4.72835 1.66699 5.83341 1.66699H14.1667ZM6.66675 8.33366C6.44573 8.33366 6.23377 8.42146 6.07749 8.57774C5.92121 8.73402 5.83341 8.94598 5.83341 9.16699V13.3337C5.83341 13.5547 5.92121 13.7666 6.07749 13.9229C6.23377 14.0792 6.44573 14.167 6.66675 14.167C6.88776 14.167 7.09972 14.0792 7.256 13.9229C7.41228 13.7666 7.50008 13.5547 7.50008 13.3337V9.16699C7.50008 8.94598 7.41228 8.73402 7.256 8.57774C7.09972 8.42146 6.88776 8.33366 6.66675 8.33366ZM11.6667 8.33366C11.3324 8.33347 11.0014 8.40035 10.6934 8.53033L10.5892 8.57783C10.4727 8.46132 10.3242 8.38198 10.1626 8.34984C10.001 8.3177 9.83345 8.3342 9.6812 8.39726C9.52895 8.46032 9.39882 8.5671 9.30725 8.70411C9.21568 8.84112 9.16678 9.0022 9.16675 9.16699V13.3337C9.16675 13.5547 9.25455 13.7666 9.41083 13.9229C9.56711 14.0792 9.77907 14.167 10.0001 14.167C10.2211 14.167 10.4331 14.0792 10.5893 13.9229C10.7456 13.7666 10.8334 13.5547 10.8334 13.3337V10.8337C10.8334 10.6126 10.9212 10.4007 11.0775 10.2444C11.2338 10.0881 11.4457 10.0003 11.6667 10.0003C11.8878 10.0003 12.0997 10.0881 12.256 10.2444C12.4123 10.4007 12.5001 10.6126 12.5001 10.8337V13.3337C12.5001 13.5547 12.5879 13.7666 12.7442 13.9229C12.9004 14.0792 13.1124 14.167 13.3334 14.167C13.5544 14.167 13.7664 14.0792 13.9227 13.9229C14.079 13.7666 14.1667 13.5547 14.1667 13.3337V10.8337C14.1667 10.1706 13.9034 9.53473 13.4345 9.06589C12.9657 8.59705 12.3298 8.33366 11.6667 8.33366ZM6.66675 5.83366C6.46264 5.83369 6.26563 5.90862 6.1131 6.04425C5.96058 6.17989 5.86313 6.36678 5.83925 6.56949L5.83341 6.67533C5.83365 6.88773 5.91498 7.09202 6.06079 7.24647C6.2066 7.40091 6.40588 7.49385 6.61791 7.5063C6.82995 7.51875 7.03873 7.44976 7.20161 7.31344C7.36449 7.17711 7.46916 6.98374 7.49425 6.77283L7.50008 6.66699C7.50008 6.44598 7.41228 6.23402 7.256 6.07774C7.09972 5.92146 6.88776 5.83366 6.66675 5.83366Z"
                  fill="#FF2422"
                />
              </svg>
            </Link>
          </div>
          <p className="font-fragment text-sm/[155%] opacity-50">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
