import PropTypes from "prop-types";

import { cleanObject } from "@/lib/utils";

import Container from "../container";
import LandscapeCard from "../landscape-card";
import { Button } from "../ui/button";

const LandscapeGrid = ({ ...rest }) => {
  let { container, landscapes } = rest;

  return (
    <Container {...cleanObject(container)}>
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {landscapes.map((landscape) => (
          <LandscapeCard key={landscape.handle} landscape={landscape} type="form" />
        ))}
        <Button
          className="w-full md:col-span-2 lg:col-span-1 lg:col-start-2"
          kind="default"
          type="submit"
        >
          Get Started
        </Button>
      </div>
    </Container>
  );
};

LandscapeGrid.propTypes = {
  landscapes: PropTypes.array,
};

export default LandscapeGrid;
