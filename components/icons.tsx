import * as React from "react";

import { IconSvgProps } from "@/types";
import Image from "next/image";

export const LogoImage = () => (
  <Image src="/logo.webp" alt="" width={400} height={400} />
);

export const WhatsappIcon: React.FC<IconSvgProps> = ({
  size = 46,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      {...props}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="-0.00976562"
        y="0.134399"
        width="45.6917"
        height="45.6917"
        fill="url(#pattern0_1_233)"
      />
      <defs>
        <pattern
          id="pattern0_1_233"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_233" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1_233"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
