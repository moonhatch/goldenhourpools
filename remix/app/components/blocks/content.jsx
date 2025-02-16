import { PortableText } from "@portabletext/react";

import { cleanObject, cn } from "@/lib/utils";

import { components } from "../../sanity/portable-text";
import Container from "../container";

const Content = ({ ...rest }) => {
  const { container, content } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className={cn("ghp-prose", container.isCentered && "mx-auto")}>
        {content && <PortableText value={content} components={components} />}
      </div>
    </Container>
  );
};

Content.propTypes = {};

export default Content;
