import { createFileRoute } from "@tanstack/react-router";

import { TextFieldPage } from "@/pages";

export const Route = createFileRoute("/text-field/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TextFieldPage />;
}
