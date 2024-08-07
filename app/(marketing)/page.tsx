/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative flex flex-1 w-full items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/GymBro-Landing-Page-Static/gym.png')", filter: "blur(2px)" }}></div>
      <div className="relative max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 animate-fadeIn">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0 animate-slideIn">
          <Image src="/GymBro-Landing-Page-Static/logo.svg" fill alt="Hero" />
        </div>
        <div className="flex flex-col items-center gap-y-8 bg-white bg-opacity-80 p-6 rounded-md shadow-md animate-fadeIn">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center animate-fadeIn">
            Gamify your fitness journey with GymBro!
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full animate-fadeIn">
            <Button size="lg" variant="primary" className="w-full animate-fadeIn" onClick={openModal}>
              Get Started
            </Button>
            <Button size="lg" variant="primaryOutline" className="w-full animate-fadeIn" onClick={openModal}>
              I already have an account
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 mb-4">We're working hard to bring you this feature. Stay tuned!</p>
            <Button size="lg" variant="danger" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
