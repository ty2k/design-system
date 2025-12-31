import { createFileRoute } from "@tanstack/react-router";

import { CheckboxGroupPage } from "@/pages";

export const Route = createFileRoute("/checkbox-group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CheckboxGroupPage />;
}
