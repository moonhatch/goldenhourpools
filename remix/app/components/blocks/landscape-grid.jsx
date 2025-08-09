import { useNavigate } from "@remix-run/react";
import PropTypes from "prop-types";
import { useState } from "react";

import { cleanObject, formatCurrency } from "@/lib/utils";

import Container from "../container";
import LandscapeCard from "../landscape-card";
import { Button } from "../ui/button";

const LandscapeGrid = ({ ...rest }) => {
  let { container, landscapes } = rest;
  const navigate = useNavigate();
  const [selectedLandscapes, setSelectedLandscapes] = useState({});

  // Transform the landscape data to add handle property
  const transformedLandscapes = landscapes.map((landscape) => ({
    ...landscape,
    handle: landscape.slug?.current || landscape.handle || landscape._id,
  }));

  // Handle selection changes from landscape cards
  const handleSelectionChange = (landscapeHandle, selectionData) => {
    setSelectedLandscapes((prev) => {
      if (selectionData.quantity === 0) {
        // Remove item if quantity is 0
        const newState = { ...prev };
        delete newState[landscapeHandle];
        return newState;
      } else {
        // Add or update item
        return {
          ...prev,
          [landscapeHandle]: selectionData,
        };
      }
    });
  };

  // Calculate total price
  const totalPrice = Object.values(selectedLandscapes).reduce(
    (total, item) => total + item.price,
    0,
  );

  // Handle button click
  const handleGetStarted = () => {
    if (totalPrice > 0) {
      navigate("/contact", {
        state: {
          landscapes: selectedLandscapes,
          totalPrice,
        },
      });
    } else {
      navigate("/contact");
    }
  };

  return (
    <Container {...cleanObject(container)}>
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {transformedLandscapes.map((landscape) => (
          <LandscapeCard
            key={landscape.handle}
            landscape={landscape}
            type="form"
            onSelectionChange={handleSelectionChange}
          />
        ))}
        <Button
          className="w-full md:col-span-2 lg:col-span-1 lg:col-start-2"
          kind="default"
          onClick={handleGetStarted}
          type="button"
        >
          {totalPrice > 0 ? `Get Started — ${formatCurrency(totalPrice)}` : "Get Started"}
        </Button>
      </div>
    </Container>
  );
};

LandscapeGrid.propTypes = {
  landscapes: PropTypes.array,
};

export default LandscapeGrid;
