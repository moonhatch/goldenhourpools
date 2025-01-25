import PropTypes from "prop-types";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Media = ({ alt, children, imgSrc, ratio }) => {
  return (
    <AspectRatio className="relative overflow-hidden rounded-3xl" ratio={ratio}>
      <img src={imgSrc} alt={alt} className="h-full w-full object-cover" />
      {children && <div className="absolute bottom-0 left-0 p-6">{children}</div>}
    </AspectRatio>
  );
};

Media.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  imgSrc: PropTypes.string,
  ratio: PropTypes.number,
};

export default Media;
