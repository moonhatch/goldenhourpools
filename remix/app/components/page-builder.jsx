import PropTypes from "prop-types";

import Content from "./blocks/content";
import Hero from "./blocks/hero";

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
          case "blockHeroImage":
            return <Hero key={block._key} {...block} />;
          case "blockHeroVideo":
            return <Hero key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return (
              <div key={block._key}>
                <div>Block not found:</div>
                <pre>{JSON.stringify(block, null, 2)}</pre>
              </div>
            );
        }
      })}
    </main>
  );
};

PageBuilder.propTypes = {
  content: PropTypes.array.isRequired,
};

export default PageBuilder;
