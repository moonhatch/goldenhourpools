import { Link } from "@remix-run/react";
import PropTypes from "prop-types";
import { useEffect, useCallback, useRef } from "react";

import { useEventListener } from "../hooks";
import { InnerSun, OuterGhp } from "../icons";
import Container from "./container";
import { Button } from "./ui/button";

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

const Footer = ({ siteData }) => {
  const { footerLinksPrimary, footerLinksSecondary, footerLinksTertiary, title } = siteData;

  return (
    <Container className="-my-px py-px text-center text-ghp-900">
      <div className="mx-auto max-w-sm">
        <Logo />
        <div className="grid grid-cols-2 gap-3">
          {footerLinksPrimary?.map((link) => (
            <Button asChild key={link._key} className="col-span-2 w-full" kind="tertiary">
              <Link target="_blank" rel="noreferrer" to={link.to}>
                {link.text}
              </Link>
            </Button>
          ))}
          {footerLinksSecondary?.map((link) => (
            <Button asChild key={link._key} className="w-full" kind="secondary">
              <Link prefetch="viewport" to={link.to}>
                {link.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <ul className="my-14">
        <LinksItem to="/">
          ©{title} {new Date().getFullYear()}
        </LinksItem>
        {footerLinksTertiary?.map((link) => (
          <LinksItem key={link._key} to={link.to}>
            {link.text}
          </LinksItem>
        ))}
      </ul>
    </Container>
  );
};

Footer.propTypes = {
  siteData: PropTypes.object,
};

export default Footer;
