import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return <div className="font-serif text-xl leading-none text-white uppercase">{children}</div>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
