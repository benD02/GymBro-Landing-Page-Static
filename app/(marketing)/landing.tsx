"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Landing.module.css"; // Import the CSS module
import { Button } from "@/components/ui/button";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

export const Landing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [email, setEmail] = useState("");

    const carouselItems = [
        {
            heading: "Choose a GymBro AI companion!",
            description: "Choose from a variety of AI companions to assist you. Your Gymbro will provide you with tailored feedback and realtime guidance.",
            image: "/GymBro-Landing-Page-Static/aiComp.svg"
        },
        {
            heading: "Gamify your workout",
            description: "Navigate your fitness journey in a fun and motivating way. Commence at a basic level and gradually progress!",
            image: "/GymBro-Landing-Page-Static/gameWorkout.svg"
        },
        {
            heading: "Sustainable fitness progression",
            description: "Minimize the risk of injury with gradual and sustainable advancement. Receive on-the-spot insight from your GymBro!",
            image: "/GymBro-Landing-Page-Static/helper.svg"
        },
        {
            heading: "Compete with friends!",
            description: "Partake in joint workouts with your friends to compete and motivate each other!",
            image: "/GymBro-Landing-Page-Static/compete.svg"
        },
        {
            heading: "Earn and spend Gems!",
            description: "Earn gems throughout your workout to spend on new workout styles and equipment in the GymBro store!",
            image: "/GymBro-Landing-Page-Static/gems.svg"
        },
    ];

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            setIsTransitioning(false);
        }, 1000); // Match the duration of the CSS transition
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 8000); // Auto scroll every 8 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        // Add your email submission logic here
    };

    const [carouselRef, carouselInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [potentialRef, potentialInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="flex flex-col items-center justify-center w-full py-8 bg-white" >
            <div ref={carouselRef} className={`w-full max-w-4xl mx-auto p-4 bg-orange-300 rounded-md shadow-md mb-8 transform transition-transform duration-700 ${carouselInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <div className="flex justify-center mb-4 space-x-2">
                    {carouselItems.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-blue-400'}`}
                            onClick={() => {
                                setIsTransitioning(true);
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setIsTransitioning(false);
                                }, 1000); // Match the duration of the CSS transition
                            }}
                        />
                    ))}
                </div>
                <div className={`flex items-center ${styles.carouselItem} ${isTransitioning ? styles.transition : ''}`}>
                    <div className="w-1/2 p-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-blue-600">{carouselItems[currentIndex].heading}</h1>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700">{carouselItems[currentIndex].description}</p>
                    </div>
                    <div className="w-1/2">
                        <Image src={carouselItems[currentIndex].image} alt="Carousel Image" height={400} width={600} className="rounded-md" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto space-x-4 mb-8">
                <div ref={potentialRef} className={`flex-1 p-6 bg-green-100 rounded-md shadow-md flex flex-col items-center mb-8 lg:mb-0 transform transition-transform duration-700 ${potentialInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <div className="flex items-center mb-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-600">Unleash your potential</h1>
                    </div>
                    <br/>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-center">
                        Discover the power within you with GymBro. Join our community and start your journey towards a healthier, more active lifestyle today!
                    </p>
                    <br/>
                    <br/>
                    <div className="flex space-x-4 ml-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                            <FaInstagram size={60} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                            <FaTwitter size={60} />
                        </a>
                    </div>
                </div>
                <div ref={missionRef} className={`flex-1 p-6 bg-blue-200 rounded-md shadow-md text-center transform transition-transform duration-700 ${missionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600">Our Mission</h1>
                    <div className="border p-4 italic">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            GymBro aims to revolutionize the fitness app industry by captivating users with an exciting and gamified workout experience. We strive to keep fitness journeys motivating and engaging while ensuring realistic fitness goals to minimize the risk of injury and strain. By integrating cutting-edge AI, we provide personalized, on-the-spot advice, guiding users through their fitness journey akin to having a personal trainer!
                        </p>
                    </div>
                </div>
            </div>

            <form ref={formRef} onSubmit={handleEmailSubmit} className={`mt-8 mb-8 flex flex-col items-center bg-purple-200 p-6 rounded-md shadow-md w-full max-w-4xl transform transition-transform duration-700 ${formInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <label htmlFor="email" className="text-2xl md:text-4xl font-bold mb-2 text-blue-600">Keep in the loop!</label>
                <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4">Subscribe for the latest GymBro development updates</p>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-blue-300 rounded-md p-2 mb-4 w-3/4 max-w-md"
                    placeholder="Enter your email"
                    required
                />
                <Button size="lg" variant="danger" className=" max-w-md">
                    Subscribe
                </Button>
            </form>
        </div>
    );
};
