import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Container = ({ children, className, mobileFullWidth = false }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <div
        className={cn("max-w-7xl lg:mx-24 grow", !mobileFullWidth && "mx-5 ")}
      >
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mobileFullWidth: PropTypes.bool,
};

export default Container;
