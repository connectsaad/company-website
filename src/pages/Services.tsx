
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Shield, Cloud, BarChart3, Globe, Cpu, Users, ExternalLink, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-company-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-in">
            Comprehensive technology solutions designed to drive innovation and growth for your business.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title animate-slide-from-left">What We Offer</h2>
            <p className="section-subtitle animate-slide-from-right">
              Our range of services is designed to address all aspects of your technology needs, from strategy to implementation and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {/* Service 1 */}
            <Card className="card-shadow hover-scale" id="consulting">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Globe className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic guidance to help you leverage technology for business growth and operational efficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Technology roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Digital transformation strategy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>IT infrastructure assessment</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    Request a Consultation <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=Consulting+Tools">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="card-shadow hover-scale" id="development">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Code className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Software Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom software solutions tailored to your specific business needs and objectives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Custom application development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Web and mobile solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>API integration services</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    Discuss Your Project <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=Enterprise+Software">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="card-shadow hover-scale" id="cloud">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Cloud className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Scalable and secure cloud services to modernize your infrastructure and enhance flexibility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Cloud migration strategy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Infrastructure as a Service (IaaS)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Software as a Service (SaaS)</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    Explore Solutions <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=Cloud+Platforms">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 4 */}
            <Card className="card-shadow hover-scale" id="analytics">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <BarChart3 className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Transform your data into actionable insights to drive informed decision-making.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Business intelligence solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Data visualization tools</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Predictive analytics</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    Get Started <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=Data+Analytics">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 5 */}
            <Card className="card-shadow hover-scale" id="security">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Shield className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security solutions to protect your business from evolving threats.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Security assessment and auditing</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Threat detection and response</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Compliance management</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    Security Assessment <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=Security+Solutions">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 6 */}
            <Card className="card-shadow hover-scale" id="ai">
              <CardContent className="p-6">
                <div className="rounded-full bg-company-primary/10 p-3 w-14 h-14 flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Cpu className="text-company-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI solutions to automate processes and unlock new opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>AI solution development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Natural language processing</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Link to="/contact-us" className="text-company-primary inline-flex items-center font-medium link-underline">
                    AI Consultation <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/products?category=AI+Tools">
                    <Button variant="outline" size="sm" className="text-xs">
                      Related Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title animate-slide-from-left">Our Service Process</h2>
            <p className="section-subtitle animate-slide-from-right">
              We follow a systematic approach to ensure successful delivery of our services.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
              {/* Step 1 */}
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We thoroughly analyze your requirements and business objectives.
                </p>
                <ul className="mt-3 text-sm text-gray-500 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Requirements gathering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Business analysis</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 2 */}
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-gray-600">
                  We develop a tailored strategy and solution architecture.
                </p>
                <ul className="mt-3 text-sm text-gray-500 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Solution design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Technology selection</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 3 */}
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our experts deliver and implement the solution.
                </p>
                <ul className="mt-3 text-sm text-gray-500 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Development & testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Deployment</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 4 */}
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support and optimization.
                </p>
                <ul className="mt-3 text-sm text-gray-500 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-1 mt-0.5 text-company-secondary" />
                    <span>Continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/case-studies">
                <Button className="bg-company-primary hover:bg-company-primary/90">
                  See Our Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-slide-from-left">Industry Solutions</h2>
            <p className="section-subtitle animate-slide-from-right">
              We offer specialized solutions tailored to the unique needs of different industries.
            </p>
          </div>
          
          <Tabs defaultValue="healthcare" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="healthcare" className="bg-white rounded-lg shadow-lg p-6 animate-zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-company-primary mb-4">Healthcare Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Our healthcare solutions help providers improve patient care, streamline operations, and ensure regulatory compliance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Electronic health record systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Telemedicine platforms</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Healthcare data analytics</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>HIPAA compliance solutions</span>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Link to="/case-studies#healthcare">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        Healthcare Case Studies
                      </Button>
                    </Link>
                    <Link to="/products?category=Healthcare">
                      <Button variant="outline">
                        Related Products
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=80" 
                    alt="Healthcare Technology" 
                    className="rounded-lg shadow-md hover-scale"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="finance" className="bg-white rounded-lg shadow-lg p-6 animate-zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-company-primary mb-4">Finance Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Our financial technology solutions help institutions enhance security, improve customer experience, and optimize operations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Digital banking platforms</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Fraud detection systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Compliance and risk management</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Financial data analytics</span>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Link to="/case-studies#finance">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        Finance Case Studies
                      </Button>
                    </Link>
                    <Link to="/products?category=Finance">
                      <Button variant="outline">
                        Related Products
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1565514020179-026b92b2d7c4?w=500&auto=format&fit=crop&q=80" 
                    alt="Finance Technology" 
                    className="rounded-lg shadow-md hover-scale"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="retail" className="bg-white rounded-lg shadow-lg p-6 animate-zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-company-primary mb-4">Retail Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Our retail technology solutions help businesses enhance customer experience, streamline inventory, and increase sales.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>E-commerce platforms</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Inventory management systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Customer analytics and personalization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Point of sale (POS) systems</span>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Link to="/case-studies#retail">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        Retail Case Studies
                      </Button>
                    </Link>
                    <Link to="/products?category=Retail">
                      <Button variant="outline">
                        Related Products
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&auto=format&fit=crop&q=80" 
                    alt="Retail Technology" 
                    className="rounded-lg shadow-md hover-scale"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manufacturing" className="bg-white rounded-lg shadow-lg p-6 animate-zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-company-primary mb-4">Manufacturing Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Our manufacturing technology solutions help businesses optimize production, improve quality control, and enhance efficiency.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Industrial IoT solutions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Supply chain management</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Predictive maintenance systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                      <span>Quality control automation</span>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Link to="/case-studies#manufacturing">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        Manufacturing Case Studies
                      </Button>
                    </Link>
                    <Link to="/products?category=Manufacturing">
                      <Button variant="outline">
                        Related Products
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1589455702440-81667a47077f?w=500&auto=format&fit=crop&q=80" 
                    alt="Manufacturing Technology" 
                    className="rounded-lg shadow-md hover-scale"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title animate-slide-from-left">Client Success Stories</h2>
          <p className="section-subtitle animate-slide-from-right">
            See how our services have helped businesses achieve their goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 stagger-children">
            {/* Testimonial 1 */}
            <Card className="card-shadow text-left hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-primary font-bold">MB</span>
                  </div>
                  <div>
                    <h4 className="font-bold">MediBridge</h4>
                    <p className="text-sm text-gray-600">Healthcare Provider</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The EHR system implemented by CompanyName has transformed our patient care process, improving efficiency and reducing errors by 45%."
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/case-studies#healthcare" className="text-company-primary inline-flex items-center hover:underline">
                    Read Case Study <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/services#consulting">
                    <Button variant="outline" size="sm">
                      Related Service
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="card-shadow text-left hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-primary font-bold">FC</span>
                  </div>
                  <div>
                    <h4 className="font-bold">FinConnect</h4>
                    <p className="text-sm text-gray-600">Financial Services</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "CompanyName's cybersecurity solutions have strengthened our defenses, helping us achieve regulatory compliance and protect sensitive customer data."
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/case-studies#finance" className="text-company-primary inline-flex items-center hover:underline">
                    Read Case Study <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/services#security">
                    <Button variant="outline" size="sm">
                      Related Service
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="card-shadow text-left hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-company-primary font-bold">RT</span>
                  </div>
                  <div>
                    <h4 className="font-bold">RetailTech</h4>
                    <p className="text-sm text-gray-600">E-commerce Company</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The cloud migration and data analytics platform developed by CompanyName has significantly improved our decision-making and driven a 30% increase in sales."
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/case-studies#retail" className="text-company-primary inline-flex items-center hover:underline">
                    Read Case Study <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <Link to="/services#cloud">
                    <Button variant="outline" size="sm">
                      Related Service
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Link to="/case-studies">
              <Button size="lg" className="bg-company-secondary hover:bg-company-secondary/90">
                View All Case Studies <ExternalLink size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-in">
            Contact us today to discuss how our services can address your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100 animate-pulse-subtle">
                <Phone className="mr-2 h-5 w-5" /> Request a Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
