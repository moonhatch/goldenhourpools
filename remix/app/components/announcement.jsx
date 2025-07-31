import PropTypes from "prop-types";

const Announcement = ({ children }) => {
  return (
    <div className="h-10 bg-orange px-1 py-3 text-center text-sm font-normal text-white">
      {children}
    </div>
  );
};

Announcement.propTypes = {
  children: PropTypes.node,
};

export default Announcement;
