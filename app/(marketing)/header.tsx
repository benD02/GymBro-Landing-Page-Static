/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <header className="h-12 w-full border-b-2 border-blue-200 px-4 bg-gray-800 opacity-41">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="flex items-center gap-x-3">
                <Image src="/GymBro-Landing-Page-Static/slogo.svg" height={32} width={32} alt="Mascot" />
                <h1 className="text-lg font-extrabold text-slate-100 tracking-wide">
                        GymBro
                    </h1>
                </div>
                <Button size="sm" variant="ghost" onClick={openModal}>
                    Login
                </Button>
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
        </header>
        
    );
};
