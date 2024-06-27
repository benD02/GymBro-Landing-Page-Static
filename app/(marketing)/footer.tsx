import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-evenly h-full">
                <h2 className="text-xl lg:text-2xl font-bold text-neutral-600 max-w-[480px] text-center">Goals</h2>
                <div className="flex items-center justify-evenly w-full">
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/hero.svg" alt="hero" height={32} width={40} className="mr-4 rounded-md" />
                        Zero to Hero
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/bulk.svg" alt="bulk" height={32} width={40} className="mr-4 rounded-md" />
                        Bulk Muscle
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/muscle.svg" alt="muscle" height={32} width={40} className="mr-4 rounded-md" />
                        Improve Strength
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/run.svg" alt="run" height={32} width={40} className="mr-4 rounded-md" />
                        Cardio
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/fit.svg" alt="fit" height={32} width={40} className="mr-4 rounded-md" />
                        Lose weight
                    </Button>
                </div>
            </div>
        </footer>
    );
};
