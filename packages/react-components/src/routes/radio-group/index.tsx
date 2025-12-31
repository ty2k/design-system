import { createFileRoute } from "@tanstack/react-router";

import { RadioGroupPage } from "@/pages";

export const Route = createFileRoute("/radio-group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RadioGroupPage />;
}
