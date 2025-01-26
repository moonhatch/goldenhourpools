import { Link } from "@remix-run/react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-dvh overflow-hidden">
      <img src="/5313-avg-g.jpg" alt="Golden Hour Pools" className="h-full w-full object-cover" />
      <div
        className="absolute top-0 left-0 h-72 w-full bg-gradient-to-b from-ghp-900 to-transparent"
      ></div>
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center px-5">
        <h1 className="hidden shrink-0 pt-36 font-serif leading-0 text-white lg:inline">
          Golden Hour
        </h1>
        <div className="flex grow flex-col items-center justify-center gap-6 lg:gap-8">
          <h2 className="text-center font-serif text-4xl text-white sm:text-5xl">
            Great Pools, <br className="lg:hidden" />
            Better Prices.
          </h2>
          <Button asChild size="wide">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
