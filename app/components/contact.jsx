import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const Contact = ({ className }) => {
  return (
    <div className={cn("rounded-3xl bg-orange p-6 text-center text-white", className)}>To do</div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
