
import HeroSection from '@/components/services/HeroSection';
import PracticeAreas from '@/components/services/PracticeAreas';
import WhyChooseMe from '@/components/services/WhyChooseMe';
import Process from '@/components/services/Process';
import Cta from '@/components/services/Cta';

const Services = () => {

    return (
        <div className="overflow-hidden bg-background">
            {/* Hero Section */}
            <HeroSection />

            {/* Practice Areas Grid */}
            <PracticeAreas />

            {/* Why Choose Us */}
            <WhyChooseMe />

            {/* Process Section */}
            <Process />

            {/* CTA Section */}
            <Cta />
        </div>
    );
};

export default Services;