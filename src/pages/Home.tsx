import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Shield, Cpu, Network, ArrowRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/corporate-hero-0992a191-1782705884109.webp"
            alt="Corporate Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Master In-Demand Tech Skills with Our <span className="text-primary">New Diploma Courses</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Elevate your career with Ponman Global's intensive 6-month diploma programs in Cybersecurity, Full-Stack Engineering, AI, and Cloud Computing. Gain industry-recognized certification and market-ready expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-white/10 hover:bg-white/20 border-white/20" asChild>
                <Link to="/portal">Learning Portal</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wide opacity-80">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10k+</p>
              <p className="text-sm uppercase tracking-wide opacity-80">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm uppercase tracking-wide opacity-80">IT Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm uppercase tracking-wide opacity-80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive range of technology services designed to help you succeed in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-none bg-secondary/30">
              <CardHeader>
                <Monitor className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Computer Education</CardTitle>
                <CardDescription>Professional training in software engineering, data science, and IT management.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0 group" asChild>
                  <Link to="/portal" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-none bg-secondary/30">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>Robust security audits and implementation to protect your digital assets.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0 group" asChild>
                  <Link to="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-none bg-secondary/30">
              <CardHeader>
                <Network className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enterprise Networking</CardTitle>
                <CardDescription>Scalable network infrastructure and cloud solutions for businesses of all sizes.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0 group" asChild>
                  <Link to="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/learning-portal-hero-af5fc5ab-1782705902060.webp"
            alt="CTA BG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of students already learning on our portal. Get certified and stay ahead.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
            <Link to="/register">Create Free Account</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Ponman Global?</h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Instructors", desc: "Learn from industry veterans with years of practical experience." },
                  { title: "Hands-on Learning", desc: "Real-world projects and laboratory sessions for practical skills." },
                  { title: "Recognized Certification", desc: "Gain certifications that are respected by top employers." },
                  { title: "Lifetime Access", desc: "Enroll once and access course materials forever, including updates." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/services-bg-bc28ca37-1782705883544.webp"
                  alt="Feature Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border md:block hidden">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Join over</p>
                    <p className="text-xl font-bold">10,000 Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
