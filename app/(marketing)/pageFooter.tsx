import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const PageFooter = () => {
    return (
        <footer className="hidden lg:block w-full border-t-2 border-slate-200 p-4 bg-gray-100">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="text-lg font-bold">SpartaSoft</div>
                <div className="text-sm text-gray-500">&copy; 2024 GymBro. All rights reserved.</div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
