import { cleanObject } from "@/lib/utils";
import { cn } from "@/lib/utils";

import { useBreakpoint } from "../../hooks";
import Container from "../container";
import Media from "../media";

const Gallery = ({ ...rest }) => {
  const bp = useBreakpoint();

  const { container, galleryColumns } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
        {galleryColumns.map((column) => (
          <div className={cn("grid gap-6", column.span === 2 && "lg:col-span-2")} key={column._key}>
            {column.media.map((media) => (
              <Media
                key={media._key}
                image={media.image}
                ratio={bp === "lg" && media.aspectDesktop ? media.aspectDesktop : media.aspect}
                rounded={!!media.isRounded}
                showVideo={!!media.showVideo}
                tag={media.tag}
                videoUrl={media.url}
                videoTitle={media.urlTitle}
              />
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
