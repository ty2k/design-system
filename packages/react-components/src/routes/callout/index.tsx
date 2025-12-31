import { createFileRoute } from "@tanstack/react-router";

import { CalloutPage } from "@/pages";

export const Route = createFileRoute("/callout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CalloutPage />;
}
