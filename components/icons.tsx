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

export const Woman: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width="102"
      height="103"
      viewBox="0 0 102 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        y="0.611572"
        width="101.568"
        height="101.568"
        fill="url(#pattern0_1_58)"
      />
      <defs>
        <pattern
          id="pattern0_1_58"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_58" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1_58"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMbUlEQVR4nO2dCZAeVRHHh0g4I8QACeFSRDwQSUQQEFBEilsEggRUJAYSREsULTkURA65QlVUROUGJSJqBTRAAYmgpaKUUCGAEkCMMZySyBGBQHb3Z3W2h+rtfTPz5tv59jv/VV/V7sy7pnvem+5+3f2SpAUBjAAOAH4C/BN4CXgVeBS4FjgQWK3R4+wIAB8AFlCM+cD2jR5vWwM4AnideLwGTG70uNsSwL5AjyF2HzBHmTQB2EGID9wC9JpyK4G9Gz3+tgLwFuBZQ+TngD1yyu+lZVI8BYwe3lG3MYBvG+KukBkRUWd7XbJSnDY8o+0AAEsMYReqJHUrMDfjJ8vWNcDDpt6/Gv0cbQFgT6pD5jLXRdx340r3gR4qpK2rpO0uA8rNignA4wGCPg/cAJwJfBGYnvH7AnCGll0WaEeUya27TIlX/J53BHwQOBgYWZaIwJuASaooprgLWLPLkGLivRVYaggnesfXhagVmVu+oYxZJQID46XPLmOy3+Q/OvH2gKqJlTIX2Bl4UmfLiC5TBhNqqlumptSLSMCWyvAU07oMGUigkcC/DYGuqzeBgFmmv8eqWBbbBsDH3VL1tpL1t5FfyTqbOk3+oNIDb1cAPzWE+XnJukepoVF+R5Wse53p9/LSA29XqF6Q4ogS9bYGXnijZv/fW5WoL9bhFI/X/ADtBGA9BmKLEsywjHyDsMA7ItvYzNVdK+l0qMSTog9Yo6D8asBnnPKYLlkp/gt8KqLv1Z1pJupl6AQzyRtLTpJPvEOAP7m3WoSAI4UBTpRFy4qGv3pOu3bJKzTrtz2AiYYgzxsJaKJuNH1ZP74hm5Ro9buZtnZ3mn6KZSo4nKBtStubah070yYmnQ7PEOBXFEOWmcuAsYH2xonEFGkl/kWXIfkMWVlAwOWq0L0/csdQyv4vp70+5zTRnSGOIR6LgNuA76uIuk4NM3BddYS4GLhd28xClyEFDBldlgERDBrdZUg+gS5pIoZcnHQyVOKhiRgi2DPpVABXM1Bn2JPhZ8jHgLvN/1cmnQrgTkOIqQFiDQdDRru9mDuTTgUwzxDimAYyRPpOMS/pVKibT4rvNpAh3zP/X5F0KmTr1BDiBWBbR6yN69Dnxq6P7Zw965ikU6FKm7VRPeGI9Z469Cm7ixbi6JBiWS3KZ1tBfaaysE+dwhqyzCiHVt1fSwI4zu1vp7iwDn3NYDCk7+lV99XSEIMh/QE4dqPp4SpjBdVZTrznU0hfv4kxVnYsgF1cpFRlywhwmLMs71xV220N+vcpUvwNWLuCNtcG/m7avb6a0XaOBXhllbqBhiHY2fG+akbbIQDOcx/es2v5nqhTxDmurXPqM+o2BrCWc75GEwWsX6KN0c4ZTvCHbihC7UwZAzzkCPoMcKwolQUK5zQXuZvGmXSjpypgyh0MhuyVXw+cJJKY/k7Sa6F9dAkGHTOkwXQxIHZE8pjUikfzfLO6qAEMDEmLcfGxZeZ3iV5fhkyWdBnARardL9DfHL22t3Ok7jKkzgw5OKK8uJB2GVIP0K9LPDQEhkjdbv6sChjxXs1z4mPWyzIETc8hO4O7dYM8y82EDwEzXX4TnIV2QqT5xVqOPXNmal/dmVMDE1L70x0xs8O0fYjWsdZjjy5zCpYjix41n0hIwrhYRhiGjFdzS9ZMoaOXNQ3OiZ0J04ANh2gLEzOLRZ8yaLr2sTJi5rRfThRglJo06soEgY03B043fdwrS2N6T+9vqH3mMadHc29l2s5aCsBGwF/ryQSBBHqqYniumyX3aB+5S5Bhzu0ZzLm/inE2HJr5zeKBqpjgQtnS+MIVsVG4WQA20DHKWC1ubmmpzO1hC75TjwcC1nDOC2dXKAH6jbJDklaF22C6qWLhYJ51pFN/K8mXcnhV/Zi2f22e47ctOUvUqcCuxbtUtDdyidEr7nD316yjJ4zF7kmLx5+/MpRsO/TvhxyXEfK8a7Ujz+z/ZdPnJUmLfz8eHEI7OwJ/ydh02r/aUeeOQ7Z/U/yn5Ta8gFPMA9xYQ/1NNNjfa9kvadq/d+ms+ZouKTvr36L0bVmH55ldb7/j4Yz9mFFSYjpZY9JDWvbbNWlA3q6h3PtxFQ52ZlwXuj6uTloJwO/N4KMcmYH9gUcCBF6lZetaLopbLG6tyiblYlnQmJLWyR6kCfCjIls1I9CcAEGf0yVoFVGBL7n7Dzvnh0edPiI4vqLn+WhgfNGW52awXdm1f/MCk4UNmkHF5YutD5XODmsZnq25GsUAmGKmXrvR5VMc8iwJ5NYS3JC0oMgrjPlgTlmvCd8lYWaBcp8wZUQE3UivD2CIXhvrxNSDKtLaRXy3kD5GJS1oMkGzv8mHcUc3O5bH+NzSz6gUs8z1QQwJZB29sw6ib4rCRGnNJvKGsEiZc5X7XoyKmHFYM3oOQ7x2PaEOoq9gTtJiIu+zkY5tJ0dmfLjH3QsyRO9ZhfKqOoi+aTjcmFYSeadpKLKcZvC7DOYszZkd41zqviNLMERS/6VYEUp4VvK5ROIL4dikhUReiVo6MSWG7nMLc140Zc7LaesMFzY9sgRDRrrt4jNKPsc6wH46M+Zl2NKaO/tDQORN0aMe6J/UcAH71geDLoE1gadNuVMCZTIZovdPdctnrjKn4vVeahUQM00MZNZvkjQjAh/gEGziyVey9ATgaCdiblADQzZwIvDROXrGBTmzIAT74p2QtIDIK4rcWS7Rvscjkf68l2aUyWWIlhG7VtDxWh3qZuUcWPmyWhFO1+VroVM6U9ydtIqVV+PD91bPEzmz1mJhRjt7uDdxmyEwZBv3Nu+h1uIbcny2btYgoHVyRF/rSdNX9hCBRqTsm5Fx2Jc9l/DV0JIF3GTK3JbTXyFDtJwk00yxJCID6g4Rou8VLtR60DeuKaBbrTtlOZmpa5DFgDeL/mNUrfvnfhUwRJabLEhsyVfd2z4mQvQVMf5b5v/7k1aFW3+PM+nET3N5T3LTa7jvw48KbFH2oMl0dk7We8cXLaMBq68YRd+p45XvzKdb0gEiMPUXaN6q+xzB+orcbtQLJMXcgrKHBr4Z92rfkjEixQU5bWzuxrdumVDtYYU+2GJVomYWlN3cSTa9jlCLi055Dmjxr6ZW4Jw6+wSkvl7397tz6o9wVt8JbePYoFKOR59u0a4XUV8+qh6XRZ5ZcnmGhDW7pNV3krm+lS652yZNKPJmPph+K74ZyJG1OObsc913l+DOLFwQcwhlxmx5TYmad8TFjV6yct+yi5ImtPIGk49J0hddt6NmBf0fXPEuuVR/v3TmFHSf3bsKPa1l03rTQx/cnNlyX1aCGpcEbVViHD3u1YrVI5rasaHWWUH/ubd5+LMm2/deKiGcVcVs8aKv2aVc2VTejVmODWVnRQrgcznEFWvxufpmWkL0BKwBFlOTDMTOFpeB+0lz3XrE/DBpRscG4Cu1fCvoN7VYKUw04vPVGU7219+sZ9taSI6Tg5Swk9Sh7nynf7we0XfWbDlR72/hRV+9PqVpvBs1ZnCQOcRZbKMkKPotxi86BWzAgV1KbItn7H69K7uF82x5sUhczZgtU4zoa2fhKjub6CPueuO8GzVQMsUSd+/mEhLUZi5/70t+v0TPkrJYWOQ+qkk27f7GE3nuSYHZcou7bje+dsuQwBrn3eiss4vcvbGResX6LmpJvg37ujKfdW+tmGDGR45xP/e9eSBGy9bZMmD7153U8xFz/fCm8G7UN9Cu5aVsOrrdOjdvr1rdSa1mvrjs2YMBl9C5MTqLa2OE2/Sa4LZ9lzc84kpngUW0B7rqGte4+j8IzB5hQIqltYYsS9uur2vKvECqkVsM2Ml0PmGN8250CWLOL1EvpGtcnqN09vqlrOQ45WPtcWaJ+lYxXBC4f2BTeDeqEpViecglNFBnaoZNaYnbZu2NUfAix7mkrI7iJECbQvDUDNPOsoZ7N6pu8KwzX+yYU/5UR+jHHYHWCxgh/1F2zS84DNkecNxb4LC3U+D5RkXMwsZ5N6ok0+MecpaaN0RX2RX4vAbiWzyp5nuLibofbs3dJ2vQTq0/f0zfdgHv+/lqP9tVxyxj/5mbyT15eobT5hvr3ajLUJYXB1lHblN8glo9MFqPAs87cNLjtVRJLPDveqrMclhXAB8O5Nz16NNEx+NMKHUvw4feNOxN3V39LAjhQasIFtBAMmpfq6tG44NE9S05TN1lHtOlZ6kuCTNCHov0Xw+dJVI1pI9BW7V6hq7stciSKmOVMcvYhVliH6s5vDsG/wcdkq/3HZqYAgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export const RunningRabbit: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0_1_72)" />
      <defs>
        <pattern
          id="pattern0_1_72"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_72" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1_72"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const ThailandIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0_1_284)" />
      <defs>
        <pattern
          id="pattern0_1_284"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_284" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1_284"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
