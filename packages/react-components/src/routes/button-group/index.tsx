import { createFileRoute } from "@tanstack/react-router";

import { ButtonGroupPage } from "@/pages";

export const Route = createFileRoute("/button-group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ButtonGroupPage />;
}
