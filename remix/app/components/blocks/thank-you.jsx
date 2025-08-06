import PropTypes from "prop-types";

import { cleanObject } from "@/lib/utils";

import Container from "../container";

const ThankYou = ({ ...rest }) => {
  let { container, heading } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className="bg-ghp-50 px-6 py-36 text-center lg:py-64">
        <div className="ghp-prose mx-auto my-4 w-full max-w-none">
          <h2 className="text-balance">{heading}</h2>
        </div>
      </div>
    </Container>
  );
};

ThankYou.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

export default ThankYou;
