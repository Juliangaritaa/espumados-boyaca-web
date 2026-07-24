import { HeroSection } from '../components/sections/HeroSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';
import { Footer } from '../components/sections/Footer';
import { LocationSection } from '../components/sections/LocationSection';
import { useSettings } from "@/hooks/settings.hook";

export default function Home() {

    const { settings } = useSettings();
    if (!settings) return null;

    return (
        <>
            <HeroSection settings={settings} />
            <BenefitsSection />
            <CategoriesSection />
            <LocationSection />
            <ProcessSection />
            <CTASection settings={settings} />
            <Footer settings={settings} />
        </>
    );
}