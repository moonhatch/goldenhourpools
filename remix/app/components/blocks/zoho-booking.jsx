import PropTypes from "prop-types";

import { cleanObject } from "../../lib/utils";
import Container from "../container";

const ZohoBooking = ({ className, ...rest }) => {
  let { container, iframeSrc } = rest;

  if (!iframeSrc) return null;

  return (
    <Container className={className} {...cleanObject(container)}>
      <iframe
        className="overflow-hidden rounded-3xl"
        width="100%"
        height="750px"
        src={iframeSrc}
        title="Booking"
      ></iframe>
    </Container>
  );
};

ZohoBooking.propTypes = {
  className: PropTypes.string,
  iframeSrc: PropTypes.string,
};

export default ZohoBooking;
