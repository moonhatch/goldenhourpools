import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { Link } from "@remix-run/react";
import { NavLink, useMatches } from "@remix-run/react";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";

import Announcement from "@/components/announcement";
import { Button } from "@/components/ui/button";

import { useEventListener } from "@/hooks";

import { Sun } from "@/icons";

import { cn } from "@/lib/utils";

const Header = () => {
  const matches = useMatches();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isHome = matches[1]?.pathname === "/";
  const invertColors = isHome && !isScrolled && !isOpen;

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
    // outsidePress: true, // Dismiss when clicking outside the menu
    // escapeKey: true, // Dismiss when pressing the Escape key
    // referencePress: false, // Keep the menu open when clicking the button again
  });
  const focus = useFocus(context, { enabled: true });
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss, focus]);

  const scrollHandler = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEventListener("scroll", scrollHandler);
  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  return (
    <>
      {isHome && <Announcement>Serving Austin, TX and surrounding areas.</Announcement>}
      <div
        className={cn(
          "relative flex h-24 items-center justify-between px-5 lg:px-16",
          !invertColors && "bg-ghp-100",
          invertColors ? "text-white" : "border-b border-ghp-250 text-orange",
        )}
      >
        <ul className="-mx-2.5">
          <li className="inline-block px-2.5 lg:hidden">
            <Link
              className="inline-block font-serif underline-offset-2 outline-none hover:underline
                focus-visible:underline"
              prefetch="viewport"
              to="/"
            >
              Golden Hour
            </Link>
          </li>
          <li className="hidden px-2.5 lg:inline-block">
            <NavLink
              className={({ isActive }) =>
                cn(
                  `inline-block underline-offset-2 outline-none hover:underline
                  focus-visible:underline`,
                  isActive && "underline",
                )
              }
              prefetch="viewport"
              to="/pools"
            >
              Our Pools
            </NavLink>
          </li>
          <li className="hidden px-2.5 lg:inline-block">
            <NavLink
              className={({ isActive }) =>
                cn(
                  `inline-block underline-offset-2 outline-none hover:underline
                  focus-visible:underline`,
                  isActive && "underline",
                )
              }
              prefetch="viewport"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        <Link
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
            border-current outline-none focus-visible:border"
          prefetch="viewport"
          to="/"
        >
          <Sun className="animate h-12 w-12 animate-spin [animation-duration:_20s]" />
        </Link>
        <ul className="-mx-2.5">
          <li className="hidden px-2.5 lg:inline-block">
            <NavLink
              className={({ isActive }) =>
                cn(
                  `inline-block underline-offset-2 outline-none hover:underline
                  focus-visible:underline`,
                  isActive && "underline",
                )
              }
              prefetch="viewport"
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>
          <li className="hidden px-2.5 lg:inline-block">
            <Button asChild kind="outline" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </li>
          <li className="inline-block px-2.5 lg:hidden">
            <button
              className="inline-block cursor-pointer underline-offset-2 outline-none hover:underline
                focus-visible:underline"
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
                  "absolute right-0 h-dvh w-full bg-ghp-200 pt-24 lg:w-md",
                  isHome && "pt-[136px]",
                )}
                {...getFloatingProps()}
              >
                <MobileNavItem onClick={() => setIsOpen(false)} to="/pools">
                  Our Pools
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsOpen(false)} to="/gallery">
                  Gallery
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsOpen(false)} to="/faq">
                  FAQ
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsOpen(false)} to="/contact">
                  Contact
                </MobileNavItem>
              </ul>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

Header.propTypes = {};

const MobileNavItem = ({ children, onClick, to }) => (
  <li className="border-b border-ghp-250 bg-ghp-100 lg:border-x">
    <Link
      className="block py-8 text-center font-serif text-4xl text-orange decoration-2
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
