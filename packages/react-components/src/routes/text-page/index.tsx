import { createFileRoute } from "@tanstack/react-router";

import { TextPage } from "@/pages";

export const Route = createFileRoute("/text-page/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TextPage />;
}
