import PropTypes from "prop-types";

import Content from "./blocks/content";

const PageBuilder = ({ content }) => {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "blockContent":
            return <Content key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
};

PageBuilder.propTypes = {
  content: PropTypes.array.isRequired,
};

export default PageBuilder;
