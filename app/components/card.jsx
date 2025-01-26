import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";

// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";

const Card = ({ className, product }) => {
  return (
    <div className={cn("rounded-3xl bg-ghp-200 p-5", className)}>
      <h3 className="flex justify-between border-b border-ghp-300 pb-4 font-serif text-3xl">
        <span>{product?.name ?? "Pool"}</span>
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(product?.price ?? 0)}
        </span>
      </h3>
      <img alt={product?.name ?? "Pool"} className="w-full" src={`${product.image}`} />
      <Button asChild align="between" className="w-full" kind="secondary" rounded="xl">
        <Link to={`/pools#${product?.handle ?? ""}`}>
          Learn More <ArrowRight strokeWidth={1} />
        </Link>
      </Button>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default Card;
