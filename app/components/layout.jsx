import { useMatches } from "@remix-run/react";
import PropTypes from "prop-types";

import Announcement from "@/components/announcement";
import Footer from "@/components/footer";
import Header from "@/components/header";

import { cn } from "@/lib/utils";

const Layout = ({ children }) => {
  const matches = useMatches();

  const isHome = matches[1]?.pathname === "/";

  return (
    <>
      <header className={cn("sticky top-0 z-10 w-full shrink-0", isHome && "fixed")}>
        <Announcement>Serving Austin, TX and surrounding areas.</Announcement>
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer className="shrink-0">
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
