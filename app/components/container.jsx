import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const Container = ({ children, className, mobileFullWidth = false }) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl lg:px-24", !mobileFullWidth && "px-5", className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mobileFullWidth: PropTypes.bool,
};

export default Container;
