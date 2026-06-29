import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Monitor, Shield, Network, Cpu, Code, Database, Cloud, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Computer Education',
      icon: Monitor,
      description: 'Professional training in basic and advanced computing, software engineering, and data management.',
      features: ['Certification Courses', 'Corporate Training', 'Weekend Batches', 'E-learning Access']
    },
    {
      title: 'IT Consulting',
      icon: Cpu,
      description: 'Expert advice to help businesses align their technology strategy with their business goals.',
      features: ['Strategic Planning', 'Tech Audits', 'Digital Transformation', 'Workflow Optimization']
    },
    {
      title: 'Networking & Infrastructure',
      icon: Network,
      description: 'Design and implementation of robust local and wide area networks for organizations.',
      features: ['LAN/WAN Setup', 'Wireless Solutions', 'Network Monitoring', 'Fiber Optic Cabling']
    },
    {
      title: 'Cybersecurity Solutions',
      icon: Shield,
      description: 'Comprehensive security services to protect your digital infrastructure from threats.',
      features: ['Penetration Testing', 'Firewall Management', 'Endpoint Security', 'Security Awareness']
    },
    {
      title: 'Software Development',
      icon: Code,
      description: 'Custom web and mobile applications tailored to your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'ERP Systems', 'API Integration']
    },
    {
      title: 'Database Management',
      icon: Database,
      description: 'Design, implementation, and maintenance of scalable database systems.',
      features: ['SQL/NoSQL Setup', 'Data Migration', 'Backup & Recovery', 'Performance Tuning']
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Helping businesses transition to and manage their operations in the cloud.',
      features: ['Cloud Migration', 'Azure/AWS Setup', 'Managed Hosting', 'Saas Integration']
    },
    {
      title: 'Hardware Maintenance',
      icon: Smartphone,
      description: 'Professional repair and routine maintenance of computers and peripheral devices.',
      features: ['Laptop Repairs', 'Server Maintenance', 'Hardware Upgrades', 'Annual Contracts']
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Providing cutting-edge IT solutions and world-class education to drive your success in the digital era.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="h-full hover:shadow-lg transition-all border-none shadow-sm bg-secondary/20">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm flex items-center text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Partners Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-5xl font-extrabold text-primary mb-2">99%</h4>
              <p className="text-muted-foreground font-medium uppercase tracking-wider">Service Uptime</p>
            </div>
            <div>
              <h4 className="text-5xl font-extrabold text-primary mb-2">24/7</h4>
              <p className="text-muted-foreground font-medium uppercase tracking-wider">Technical Support</p>
            </div>
            <div>
              <h4 className="text-5xl font-extrabold text-primary mb-2">100+</h4>
              <p className="text-muted-foreground font-medium uppercase tracking-wider">Corporate Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
