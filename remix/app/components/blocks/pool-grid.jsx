import PropTypes from "prop-types";

import { cleanObject } from "@/lib/utils";

import Container from "../container";
import PoolCard from "../pool-card";

const PoolGrid = ({ ...rest }) => {
  let { container, pools } = rest;

  // Transform the pool data to the original JSON product schema
  const products = pools.map((pool) => ({
    ...pool,
    handle: pool.slug.current,
    variants:
      pool.variants?.map((variant) => ({
        ...variant,
        handle: variant.slug.current,
        options: {
          depth: variant.depth,
          ledge: !!variant.hasLedge,
          spa: !!variant.hasSpa,
        },
      })) ?? [],
  }));

  return (
    <Container {...cleanObject(container)}>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <PoolCard key={product.handle} product={product} type="form" />
        ))}
      </div>
    </Container>
  );
};

PoolGrid.propTypes = {
  pools: PropTypes.array,
};

export default PoolGrid;
