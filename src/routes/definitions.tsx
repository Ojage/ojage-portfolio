import { lazy } from "react";

const lazyPages = {
  LandingPage: lazy(() => import("../Pages/Landing.page")),
  SchedulingPage: lazy(() => import("../Pages/Scheduling.page")),
};

// You can try without `as const` if it’s causing issues
// const lazyPages = {
//   LandingPage: lazy(() => import("../Pages/Landing.page")),
// } as const;

export const PAGES = {
  Landing: lazyPages.LandingPage,
  Scheduling: lazyPages.SchedulingPage,
};
