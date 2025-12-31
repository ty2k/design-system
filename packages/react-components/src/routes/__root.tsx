import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import "../App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
