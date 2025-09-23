import Info from '@/components/contact/Info';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/Container';
import ProcessSteps from '@/components/contact/ProcessSteps';
import Map from '@/components/contact/Map';
import Cta from '@/components/contact/Cta';
import {
    getBlogCategories
} from "@/sanity/queries";
import HeroSection from '@/components/contact/HeroSection';
const ContactPage = async () => {

    const categories = await getBlogCategories();

    return (
        <div className="overflow-hidden bg-background">
            {/* Hero Section */}
            <HeroSection />

            {/* Contact Info Cards */}
            <Info />

            {/* Contact Form and Process */}
            <section className="section-padding">
                <Container >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <ContactForm legalAreas={categories.map((item) => item.title)} />

                        {/* Process Steps */}
                        <ProcessSteps />
                    </div>
                </Container>
            </section>

            {/* Map and Location (Placeholder) */}
            <Map />

            {/* Emergency Contact */}
            <Cta />

        </div>
    );
};

export default ContactPage;