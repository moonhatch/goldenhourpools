import PropTypes from "prop-types";

import { cleanObject } from "@/lib/utils";

import Card from "../../components/card";
import Container from "../container";

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
          spa: !!variant.hasSpa,
        },
      })) ?? [],
  }));

  return (
    <Container {...cleanObject(container)}>
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.handle} product={product} type="form" />
        ))}
      </div>
    </Container>
  );
};

PoolGrid.propTypes = {
  pools: PropTypes.array,
};

export default PoolGrid;
