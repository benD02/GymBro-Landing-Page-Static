import { Footer } from "./footer";
import { Header } from "./header";
import { Landing } from "./landing";
import { PageFooter } from "./pageFooter";

type Props = {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center w-full" style={{ backgroundImage: "url('/GymBro-Landing-Page-Static/background.png')" }}>
            <Header />
                {children}
            </main>
    
            <Footer />
            <br/>
            <Landing />
            <PageFooter />
        </div>
    );
};

export default MarketingLayout;
