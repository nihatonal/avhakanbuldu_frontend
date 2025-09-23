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
      year: '1998-2003',
      title: 'Hukuk Lisans Eğitimi',
      institution: 'Ankara Üniversitesi Hukuk Fakültesi',
      description: 'Hukuk Fakültesi\'nden onur derecesiyle mezun oldum.'
    },
    {
      year: '2004-2006',
      title: 'Yüksek Lisans',
      institution: 'Ankara Üniversitesi Sosyal Bilimler Enstitüsü',
      description: 'Ceza Hukuku alanında yüksek lisans derecesi aldım.'
    },
    {
      year: '2005',
      title: 'Avukatlık Ruhsatı',
      institution: 'Ankara Barosu',
      description: 'Ankara Barosu\'na kayıt olarak avukatlık mesleğine başladım.'
    }
  ];

  const experience = [
    {
      period: '2005-2010',
      title: 'Başlangıç Dönemi',
      description: 'Çeşitli hukuki alanlarda deneyim kazandım ve müvekkil portföyümü genişlettim.'
    },
    {
      period: '2010-2015',
      title: 'Uzmanlaşma',
      description: 'Ceza hukuku, medeni hukuk ve tazminat hukuku alanlarında uzmanlaştım.'
    },
    {
      period: '2015-2024',
      title: 'Olgunluk Dönemi',
      description: 'Kompleks davaları başarıyla sonuçlandırdım ve sektörde tanınan bir isim oldum.'
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
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          {edu.year}
                        </div>
                        <div>
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
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          {exp.period}
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-2">{exp.title}</h3>
                          <p className="text-muted-foreground text-sm">{exp.description}</p>
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
