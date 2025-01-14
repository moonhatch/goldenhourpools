import { Link } from "@remix-run/react";

import { Button } from "@/components/ui/button";

import { Sun } from "@/icons";

const Header = () => {
  return (
    <div className="relative flex h-24 items-center justify-between bg-background px-5 lg:px-16">
      <ul className="-mx-2.5">
        <li className="inline-block px-2.5 lg:hidden">
          <Link
            className="inline-block font-serif text-orange outline-none hover:underline
              focus-visible:underline"
            prefetch="viewport"
            to="/"
          >
            Golden Hour
          </Link>
        </li>
        <li className="hidden px-2.5 lg:inline-block">
          <Link
            className="inline-block text-orange outline-none hover:underline
              focus-visible:underline"
            prefetch="viewport"
            to="/pools"
          >
            Our Pools
          </Link>
        </li>
        <li className="hidden px-2.5 lg:inline-block">
          <Link
            className="inline-block text-orange outline-none hover:underline
              focus-visible:underline"
            prefetch="viewport"
            to="/gallery"
          >
            Gallery
          </Link>
        </li>
      </ul>
      <Link
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
          border-black outline-none focus-visible:border"
        prefetch="viewport"
        to="/"
      >
        <Sun className="animate h-12 w-12 animate-spin text-orange duration-[10000ms]" />
      </Link>
      <ul className="-mx-2.5">
        <li className="hidden px-2.5 lg:inline-block">
          <Link
            className="inline-block text-orange outline-none hover:underline
              focus-visible:underline"
            prefetch="viewport"
            to="/faq"
          >
            FAQ
          </Link>
        </li>
        <li className="hidden px-2.5 lg:inline-block">
          <Button asChild kind="outline" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
        </li>
        <li className="inline-block px-2.5 lg:hidden">
          <button
            className="inline-block cursor-pointer text-orange outline-none hover:underline
              focus-visible:underline"
          >
            Menu
          </button>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {};

export default Header;
