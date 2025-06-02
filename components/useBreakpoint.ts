"use client";

import { useMediaQuery } from "react-responsive";
export const breakpoint = {
  sm: 481,
  md: 769,
  lg: 1280,
} as const;

export const useBreakpoint = () => {
  const xs = useMediaQuery({
    query: `(max-width: ${breakpoint.sm}px)`,
  });

  const sm = useMediaQuery({
    query: `(min-width: ${breakpoint.sm}px)`,
  });

  const md = useMediaQuery({
    query: `(min-width: ${breakpoint.md}px)`,
  });

  const lg = useMediaQuery({
    query: `(min-width: ${breakpoint.lg}px)`,
  });

  return {
    breakpoint,
    xs,
    sm,
    md,
    lg,
  };
};
