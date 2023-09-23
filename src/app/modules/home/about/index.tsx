"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-full text-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-x-16 px-4 sm:px-0 py-24 gap-12">
        <div className="w-full flex flex-col gap-y-4">
          <div className="relative w-full bg-gray-200 aspect-[3/2]">
            <Image
              src={
                "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              }
              alt="Gerbas"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="relative w-full bg-gray-200 aspect-[3/2]">
              <Image
                src={
                  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
            <div className="relative w-full bg-gray-200 aspect-[3/2]">
              <Image
                src={
                  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <span>Dari Petani, Demi Petani, Untuk Petani</span>
          <h2 className="text-6xl font-black">Mahakarya yang Membumi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quaerat, voluptas?{" "}
          </p>
          <div className="w-full flex justify-end">
            <span>Info lebih lanjut</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-4">
              <div className="bg-gray-200 rounded-md w-full flex flex-col sm: flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="bg-gray-200 rounded-md w-full flex flex-col sm:flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4 px-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <div className="bg-gray-200 rounded-md w-full flex flex-col sm:flex-row">
                <div className="flex justify-center items-center p-2 px-4">
                  <div className="bg-white rounded-full aspect-square w-[50px]"></div>
                </div>
                <div className="py-4 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
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
