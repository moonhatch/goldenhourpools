import PropTypes from "prop-types";

import { cn } from "../lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

const Video = ({ className, src, ratio = 16 / 9, title }) => {
  return (
    <AspectRatio className={className} ratio={ratio}>
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center overflow-hidden",
          className,
        )}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-ghp-200"></div>
        <div className="absolute h-full w-[1000%] pr-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={src}
            title={title}
          ></iframe>
        </div>
      </div>
    </AspectRatio>
  );
};

Video.propTypes = {
  className: PropTypes.string,
  ratio: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
