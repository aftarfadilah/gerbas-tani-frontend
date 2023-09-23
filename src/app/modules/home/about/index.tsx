"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type Props = {
  toptext?: string;
  title?: string;
  deskripsi?: string;
  medias?: {
    url: string;
    alt: string;
  }[];
  cards?: string[];
};

const About: React.FC<Props> = ({
  toptext,
  title,
  deskripsi,
  medias,
  cards,
}) => {
  return (
    <div className="w-full text-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-x-16 px-4 sm:px-0 py-24 gap-12">
        {medias && (
          <div className="w-full flex flex-col gap-y-4">
            {medias[0] && (
              <div className="relative w-full bg-gray-200 aspect-[3/2]">
                <img
                  src={medias[0].url}
                  alt={medias[0].alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="flex flex-row gap-x-4">
              {medias[1] && (
                <div className="relative w-full bg-gray-200 aspect-[3/2]">
                  <img
                    src={medias[1].url}
                    alt={medias[1].alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              {medias[2] && (
                <div className="relative w-full bg-gray-200 aspect-[3/2]">
                  <img
                    src={medias[2].url}
                    alt={medias[2].alt}
                    className="w-full h-full object-cover object-center"
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
            <Link href="/agro-asri">Info lebih lanjut</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {cards?.map((card, index) => (
              <div className="flex flex-row gap-x-4" key={index}>
                <div className="bg-gray-200 rounded-md w-full flex flex-col sm:flex-row">
                  <div className="flex justify-center items-center p-2 px-4">
                    <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                  </div>
                  <div className="py-4 px-4">{card}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
