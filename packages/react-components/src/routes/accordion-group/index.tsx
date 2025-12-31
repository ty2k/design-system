import { createFileRoute } from "@tanstack/react-router";

import { AccordionGroupPage } from "@/pages";

export const Route = createFileRoute("/accordion-group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AccordionGroupPage />;
}
