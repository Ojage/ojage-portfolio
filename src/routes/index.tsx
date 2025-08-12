import React from "react";
import { PATH_NAMES } from "./path-names";
import { PAGES } from "./definitions";

export const routes = [
  {
    path: PATH_NAMES.LANDING,
    element: <PAGES.Landing />,
  },
  {
    path: PATH_NAMES.SCHEDULE,
    element: <PAGES.Scheduling />,
  },
];
