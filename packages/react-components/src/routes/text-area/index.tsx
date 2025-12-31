import { createFileRoute } from "@tanstack/react-router";

import { TextAreaPage } from "@/pages";

export const Route = createFileRoute("/text-area/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TextAreaPage />;
}
