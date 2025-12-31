import { createFileRoute } from "@tanstack/react-router";

import { AlertBannerPage } from "@/pages";

export const Route = createFileRoute("/alert-banner/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AlertBannerPage />;
}
