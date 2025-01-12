import PropTypes from "prop-types";
import { Link } from "@remix-run/react";
import Container from "@/components/container";

const Nav = () => (
  <ul className="my-6">
    <NavItem to="/">Our Pools</NavItem>
    <NavItem to="/">Gallery</NavItem>
    <NavItem to="/">Contact</NavItem>
    <NavItem to="/">FAQ</NavItem>
  </ul>
);

const NavItem = ({ children, to }) => (
  <li>
    <Link prefetch="viewport" to={to}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Contact = () => <div className="my-8">asdf</div>;

const Logo = () => <div className="my-16">asdf</div>;

const Links = () => (
  <ul className="my-6">
    <LinksItem to="/">©Golden Hour {new Date().getFullYear()}</LinksItem>
    <LinksItem to="/privacy">Privacy</LinksItem>
    <LinksItem to="/warranty">Warranty</LinksItem>
  </ul>
);

const LinksItem = ({ children, to }) => (
  <li>
    <Link prefetch="viewport" to={to}>
      {children}
    </Link>
  </li>
);

LinksItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Footer = () => {
  return <div>Footer</div>;
  return (
    <Container className="text-center bg-ghp-200 lg:bg-background">
      <Nav />
      <Contact />
      <Logo />
      <Links />
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
