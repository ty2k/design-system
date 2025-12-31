import { createFileRoute } from "@tanstack/react-router";

import { TooltipPage } from "@/pages";

export const Route = createFileRoute("/tooltip/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TooltipPage />;
}
