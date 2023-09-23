"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  toptext?: string;
  title?: string;
  deskripsi?: string;
  medias?: {
    url: string;
    alt: string;
  }[];
  cards?: string[]
};

const About: React.FC<Props> = ({ toptext, title, deskripsi, medias }) => {
  return (
    <div className="w-full text-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-x-16 px-4 sm:px-0 py-24 gap-12">
        {medias && (
          <div className="w-full flex flex-col gap-y-4">
            {medias[0] && (
              <div className="relative w-full bg-gray-200 aspect-[3/2]">
                <Image
                  src={medias[0].url}
                  alt={medias[0].alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  className="w-full"
                  priority
                />
              </div>
            )}
            <div className="flex flex-row gap-x-4">
              {medias[1] && (
                <div className="relative w-full bg-gray-200 aspect-[3/2]">
                  <Image
                    src={medias[1].url}
                    alt={medias[1].alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                    className="w-full"
                    priority
                  />
                </div>
              )}
              {medias[2] && (
                <div className="relative w-full bg-gray-200 aspect-[3/2]">
                  <Image
                    src={medias[2].url}
                    alt={medias[2].alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                    className="w-full"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        )}
        <div className="w-full flex flex-col gap-y-4">
          <span>{toptext}</span>
          <h2 className="text-6xl font-black">{title}</h2>
          <p>{deskripsi}</p>
          <div className="w-full flex justify-end">
            <span>Info lebih lanjut</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-4">
              <div className="bg-gray-200 rounded-md w-full flex flex-col sm:flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
