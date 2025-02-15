import { Link } from "@remix-run/react";

import { Button } from "@/components/ui/button";

import { urlFor } from "../../sanity/image";

const Hero = ({ ...rest }) => {
  const { button, heading, image, title, url, urlTitle, urlThumbnail } = rest;

  return (
    <div className="ghp-h-screen relative w-full overflow-hidden bg-ghp-900">
      {image && (
        <img
          alt={image.alt}
          className="ghp-h-screen ghp-w-screen absolute top-0 left-0 object-cover"
          sizes={`(max-width: 320px) 100vw,
            (max-width: 480px) 100vw,
            (max-width: 768px) 100vw,
            (max-width: 1024px) 100vw,
            (max-width: 1600px) 100vw,
            (max-width: 2400px) 100vw,
            2400px`}
          src={urlFor(image).url()}
          srcSet={`${urlFor(image).width(320).height(568).url()} 320w,
            ${urlFor(image).width(480).height(584).url()} 480w,
            ${urlFor(image).width(768).height(1366).url()} 768w,
            ${urlFor(image).width(1024).height(1820).url()} 1024w,
            ${urlFor(image).width(1600).url()} 1600w,
            ${urlFor(image).width(2400).url()} 2400w`}
        />
      )}
      {url && (
        <>
          {urlThumbnail && (
            <img
              className="ghp-h-screen ghp-w-screen inset-shadow-2xl absolute top-0 left-0
                object-cover blur"
              src={urlFor(urlThumbnail).url()}
              alt={urlThumbnail.alt}
            />
          )}
          <iframe className="ghp-iframe" src={url} title={urlTitle} />
        </>
      )}
      <div
        className="absolute top-0 left-0 h-72 w-full bg-gradient-to-b from-ghp-900 to-transparent"
      ></div>
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center px-5">
        {title && (
          <h1 className="mt-32 hidden shrink-0 font-serif leading-4 text-white lg:block">
            {title}
          </h1>
        )}
        <div className="flex grow flex-col items-center justify-center gap-6 lg:gap-8">
          {heading && (
            <h2 className="text-center font-serif text-4xl text-balance text-white sm:text-5xl">
              {heading}
            </h2>
          )}
          {button && (
            <Button asChild size="wide">
              <Link to={button.to}>{button.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
