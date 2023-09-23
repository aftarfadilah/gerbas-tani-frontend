"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  background: {
    url: string;
    alt: string;
  };
};

const HeroBanner: React.FC<Props> = ({
  title,
  description,
  link,
  background,
  
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 w-full">
      <div className="relative isolate overflow-hidden sm:pt-14">
        <div className="relative h-96 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full bg-white order-1 lg:order-2 -z-10 px-6">
          <Image
            src={background.url}
            alt={background.alt}
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            className="w-full"
            priority
          />
        </div>
        <div
          className="absolute inset-x-0 w-full h-full top-0 -z-10 transform-gpu bg-gray-900 opacity-50 blur-3xl"
          aria-hidden="true"
        ></div>
        <div className="absolute sm:static top-0 left-0 w-full h-full mx-auto max-w-2xl py-32 sm:py-44 z-10 px-6">
          <div className="text-center">
            {title && (
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {description}
              </p>
            )}
            {link && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={link.url}
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white border border-white hover:bg-white/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors"
                >
                  {link.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
