
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Users, Shield, BarChart3, Globe } from 'lucide-react';

const HomePage = () => {
  // Refs for each section
  const servicesRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  
  // Function to check if element is in viewport
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };
  
  // Add animations based on scroll position
  useEffect(() => {
    const sections = [servicesRef, whyUsRef, testimonialsRef];
    
    const handleScroll = () => {
      sections.forEach(sectionRef => {
        if (sectionRef.current && isInViewport(sectionRef.current)) {
          sectionRef.current.classList.add('animate-fade-in');
          sectionRef.current.style.opacity = '1';
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-company-primary to-company-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-from-left">
              Innovative Solutions for Your Business
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-slide-from-right">
              We help businesses transform through technology, innovation, and strategic thinking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact-us">
                <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100 animate-zoom-in hover-lift">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 animate-zoom-in hover-lift" style={{ animationDelay: '0.2s' }}>
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50 opacity-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of services to help your business succeed in the digital era.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 stagger-children">
            {/* Service 1 */}
            <Card className="card-shadow hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                  <Globe className="text-company-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-primary">IT Consulting</h3>
                <p className="text-company-muted mb-4">
                  Strategic guidance to leverage technology for business growth and efficiency.
                </p>
                <Link to="/services" className="text-company-secondary inline-flex items-center hover:underline link-underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="card-shadow hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                  <Shield className="text-company-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-primary">Cybersecurity</h3>
                <p className="text-company-muted mb-4">
                  Protect your business with enterprise-grade security solutions and services.
                </p>
                <Link to="/services" className="text-company-secondary inline-flex items-center hover:underline link-underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="card-shadow hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                  <BarChart3 className="text-company-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-primary">Data Analytics</h3>
                <p className="text-company-muted mb-4">
                  Turn your data into actionable insights with advanced analytics solutions.
                </p>
                <Link to="/services" className="text-company-secondary inline-flex items-center hover:underline link-underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 4 */}
            <Card className="card-shadow hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                  <Users className="text-company-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-primary">Cloud Solutions</h3>
                <p className="text-company-muted mb-4">
                  Scalable and secure cloud infrastructure designed for your business needs.
                </p>
                <Link to="/services" className="text-company-secondary inline-flex items-center hover:underline link-underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <Link to="/services">
              <Button className="bg-company-primary hover:bg-company-primary/90 animate-float hover-lift">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 opacity-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-company-primary mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-company-muted mb-8">
                With over 10 years of industry experience, we bring expertise, innovation, and commitment to every project.
              </p>
              
              <div className="space-y-4 stagger-children">
                <div className="flex items-start hover-lift">
                  <CheckCircle2 className="text-company-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-company-dark">Experienced Team</h3>
                    <p className="text-company-muted">Our experts bring decades of combined industry experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift">
                  <CheckCircle2 className="text-company-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-company-dark">Tailored Solutions</h3>
                    <p className="text-company-muted">We create custom solutions designed for your specific needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift">
                  <CheckCircle2 className="text-company-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-company-dark">Cutting-Edge Technology</h3>
                    <p className="text-company-muted">We leverage the latest technologies to deliver superior results.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift">
                  <CheckCircle2 className="text-company-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-company-dark">Dedicated Support</h3>
                    <p className="text-company-muted">We provide ongoing support to ensure your continued success.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about-us">
                  <Button className="bg-company-primary hover:bg-company-primary/90 hover-lift">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl animate-slide-from-right">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80" 
                alt="Team working together" 
                className="w-full h-auto object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50 opacity-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from some of our satisfied clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 stagger-children">
            {/* Testimonial 1 */}
            <Card className="card-shadow text-left hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-company-secondary/20 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-secondary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-company-primary">John Doe</h4>
                    <p className="text-sm text-company-muted">CEO, Tech Innovators</p>
                  </div>
                </div>
                <p className="text-company-muted italic">
                  "Working with CompanyName transformed our business. Their expertise in cloud solutions helped us scale efficiently and securely."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="card-shadow text-left hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-company-secondary/20 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-secondary font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-company-primary">Jane Smith</h4>
                    <p className="text-sm text-company-muted">CTO, Global Enterprises</p>
                  </div>
                </div>
                <p className="text-company-muted italic">
                  "The cybersecurity solutions provided by CompanyName have been instrumental in safeguarding our sensitive data and maintaining customer trust."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="card-shadow text-left hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-company-secondary/20 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-secondary font-bold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-company-primary">Robert Johnson</h4>
                    <p className="text-sm text-company-muted">Director, Digital Solutions</p>
                  </div>
                </div>
                <p className="text-company-muted italic">
                  "The data analytics platform implemented by CompanyName has given us valuable insights, helping us make data-driven decisions with confidence."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <Link to="/case-studies">
              <Button className="bg-company-primary hover:bg-company-primary/90 hover-lift animate-float">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-company-primary to-company-dark text-white animate-pulse-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Contact us today to discover how our solutions can help you achieve your business goals.
          </p>
          <Link to="/contact-us">
            <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100 animate-zoom-in hover-lift" style={{ animationDelay: '0.4s' }}>
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
