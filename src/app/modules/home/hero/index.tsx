"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clientConfig from "../../../../../client-config";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

type Props = {
  dateTimeCountdown?: string;
  deskripsi?: string;
  banner?: {
    url: string;
    alt: string;
  };
} & React.HTMLAttributes<HTMLDivElement>;

const Hero: React.FC<Props> = ({ dateTimeCountdown, deskripsi, banner }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const _targetDate = dateTimeCountdown
      ? new Date(dateTimeCountdown)
      : new Date();
    const targetDate = _targetDate.getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        // Countdown has ended
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        // Calculate days, hours, minutes, and seconds left
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };

    // Initial call to set the countdown
    updateCountdown();
  }, [dateTimeCountdown]);

  return (
    <div className="w-full">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="w-full h-full -z-10">
          {banner && banner.url && (
            <img
              src={banner?.url ?? ""}
              alt={banner?.alt ?? ""}
              className="absolute w-full h-full object-cover object-center z-[-10]"
            />
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-80 z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl px-6">
              {countdown.days} <span className="text-[2rem] mr-2">hari</span>
              {countdown.hours} <span className="text-[2rem] mr-2">jam</span>
              {countdown.minutes}
              <span className="text-[2rem] mr-2">menit</span>
              {countdown.seconds}
              <span className="text-[2rem] mr-2">detik</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">{deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
