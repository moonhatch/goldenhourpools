import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { Link } from "@remix-run/react";
import { NavLink, useMatches } from "@remix-run/react";
import PropTypes from "prop-types";
import { useState } from "react";

import { Sun } from "../icons";
import { cn } from "../lib/utils";
import Announcement from "./announcement";
import { Button } from "./ui/button";

const Header = ({ siteData }) => {
  const matches = useMatches();
  const [isOpen, setIsOpen] = useState(false);

  const { announcement, navLinksPrimary, navLinksSecondary, title } = siteData;

  const isHome = matches[1]?.pathname === "/";
  const invertColors = isHome && !isOpen;

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);

  return (
    <>
      {isHome && announcement && <Announcement>{announcement}</Announcement>}
      <div
        className={cn(
          "relative flex h-24 items-center justify-between px-5 lg:px-16",
          !invertColors && "bg-ghp-100",
          invertColors ? "text-white" : "border-b border-dashed border-ghp-300 text-orange",
        )}
      >
        <ul className="-mx-2.5">
          <li className="inline-block px-2.5 lg:hidden">
            <Link
              className="inline-block font-serif text-xl uppercase underline-offset-2 outline-none
                hover:underline focus-visible:underline"
              prefetch="viewport"
              to="/"
            >
              {title}
            </Link>
          </li>
          {navLinksPrimary?.map((link) => (
            <li key={link._key} className="hidden px-2.5 lg:inline-block">
              <NavLink
                className={({ isActive }) =>
                  cn(
                    `inline-block font-serif text-xl uppercase underline-offset-2 outline-none
                    hover:underline focus-visible:underline`,
                    isActive && "underline",
                  )
                }
                prefetch="viewport"
                to={link.to}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
            border-current outline-none focus-visible:border"
          prefetch="viewport"
          to="/"
        >
          <Sun className="animate h-9 w-9 animate-spin [animation-duration:_20s]" />
        </Link>
        <ul className="-mx-2.5">
          {navLinksSecondary?.map((link, i) => {
            if (i === navLinksSecondary.length - 1) {
              return (
                <li key={link._key} className="hidden px-2.5 lg:inline-block">
                  <Button asChild className="font-serif text-xl uppercase" kind="outline" size="sm">
                    <Link to={link.to}>{link.text}</Link>
                  </Button>
                </li>
              );
            } else {
              return (
                <li key={link._key} className="hidden px-2.5 lg:inline-block">
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        `inline-block font-serif text-xl uppercase underline-offset-2 outline-none
                        hover:underline focus-visible:underline`,
                        isActive && "underline",
                      )
                    }
                    prefetch="viewport"
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            }
          })}
          <li className="inline-block px-2.5 lg:hidden">
            <button
              className="inline-block cursor-pointer font-serif text-xl uppercase underline-offset-2
                outline-none hover:underline focus-visible:underline"
              ref={refs.setReference}
              {...getReferenceProps()}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </li>
        </ul>
      </div>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay lockScroll>
            <FloatingFocusManager context={context}>
              <ul
                ref={refs.setFloating}
                className={cn(
                  "absolute right-0 h-dvh w-full bg-stone-200 pt-24 lg:w-md",
                  isHome && "pt-[136px]",
                )}
                {...getFloatingProps()}
              >
                {navLinksPrimary?.map((link) => (
                  <MobileNavItem key={link._key} onClick={() => setIsOpen(false)} to={link.to}>
                    {link.text}
                  </MobileNavItem>
                ))}
                {navLinksSecondary?.map((link) => (
                  <MobileNavItem key={link._key} onClick={() => setIsOpen(false)} to={link.to}>
                    {link.text}
                  </MobileNavItem>
                ))}
              </ul>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

Header.propTypes = { siteData: PropTypes.object };

const MobileNavItem = ({ children, onClick, to }) => (
  <li className="border-stone-250 border-b bg-stone-100 lg:border-x">
    <Link
      className="block py-8 text-center font-serif text-4xl text-orange uppercase decoration-2
        underline-offset-4 outline-none hover:underline focus-visible:underline"
      onClick={onClick}
      prefetch="viewport"
      to={to}
    >
      {children}
    </Link>
  </li>
);

MobileNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

export default Header;
