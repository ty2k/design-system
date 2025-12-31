import { createFileRoute } from "@tanstack/react-router";

import { SelectPage } from "@/pages";

export const Route = createFileRoute("/select/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SelectPage />;
}
