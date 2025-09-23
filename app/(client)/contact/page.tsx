import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Phone,
    Mail
} from 'lucide-react';
import Info from '@/components/contact/Info';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/Container';
import ProcessSteps from '@/components/contact/ProcessSteps';
import Map from '@/components/contact/Map';
import Cta from '@/components/contact/Cta';
import {
    getBlogCategories
} from "@/sanity/queries";
const ContactPage = async () => {

    const categories = await getBlogCategories();

    return (
        <div className="overflow-hidden bg-background">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
                <div className="container-max text-center">
                    <Badge className="mb-4 bg-accent text-accent-foreground">Hemen İletişime Geçin</Badge>
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                        İletişim
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
                        Hukuki danışmanlık ihtiyacınız için benimle iletişime geçin. İlk danışmanlık görüşmesi ücretsizdir.
                        Uzman avukat desteği için hemen arayın veya form doldurun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                            <a href="tel:+903121234567">
                                <Phone className="mr-2 h-5 w-5" />
                                Hemen Arayın
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            <a href="mailto:info@avmehmtozkan.com">
                                <Mail className="mr-2 h-5 w-5" />
                                E-posta Gönderin
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

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