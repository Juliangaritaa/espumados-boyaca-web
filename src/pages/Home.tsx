import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';
import { Footer } from '../components/sections/Footer';
import { LocationSection } from '../components/sections/LocationSection';

export default function Home() {
    return (
        <>
            <Navbar />

            <HeroSection />
            <BenefitsSection />
            <CategoriesSection />
            <LocationSection />
            <ProcessSection />
            <CTASection />
            <Footer />
        </>
    );
}