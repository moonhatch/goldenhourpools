import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const Container = ({ children, className, mobileFullWidth = false, size }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl lg:px-24",
        !mobileFullWidth && "px-5",
        size === "sm" && "max-w-3xl",
        size === "md" && "max-w-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mobileFullWidth: PropTypes.bool,
  size: PropTypes.string,
};

export default Container;
