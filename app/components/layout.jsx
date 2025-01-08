import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 shrink-0">Header</header>
      <main className="flex flex-col grow">{children}</main>
      <footer className="shrink-0">Footer</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
