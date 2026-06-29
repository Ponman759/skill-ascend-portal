import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, Award, Cpu, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ponman Global</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ponman Global Computers Limited (RC:7583063) is a premier indigenous IT firm dedicated to bridge the digital divide through education and service excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2008, Ponman Global Computers Limited began with a simple yet powerful vision: to make quality computer education and IT services accessible to every Nigerian.
                </p>
                <p>
                  Over the years, we have evolved from a small training center into a multi-faceted IT solutions provider, catering to government agencies, educational institutions, and private enterprises.
                </p>
                <p>
                  Our commitment to excellence and innovation has earned us the trust of thousands of individuals who have passed through our academy and hundreds of corporate clients who rely on our expertise.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-video">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/learning-portal-hero-af5fc5ab-1782705902060.webp"
                alt="Our Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To be the leading catalyst for digital transformation in Africa, empowering a generation of tech-savvy individuals and creating a future where technology is a tool for progress for everyone.
              </p>
            </div>
            <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To provide world-class computer education, innovative IT solutions, and reliable technical support that enhances productivity, fosters innovation, and drives economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "We maintain the highest standards of honesty and transparency." },
              { icon: Award, title: "Excellence", desc: "We strive for the best in every project and training session." },
              { icon: Cpu, title: "Innovation", desc: "Always looking for better ways to solve complex problems." },
              { icon: CheckCircle2, title: "Accountability", desc: "We take full responsibility for our services and outcomes." }
            ].map((value, idx) => (
              <Card key={idx} className="text-center hover:border-primary transition-colors border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
