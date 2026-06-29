import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">Ponman Global Computers</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Empowering individuals and businesses through innovative IT solutions and comprehensive computer education since 2008.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">IT Consulting</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Computer Repairs</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Software Development</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Networking Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/portal" className="text-sm text-muted-foreground hover:text-primary">Learning Portal</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-sm text-muted-foreground">Opposite Seventh Day Adventist Church, Guzape District, FCT-Abuja</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-sm text-muted-foreground">+2347033184600</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-sm text-muted-foreground">ponmangloballtd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ponman Global Computers Limited || RC:7583063. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
