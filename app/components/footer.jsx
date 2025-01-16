import { useEventListener } from "@/hooks";
import { Link } from "@remix-run/react";
import PropTypes from "prop-types";
import { useEffect, useCallback, useRef } from "react";

import Container from "@/components/container";

import { InnerSun, OuterGhp } from "@/icons";

const Nav = () => (
  <ul className="my-6">
    <NavItem to="/pools">Our Pools</NavItem>
    <NavItem to="/gallery">Gallery</NavItem>
    <NavItem to="/faq">FAQ</NavItem>
    <NavItem to="/contact">Contact</NavItem>
  </ul>
);

const NavItem = ({ children, to }) => (
  <li className="mx-1 inline-block px-1">
    <Link
      className="outline-none hover:underline focus-visible:underline"
      prefetch="viewport"
      to={to}
    >
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Action = ({ label, href, title }) => (
  <div className="my-8">
    <p>{label}:</p>
    <p>
      <a
        className="underline outline-none focus-visible:underline-offset-4"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </p>
  </div>
);

Action.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Logo = () => {
  const innerSun = useRef();

  const scrollHandler = useCallback(() => {
    if (innerSun.current) {
      innerSun.current.style.transform = `rotate(${window.scrollY / 2}deg)`;
    }
  }, []);

  useEventListener("scroll", scrollHandler);
  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  return (
    <Link
      className="relative mx-auto my-16 block h-40 w-40 rounded-full bg-yellow
        focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-black"
      prefetch="viewport"
      to="/"
    >
      <OuterGhp className="absolute h-full w-full text-orange" />
      <div className="absolute h-full w-full" ref={innerSun}>
        <InnerSun className="absolute h-full w-full text-orange" />
      </div>
    </Link>
  );
};

const Links = () => (
  <ul className="my-6">
    <LinksItem to="/">©Golden Hour {new Date().getFullYear()}</LinksItem>
    <LinksItem to="/privacy">Privacy</LinksItem>
    <LinksItem to="/warranty">Warranty</LinksItem>
  </ul>
);

const LinksItem = ({ children, to }) => (
  <li
    className="relative mx-1 inline-block px-1 before:absolute before:-left-1.5 before:content-['|']
      first:before:content-none"
  >
    <Link
      className="outline-none hover:underline focus-visible:underline"
      prefetch="viewport"
      to={to}
    >
      {children}
    </Link>
  </li>
);

LinksItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Footer = () => {
  return (
    <Container className="-my-px bg-ghp-200 py-px text-center text-ghp-900 lg:bg-background">
      <Nav />
      <Action label="Call us" href="tel:+15122700428" title="(512) 270-0428" />
      <Action
        label="Email us"
        href="mailto:hello@goldenhourpools.com"
        title="hello@goldenhourpools.com"
      />
      <Action
        label="Follow us"
        href="https://www.instagram.com/goldenhourpools"
        title="Instagram"
      />
      <Logo />
      <Links />
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
