import * as React from "react";
import { motion } from "framer-motion";

interface ArrowSVG {
  className?: string;
}

const ArrowSVG = ({ className }: ArrowSVG) => (
  <motion.svg
    width={186}
    height={141}
    viewBox="0 0 186 141"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    initial={{ scale: 1.2, opacity: 0 }} // Starts slightly larger and fades in
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 8,
      duration: 2,
    }}
  >
    <defs>
      <clipPath id="clipPath">
        <motion.rect
          initial={{ width: 0, scale: 1 }} // Start from 0 width
          animate={{ width: 186, scale: [1.5, 1] }} // Expand to full width
          transition={{
            type: "spring",
            stiffness: 100, // Controls the bounce speed
            damping: 15, // Controls the bounce amount
            duration: 2,
          }}
          height={141}
        />
      </clipPath>
    </defs>

    <g clipPath="url(#clipPath)">
      <path
        d="M97.434 112.265C100.403 109.095 104.434 105.715 107.191 101.7C112.918 93.2488 118.221 84.586 123.523 75.9232C133.492 59.4427 143.461 42.7509 154.279 24.7914C140.28 29.4397 129.886 41.2719 113.342 38.5251C114.827 35.9897 115.251 33.8768 116.312 33.4542C132.856 26.693 147.279 16.5511 160.854 5.35286C172.096 -3.73254 177.823 -1.19707 179.308 12.5367C180.792 26.9043 183.762 41.2719 185.883 55.6395C186.307 57.9637 185.459 60.4991 185.247 63.4572C176.126 59.2314 176.126 59.2314 168.49 27.7494C166.793 30.4962 165.308 32.6091 164.036 34.7219C151.521 56.4846 139.219 78.2473 126.281 99.7988C122.038 106.771 116.948 113.321 111.221 119.026C101.04 129.168 89.7981 128.745 80.2532 117.97C75.3748 112.476 71.7689 105.715 68.5873 98.9536C64.9815 91.3472 62.6483 83.107 59.4667 75.2893C57.1335 69.7958 54.164 64.5136 51.4066 58.8088C44.8312 61.3443 42.2859 66.2039 39.3164 70.641C26.8021 89.4456 17.4694 109.518 10.4698 131.069C9.62137 133.605 9.19715 136.352 7.71239 138.676C6.86396 139.944 4.53077 141 2.83391 141C1.98548 141 0.288608 138.676 0.0765002 137.408C-0.135607 133.816 0.0765196 129.802 0.924951 126.421C6.86397 102.123 16.833 79.5151 31.0442 59.0201C33.8016 54.7943 37.4075 50.9911 41.2254 47.8218C48.225 42.117 55.2245 42.3283 60.9514 49.3008C65.6178 55.0056 69.0115 61.7668 71.981 68.5281C76.4353 78.4586 79.6169 88.8118 84.0712 98.7423C86.6165 104.025 89.586 109.518 97.434 112.265Z"
        className="dark:fill-neutral-100 fill-black"
      />
    </g>
  </motion.svg>
);

export default ArrowSVG;
