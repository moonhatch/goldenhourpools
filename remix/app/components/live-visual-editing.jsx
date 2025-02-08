import { client } from "@/sanity/client";
import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";

export default function LiveVisualEditing() {
  // enable live queries using the client configuration
  useLiveMode({ client });

  return <VisualEditing />;
}
