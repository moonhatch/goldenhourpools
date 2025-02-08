import PropTypes from "prop-types";

const Announcement = ({ children }) => {
  return <div className="h-10 bg-yellow px-1 py-2 text-center">{children}</div>;
};

Announcement.propTypes = {
  children: PropTypes.node,
};

export default Announcement;
