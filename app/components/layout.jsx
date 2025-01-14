import PropTypes from "prop-types";

import Announcement from "@/components/announcement";
import Footer from "@/components/footer";
import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-10 shrink-0 border-b border-ghp-250">
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
