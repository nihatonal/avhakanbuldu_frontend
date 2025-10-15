'use client';

import React from 'react';
import { Card } from '../ui/card';
import { Award, Scale, Users, Trophy } from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '500+ Bilgilendirme ve Yönlendirme',
      description: 'Farklı hukuk alanlarında paylaşılan doğru bilgiler ve süreçlere dair rehberlik.'
    },
    {
      icon: Users,
      title: '1000+ Kişiye Destek',
      description: 'Bireysel ve kurumsal düzeyde hukuki süreçleri anlamaya yardımcı bilgilendirmeler.'
    },
    {
      icon: Award,
      title: 'Güven ve Etik Odaklı Yaklaşım',
      description: 'Tarafsız, şeffaf ve güven temelli bir bilgilendirme anlayışıyla sürdürülen çalışmalar.'
    },
    {
      icon: Scale,
      title: '7+ Yıllık Deneyim',
      description: 'Hukuk alanında edinilmiş bilgi birikimiyle destekleyici ve rehberlik odaklı yaklaşım.'
    }
  ];



  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="card-elegant text-center">
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Achievements;
