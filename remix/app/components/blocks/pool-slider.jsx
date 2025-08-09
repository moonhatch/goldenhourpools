import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { cleanObject } from "@/lib/utils";

import { useBreakpoint } from "../../hooks";
import Container from "../container";
import PoolCard from "../pool-card";

const PoolSlider = ({ ...rest }) => {
  const bp = useBreakpoint();
  const [options, setOptions] = useState({});
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { container, pools } = rest;

  useEffect(() => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      active: bp !== "lg",
    }));
  }, [bp, emblaApi]);

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
      <div className="embla" ref={emblaRef}>
        <div className="embla__container mx-3 lg:mx-2">
          {products.map((product, i) => (
            <div className="embla__slide px-3" key={product.handle}>
              <PoolCard className={i % 2 ? "rotate-1" : "-rotate-1"} product={product} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

PoolSlider.propTypes = {
  pools: PropTypes.array,
};

export default PoolSlider;
