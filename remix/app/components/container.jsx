import PropTypes from "prop-types";

import { cn } from "../lib/utils";

const Container = ({
  bottomSpacing,
  bottomSpacingDesktop,
  children,
  className,
  isCentered = false,
  isMobileFullWidth = false,
  topSpacing,
  topSpacingDesktop,
  width = "lg",
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl lg:px-16",
        bottomSpacing === "sm" && "mb-6",
        bottomSpacing === "md" && "mb-12",
        bottomSpacing === "lg" && "mb-24",
        bottomSpacing === "xl" && "mb-48",
        bottomSpacingDesktop === "sm" && "lg:mb-6",
        bottomSpacingDesktop === "md" && "lg:mb-12",
        bottomSpacingDesktop === "lg" && "lg:mb-24",
        bottomSpacingDesktop === "xl" && "lg:mb-48",
        isCentered && "text-center",
        !isMobileFullWidth && "px-5",
        topSpacing === "sm" && "mt-6",
        topSpacing === "md" && "mt-12",
        topSpacing === "lg" && "mt-24",
        topSpacing === "xl" && "mt-48",
        topSpacingDesktop === "sm" && "lg:mt-6",
        topSpacingDesktop === "md" && "lg:mt-12",
        topSpacingDesktop === "lg" && "lg:mt-24",
        topSpacingDesktop === "xl" && "lg:mt-48",
        width === "xs" && "max-w-2xl",
        width === "sm" && "max-w-3xl",
        width === "md" && "max-w-5xl",
        width === "max" && "max-w-none px-0 lg:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  bottomSpacing: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  bottomSpacingDesktop: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isCentered: PropTypes.bool,
  isMobileFullWidth: PropTypes.bool,
  topSpacing: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  topSpacingDesktop: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  width: PropTypes.oneOf(["xs", "sm", "md", "lg", "max"]),
};

export default Container;
