"use client"
import { useToast } from '@/hooks/use-toast'
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import {
    Send,
    Shield
} from 'lucide-react';
import { Button } from '../ui/button';

const ContactForm = ({ legalAreas }) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        legalArea: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Eksik Bilgi",
                description: "Lütfen zorunlu alanları doldurun.",
                variant: "destructive"
            });
            return;
        }

        // Simulate form submission
        toast({
            title: "Mesajınız Gönderildi",
            description: "En kısa sürede size dönüş yapacağım. Teşekkür ederim.",
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            legalArea: ''
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-primary mb-4">
                    Hukuki Danışmanlık Formu
                </h2>
                <p className="text-muted-foreground">
                    Durumunuzu detaylı olarak açıklayın, size en kısa sürede dönüş yapacağım.
                    Tüm bilgileriniz gizli tutulur.
                </p>
            </div>

            <Card className="card-elegant">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Ad Soyad *</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Adınız ve soyadınız"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">E-posta *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="ornek@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Telefon</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+90 5XX XXX XX XX"
                            />
                        </div>
                        <div>
                            <Label htmlFor="legalArea">Hukuki Alan</Label>
                            <select
                                id="legalArea"
                                name="legalArea"
                                value={formData.legalArea}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                            >
                                <option value="">Seçiniz</option>
                                {legalAreas.map((area) => (
                                    <option key={area} value={area}>{area}</option>
                                ))}
                                <option value={"Diğer"}>Diğer</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="subject">Konu</Label>
                        <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Danışmanlık konusu"
                        />
                    </div>

                    <div>
                        <Label htmlFor="message">Mesajınız *</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Hukuki sorununuzu detaylı olarak açıklayın..."
                            rows={6}
                            required
                        />
                    </div>

                    <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                        <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p>
                            Gönderdiğiniz tüm bilgiler avukat-müvekkil gizliliği kapsamında korunur.
                            Kişisel verileriniz güvenle saklanır.
                        </p>
                    </div>

                    <Button type="submit" size="lg" className="btn-primary w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Mesajı Gönder
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default ContactForm