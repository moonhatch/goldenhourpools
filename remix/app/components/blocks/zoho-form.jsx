import { useLocation } from "@remix-run/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import { cleanObject } from "../../lib/utils";
import { getStoredUtmParams } from "../../lib/utm";
import Container from "../container";

const ZohoForm = ({
  className,
  formId,
  formPermaId,
  height = "665px",
  width = "100%",
  ariaLabel = "Contact Form",
  ...rest
}) => {
  const formContainerRef = useRef(null);
  const location = useLocation();
  const [utmParams, setUtmParams] = useState({});

  const { state } = location;

  let addons = "";

  if (state?.addons && state?.variant?.addons) {
    addons = state.addons.reduce((str, addon) => {
      const { title } = state.variant.addons.find((a) => a.slug.current === addon);
      return !str ? title : (str += `, ${title}`);
    }, "");
  }

  useEffect(() => {
    setUtmParams(getStoredUtmParams());
  }, []);

  useEffect(() => {
    if (!formContainerRef.current || !formId || !formPermaId) return;

    // Create the iframe and set up the event listener
    try {
      const iframe = document.createElement("iframe");
      iframe.src = `https://forms.zohopublic.com/goldenhourpools1/form/${formId}/formperma/${formPermaId}?zf_rszfm=1&product=${state?.product?.title ?? ""}&variant=${state?.variant?.title ?? ""}&addons=${addons}&utm_source=${utmParams.utm_source || ""}&utm_source=${utmParams.utm_medium || ""}&utm_campaign=${utmParams.utm_campaign || ""}&utm_term=${utmParams.utm_term || ""}&utm_content=${utmParams.utm_content}&ga_source=${utmParams.ga_source || ""}&gad_campaign=${utmParams.gad_campaign || ""}`;
      iframe.style.border = "none";
      iframe.style.height = height;
      iframe.style.width = width;
      iframe.style.transition = "all 0.5s ease";
      iframe.setAttribute("aria-label", ariaLabel);

      if (formContainerRef.current.children.length === 0) {
        formContainerRef.current.appendChild(iframe);
      }

      // Set up message event listener for iframe resizing
      const handleMessage = (event) => {
        const iframeRef = formContainerRef.current.children[0];

        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";

            if (iframeRef.src.indexOf("formperma") > 0 && iframeRef.src.indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframeRef.style.height;
              let zf_tout = false;

              if (zf_ifrm_data.length === 3) {
                iframeRef.scrollIntoView();
                zf_tout = true;
              }

              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframeRef.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframeRef.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };

      window.addEventListener("message", handleMessage, false);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("message", handleMessage, false);
      };
    } catch (e) {
      console.error("Error setting up Zoho form:", e);
    }
  }, [formId, formPermaId, height, width, ariaLabel]);

  let { container } = rest;

  return (
    <Container className={className} {...cleanObject(container)}>
      <div ref={formContainerRef} id={`zf_div_${formPermaId}`} />
    </Container>
  );
};

ZohoForm.propTypes = {
  className: PropTypes.string,
  formId: PropTypes.string.isRequired,
  formPermaId: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  ariaLabel: PropTypes.string,
  container: PropTypes.object,
};

export default ZohoForm;
