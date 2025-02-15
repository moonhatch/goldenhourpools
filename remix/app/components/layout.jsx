import { useMatches } from "@remix-run/react";
import PropTypes from "prop-types";

import { cn } from "../lib/utils";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, siteData }) => {
  const matches = useMatches();
  const isHome = matches[1]?.pathname === "/";

  return (
    <>
      <header className={cn("top-0 left-0 z-10 w-full shrink-0", isHome && "absolute")}>
        <Header siteData={siteData} />
      </header>
      <main className="grow">{children}</main>
      <footer className="shrink-0">
        <Footer siteData={siteData} />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  siteData: PropTypes.object,
};

export default Layout;
