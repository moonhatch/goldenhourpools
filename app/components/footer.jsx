import { Link } from "@remix-run/react";
import PropTypes from "prop-types";
import { useEffect, useCallback, useRef } from "react";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";

import { useEventListener } from "@/hooks";

import { InnerSun, OuterGhp } from "@/icons";

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
      className="relative mx-auto my-16 block h-40 w-40 focus-visible:outline-1
        focus-visible:outline-offset-0 focus-visible:outline-black"
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
  <ul className="my-14">
    <LinksItem to="/">©Golden Hour {new Date().getFullYear()}</LinksItem>
    <LinksItem to="/privacy">Privacy</LinksItem>
    <LinksItem to="/warranty">Warranty</LinksItem>
  </ul>
);

const LinksItem = ({ children, to }) => (
  <li
    className="relative mx-1 inline-block px-1 text-ghp-400 before:absolute before:-left-1.5
      before:content-['|'] first:before:content-none"
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
    <Container className="-my-px bg-ghp-200 py-px text-center text-ghp-900 lg:bg-ghp-100">
      <div className="mx-auto max-w-sm">
        <Logo />
        <div className="grid grid-cols-2 gap-3">
          <Button asChild className="col-span-2 w-full" kind="tertiary">
            <Link target="_blank" rel="noreferrer" to="tel:+15122700428">
              Call: (512) 270-0428
            </Link>
          </Button>
          <Button asChild className="col-span-2 w-full" kind="tertiary">
            <Link target="_blank" rel="noreferrer" to="mailto:hello@goldenhourpools.com">
              Email: hello@goldenhourpools.com
            </Link>
          </Button>
          <Button asChild className="col-span-2 w-full" kind="tertiary">
            <Link target="_blank" rel="noreferrer" to="https://www.instagram.com/goldenhourpools">
              Instagram: @goldenhourpools
            </Link>
          </Button>
          <Button asChild className="w-full" kind="secondary">
            <Link prefetch="viewport" to="/pools">
              Our Pools
            </Link>
          </Button>
          <Button asChild className="w-full" kind="secondary">
            <Link prefetch="viewport" to="/gallery">
              Gallery
            </Link>
          </Button>
          <Button asChild className="w-full" kind="secondary">
            <Link prefetch="viewport" to="/faq">
              FAQ
            </Link>
          </Button>
          <Button asChild className="w-full" kind="secondary">
            <Link prefetch="viewport" to="/contact">
              Contact
            </Link>
          </Button>
        </div>
      </div>
      <Links />
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
