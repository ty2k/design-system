import { createFileRoute } from "@tanstack/react-router";

import { InlineAlertPage } from "@/pages";

export const Route = createFileRoute("/inline-alert/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <InlineAlertPage />;
}
