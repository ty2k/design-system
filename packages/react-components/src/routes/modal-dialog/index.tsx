import { createFileRoute } from "@tanstack/react-router";

import { ModalDialogPage } from "@/pages";

export const Route = createFileRoute("/modal-dialog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ModalDialogPage />;
}
