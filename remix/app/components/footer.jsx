import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

import Container from "./container";
import { Button } from "./ui/button";

const LinksItem = ({ children, to }) => (
  <li
    className="relative mx-2 inline-block px-1 font-normal text-ghp-500 before:absolute
      before:-left-3 before:content-['|'] first:before:content-none"
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
    <Container className="-my-px py-px text-center text-stone-900">
      <div className="mx-auto mt-24 max-w-sm">
        <div className="grid grid-cols-2">
          {footerLinksPrimary?.map((link) => (
            <Button
              asChild
              key={link._key}
              className="w-[calc(100% + 1px)] col-span-2 -mt-px -mr-px hover:relative"
              kind="outline"
            >
              <Link target="_blank" rel="noreferrer" to={link.to}>
                {link.text}
              </Link>
            </Button>
          ))}
          {footerLinksSecondary?.map((link) => (
            <Button
              asChild
              key={link._key}
              className="w-[calc(100% + 1px)] -mt-px -mr-px hover:relative"
              kind="outline"
            >
              <Link prefetch="viewport" to={link.to}>
                {link.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <ul className="my-12 mb-24">
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
