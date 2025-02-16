import PropTypes from "prop-types";

import Contact from "./blocks/contact";
import Content from "./blocks/content";
import FAQ from "./blocks/faq";
import Hero from "./blocks/hero";
import Media from "./blocks/media";
import ThankYou from "./blocks/thank-you";

const PageBuilder = ({ content }) => {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "blockContact":
            return <Contact key={block._key} {...block} />;
          case "blockContent":
            return <Content key={block._key} {...block} />;
          case "blockFAQ":
            return <FAQ key={block._key} {...block} />;
          case "blockHeroImage":
            return <Hero key={block._key} {...block} />;
          case "blockHeroVideo":
            return <Hero key={block._key} {...block} />;
          case "blockMedia":
            return <Media key={block._key} {...block} />;
          case "blockThankYou":
            return <ThankYou key={block._key} {...block} />;
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
