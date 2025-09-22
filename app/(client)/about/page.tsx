import HeroSection from '@/components/about/HeroSection';
import Achievements from '@/components/about/Achievements';
import Education from '@/components/about/Education';
import Princliples from '@/components/about/Princliples';
import Cta from '@/components/about/Cta';

const AboutPage = () => {

    return (
        <div className="overflow-hidden bg-background" >

            {/* Hero Section */}
            <HeroSection />
            {/* Achievements */}
            <Achievements />

            {/* Education & Career */}
            <Education />

            {/* Principles */}
            <Princliples />
            {/* CTA Section */}
            <Cta />
        </div>
    );
};

export default AboutPage;