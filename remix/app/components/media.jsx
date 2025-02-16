import PropTypes from "prop-types";

import { cn } from "../lib/utils";
import { urlFor } from "../sanity/image";
import { AspectRatio } from "./ui/aspect-ratio";

const Media = ({
  image,
  ratio,
  rounded = false,
  showVideo = false,
  tag,
  videoUrl,
  videoTitle = "",
}) => {
  return (
    <AspectRatio className={cn("relative overflow-hidden", rounded && "rounded-3xl")} ratio={ratio}>
      {videoUrl && showVideo && <iframe className="ghp-iframe" src={videoUrl} title={videoTitle} />}
      {image && !showVideo && (
        <img
          alt={image.alt}
          className="h-full w-full object-cover"
          sizes={`(max-width: 320px) 100vw,
            (max-width: 480px) 100vw,
            (max-width: 768px) 100vw,
            (max-width: 1024px) 100vw,
            (max-width: 1600px) 100vw,
            (max-width: 2400px) 100vw,
            2400px`}
          src={urlFor(image).url()}
          srcSet={`${urlFor(image).width(320).height(568).url()} 320w,
            ${urlFor(image).width(480).height(584).url()} 480w,
            ${urlFor(image).width(768).height(1366).url()} 768w,
            ${urlFor(image).width(1024).height(1820).url()} 1024w,
            ${urlFor(image).width(1600).url()} 1600w,
            ${urlFor(image).width(2400).url()} 2400w`}
        />
      )}
      {tag && <div className="absolute bottom-0 left-0 p-6">{tag}</div>}
    </AspectRatio>
  );
};

Media.propTypes = {
  image: PropTypes.object,
  ratio: PropTypes.number,
  rounded: PropTypes.bool,
  showVideo: PropTypes.bool,
  tag: PropTypes.string,
  videoUrl: PropTypes.string,
  videoTitle: PropTypes.string,
};

export default Media;
