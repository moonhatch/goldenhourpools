import PropTypes from "prop-types";

import { cleanObject } from "@/lib/utils";

import Container from "../container";

const ThankYou = ({ ...rest }) => {
  let { container, heading } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className="rounded-3xl bg-yellow px-6 py-36 text-center text-white lg:py-64">
        <div
          className="ghp-prose mx-auto my-4 w-full max-w-none text-white prose-headings:text-white"
        >
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
