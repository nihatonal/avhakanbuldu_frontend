'use client';

import React from 'react';
import { Card } from '../ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Education = () => {
  const education = [
    {
      year: '2017',
      title: 'Hukuk Lisans Eğitimi',
      institution: 'Dokuz Eylül Üniversitesi Hukuk Fakültesi',
      description: 'Hukuk fakültesinden mezun oldum.'
    },
    {
      year: '2022',
      title: 'Avukatlık Kariyeri Başlangıcı',
      institution: 'Ankara Barosu',
      description: 'Hukuk işleri şube müdürlüğü görevine başlayarak dava takibi, mevzuat geliştirme, disiplin hukuku ve işçi-işveren uyuşmazlıkları alanlarında çalıştım.'
    }
  ];

  const experience = [
    {
      period: '2022 - Günümüz',
      title: 'Hukuk İşleri Şube Müdürlüğü',
      description: 'Dava takibi, mevzuat geliştirme, disiplin hukuku ve işçi-işveren uyuşmazlıkları alanlarında çalışıyorum.'
    },
    {
      period: 'Sertifikalar ve Eğitimler',
      title: 'Profesyonel Gelişim',
      certificates: [
        "Ticaret Hukuku Arabuluculuk Sertifikası",
        "Tüketici Hukuku Arabuluculuk Sertifikası",
        "İş Hukuku Arabuluculuk Sertifikası",
        "Bilirkişilik Temel Eğitimi (Adalet Bakanlığı yetkili kurum)"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Eğitim */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-accent mr-4" />
                <h2 className="font-display text-3xl font-bold text-primary">Eğitim Hayatım</h2>
              </motion.div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div key={index} variants={fadeUp}>
                    <Card className="card-elegant">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-0  items-start space-x-4">
                        <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          {edu.year}
                        </div>
                        <div className='pl-2 md:pl-0'>
                          <h3 className="font-semibold text-primary mb-1">{edu.title}</h3>
                          <p className="text-accent font-medium mb-2">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm">{edu.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Deneyim */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-accent mr-4" />
                <h2 className="font-display text-3xl font-bold text-primary">Mesleki Deneyim</h2>
              </motion.div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div key={index} variants={fadeUp}>
                    <Card className="card-elegant">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start space-x-4">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          {exp.period}
                        </div>
                        <div className='pl-2 md:pl-0'>
                          <h3 className="font-semibold text-primary mb-2">{exp.title}</h3>
                          {exp.description && <p className="text-muted-foreground text-sm">{exp.description}</p>}

                          {/* Eğer certificates varsa liste olarak render et */}
                          {exp.certificates && (
                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                              {exp.certificates.map((cert, idx) => (
                                <li key={idx}>{cert}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
