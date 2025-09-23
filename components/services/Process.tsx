'use client';

import React from 'react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Process = () => {
  const steps = [
    { step: '01', title: 'İlk Görüşme', description: 'Durum analizi ve hukuki değerlendirme' },
    { step: '02', title: 'Strateji Belirleme', description: 'En uygun hukuki yol haritası' },
    { step: '03', title: 'Süreç Yönetimi', description: 'Düzenli bilgilendirme ve takip' },
    { step: '04', title: 'Sonuç', description: 'Başarılı sonuç ve müvekkil memnuniyeti' }
  ];

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          className="container-max"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {/* BAŞLIK */}
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Çalışma Sürecim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Müvekkillerimle şeffaf ve düzenli bir süreç izleyerek en iyi sonuçları elde ederim.
            </p>
          </motion.div>

          {/* ADIMLAR */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((process, index) => (
              <motion.div key={index} className="text-center" variants={fadeUp}>
                {/* NUMARA VE ÇİZGİ */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-[calc(100%+2rem)] h-0.5 bg-accent/30 -translate-y-1/2 -z-10" />
                  )}
                </div>

                {/* METİN */}
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;
