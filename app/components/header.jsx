import { useEventListener } from "@/hooks";
import { Link } from "@remix-run/react";
import { NavLink, useMatches } from "@remix-run/react";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";

import { Button } from "@/components/ui/button";

import { Sun } from "@/icons";

import { cn } from "@/lib/utils";

const MobileNavItem = ({ children, to }) => (
  <li className="border-b border-ghp-250 bg-background">
    <Link
      className="block py-8 text-center font-serif text-4xl text-orange decoration-2
        underline-offset-4 outline-none hover:underline focus-visible:underline"
      prefetch="viewport"
      to={to}
    >
      {children}
    </Link>
  </li>
);

MobileNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Header = () => {
  const matches = useMatches();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = matches[1]?.pathname === "/";
  const invertColors = isHome && !isScrolled && !menuOpen;

  const scrollHandler = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEventListener("scroll", scrollHandler);
  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  return (
    <>
      <div
        className={cn(
          "relative flex h-24 items-center justify-between px-5 lg:px-16",
          !invertColors && "bg-background",
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
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="absolute h-dvh w-full bg-ghp-200 lg:hidden">
          <MobileNavItem to="/pools">Our Pools</MobileNavItem>
          <MobileNavItem to="/gallery">Gallery</MobileNavItem>
          <MobileNavItem to="/faq">FAQ</MobileNavItem>
          <MobileNavItem to="/contact">Contact</MobileNavItem>
        </ul>
      )}
    </>
  );
};

Header.propTypes = {};

export default Header;
