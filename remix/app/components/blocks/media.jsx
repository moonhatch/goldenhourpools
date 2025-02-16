import { cleanObject } from "@/lib/utils";

import { useBreakpoint } from "../../hooks";
import Container from "../container";
import Media from "../media";

const MediaBlock = ({ ...rest }) => {
  const bp = useBreakpoint();

  const { container, media } = rest;
  const { aspect, aspectDesktop, image, isRounded, showVideo, tag, url, urlTitle } = media;

  return (
    <Container {...cleanObject(container)}>
      <Media
        image={image}
        ratio={bp === "lg" && aspectDesktop ? aspectDesktop : aspect}
        rounded={!!isRounded}
        showVideo={!!showVideo}
        tag={tag}
        videoUrl={url}
        videoTitle={urlTitle}
      />
    </Container>
  );
};

MediaBlock.propTypes = {};

export default MediaBlock;
