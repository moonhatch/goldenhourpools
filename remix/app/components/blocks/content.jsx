import { PortableText } from "@portabletext/react";

import { cleanObject } from "@/lib/utils";

import Container from "../container";

const Content = ({ ...rest }) => {
  const { container, content } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className="ghp-prose">{content && <PortableText value={content} />}</div>
    </Container>
  );
};

Content.propTypes = {};

export default Content;
