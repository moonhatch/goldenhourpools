import PropTypes from "prop-types";

import Calendly from "./blocks/calendly";
import Contact from "./blocks/contact";
import Content from "./blocks/content";
import FAQ from "./blocks/faq";
import Gallery from "./blocks/gallery";
import Hero from "./blocks/hero";
import LandscapeGrid from "./blocks/landscape-grid";
import Media from "./blocks/media";
import PoolGrid from "./blocks/pool-grid";
import PoolSlider from "./blocks/pool-slider";
import ThankYou from "./blocks/thank-you";
import ZohoBooking from "./blocks/zoho-booking";
import ZohoForm from "./blocks/zoho-form";

const PageBuilder = ({ content }) => {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "blockCalendly":
            return <Calendly key={block._key} {...block} />;
          case "blockContact":
            return <Contact key={block._key} {...block} />;
          case "blockContent":
            return <Content key={block._key} {...block} />;
          case "blockFAQ":
            return <FAQ key={block._key} {...block} />;
          case "blockGallery":
            return <Gallery key={block._key} {...block} />;
          case "blockHeroImage":
            return <Hero key={block._key} {...block} />;
          case "blockHeroVideo":
            return <Hero key={block._key} {...block} />;
          case "blockLandscapeGrid":
            return <LandscapeGrid key={block._key} {...block} />;
          case "blockMedia":
            return <Media key={block._key} {...block} />;
          case "blockPoolGrid":
            return <PoolGrid key={block._key} {...block} />;
          case "blockPoolSlider":
            return <PoolSlider key={block._key} {...block} />;
          case "blockThankYou":
            return <ThankYou key={block._key} {...block} />;
          case "blockZohoBooking":
            return <ZohoBooking key={block._key} {...block} />;
          case "blockZohoForm":
            return <ZohoForm key={block._key} {...block} />;
          default:
            return null;
        }
      })}
    </main>
  );
};

PageBuilder.propTypes = {
  content: PropTypes.array.isRequired,
};

export default PageBuilder;
