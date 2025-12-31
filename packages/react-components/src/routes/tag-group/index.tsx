import { createFileRoute } from "@tanstack/react-router";

import { TagGroupPage } from "@/pages";

export const Route = createFileRoute("/tag-group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TagGroupPage />;
}
