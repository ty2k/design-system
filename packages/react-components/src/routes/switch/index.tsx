import { createFileRoute } from "@tanstack/react-router";

import { SwitchPage } from "@/pages";

export const Route = createFileRoute("/switch/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SwitchPage />;
}
