import PropTypes from "prop-types";

const Announcement = ({ children }) => {
  return <div className="bg-yellow text-center px-1 py-2.5">{children}</div>;
};

Announcement.propTypes = {
  children: PropTypes.node,
};

export default Announcement;
