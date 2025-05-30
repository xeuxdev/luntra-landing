type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export const Icons = {
  fingerPrint: (props: IconProps) => (
    <svg
      width="82"
      height="80"
      viewBox="0 0 82 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4" filter="url(#filter0_f_46_52)">
        <path
          d="M14.3333 34.8738C17.3898 23.0614 28.1701 14.3333 40.9999 14.3333C53.8297 14.3333 64.61 23.0614 67.6666 34.8738M60.2739 41.7206C60.2739 31.1327 51.6447 22.5495 41 22.5495C37.3664 22.5495 33.9677 23.5496 31.0668 25.2882M21.7261 54.045V40.3513C21.7261 35.4883 23.0901 32.2331 25.8562 30.7657M32.7396 41.7206V40.3513C32.7396 35.8136 36.4379 32.1351 40.9999 32.1351C45.5619 32.1351 49.2601 35.8136 49.2601 40.3513V56.7837M40.9999 41.7206V63.6305M31.3629 51.3062V64.9999M60.2737 49.9369V58.1531"
          stroke="url(#paint0_linear_46_52)"
          strokeWidth="5.64513"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M14.3333 34.8738C17.3898 23.0614 28.1701 14.3333 40.9999 14.3333C53.8297 14.3333 64.61 23.0614 67.6666 34.8738M60.2739 41.7206C60.2739 31.1327 51.6447 22.5495 41 22.5495C37.3664 22.5495 33.9677 23.5496 31.0668 25.2882M21.7261 54.045V40.3513C21.7261 35.4883 23.0901 32.2331 25.8562 30.7657M32.7396 41.7206V40.3513C32.7396 35.8136 36.4379 32.1351 40.9999 32.1351C45.5619 32.1351 49.2601 35.8136 49.2601 40.3513V56.7837M40.9999 41.7206V63.6305M31.3629 51.3062V64.9999M60.2737 49.9369V58.1531"
        stroke="url(#paint1_linear_46_52)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_f_46_52"
          x="0.02283"
          y="0.0235624"
          width="81.9541"
          height="79.2861"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.74359"
            result="effect1_foregroundBlur_46_52"
          />
        </filter>
        <linearGradient
          id="paint0_linear_46_52"
          x1="40.9999"
          y1="14.3333"
          x2="40.9999"
          y2="64.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0004" />
          <stop offset="1" stopColor="#E16B55" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_46_52"
          x1="40.9999"
          y1="14.3333"
          x2="40.9999"
          y2="64.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0004" />
          <stop offset="1" stopColor="#E16B55" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
