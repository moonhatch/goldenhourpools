import { redirect } from "@remix-run/react";

import redirects from "../redirects";

export async function loader({ request }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  for (const obj of redirects) {
    if (pathname === obj.source || pathname.match(new RegExp(obj.source))) {
      return redirect(obj.destination);
    }
  }

  return redirect("/");

  // throw new Response(`${new URL(request.url).pathname} not found`, {
  //   status: 404,
  //   statusText: "Not Found",
  // });
}

export default function FourOhFour() {
  return null;
}
