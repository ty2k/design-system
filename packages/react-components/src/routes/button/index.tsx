import { createFileRoute } from "@tanstack/react-router";

import { ButtonPage } from "@/pages";

export const Route = createFileRoute("/button/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ButtonPage />;
}
