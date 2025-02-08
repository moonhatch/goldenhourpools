import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return <div className="rounded-md bg-white px-3 py-0.5 text-black">{children}</div>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
