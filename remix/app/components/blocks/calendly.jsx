import { useScript } from "@uidotdev/usehooks";
import PropTypes from "prop-types";

import { cleanObject } from "../../lib/utils";
import Container from "../container";

const Calendly = ({ className, ...rest }) => {
  let { container, embedId } = rest;

  useScript(`https://assets.calendly.com/assets/external/widget.js`, {
    removeOnUnmount: false,
  });

  if (!embedId) return null;

  return (
    <Container className={className} {...cleanObject(container)}>
      <div
        className="calendly-inline-widget h-[700px] min-w-80 min-[690px]:-mt-[66px]"
        data-url={`https://calendly.com/${embedId}`}
      ></div>
    </Container>
  );
};

Calendly.propTypes = {
  className: PropTypes.string,
  embedId: PropTypes.string,
};

export default Calendly;
