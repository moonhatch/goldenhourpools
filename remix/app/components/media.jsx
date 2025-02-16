import PropTypes from "prop-types";

import { cn } from "../lib/utils";
import { urlFor } from "../sanity/image";
import Tag from "./tag";
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
      {videoUrl && showVideo && (
        <iframe
          className="absolute top-[50%] left-[50%] h-[10000%] w-full -translate-x-[50%]
            -translate-y-[50%] transform"
          src={videoUrl}
          title={videoTitle}
        />
      )}
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
          srcSet={`${urlFor(image)
            .width(320)
            .height(320 / ratio)
            .url()} 320w,
            ${urlFor(image)
              .width(480)
              .height(480 / ratio)
              .url()} 480w,
            ${urlFor(image)
              .width(768)
              .height(768 / ratio)
              .url()} 768w,
            ${urlFor(image)
              .width(1024)
              .height(1024 / ratio)
              .url()} 1024w,
            ${urlFor(image)
              .width(1600)
              .height(1600 / ratio)
              .url()} 1600w,
            ${urlFor(image)
              .width(2400)
              .height(2400 / ratio)
              .url()} 2400w`}
        />
      )}
      {tag && (
        <div className="absolute bottom-0 left-0 p-6">
          <Tag>{tag}</Tag>
        </div>
      )}
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
