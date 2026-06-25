import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';
import { Footer } from '../components/sections/Footer';

export default function Home() {
    return (
        <>
            <Navbar />

            <HeroSection />
            <BenefitsSection />
            <CategoriesSection />

            <ProcessSection />
            <CTASection />
            <Footer />
        </>
    );
}