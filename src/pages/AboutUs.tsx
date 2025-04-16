
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Award, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-company-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-in">
            We're a team of passionate experts dedicated to helping businesses thrive through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-company-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, CompanyName began with a simple mission: to help businesses leverage technology for growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small team of dedicated professionals has grown into a leading technology solutions provider serving clients across industries worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Throughout our journey, we've remained committed to our core values of innovation, excellence, and customer satisfaction, guiding every solution we deliver.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80" 
                alt="Our team discussing strategy" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            A look at our milestones and growth through the years.
          </p>
          
          <div className="max-w-4xl mx-auto mt-12">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-right md:pr-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-primary text-white mb-2">
                  <Calendar size={20} />
                </div>
                <h3 className="text-xl font-bold">2010</h3>
              </div>
              <div className="md:w-2/3 md:border-l border-company-primary md:pl-8 text-left">
                <h4 className="text-lg font-bold text-company-primary mb-2">Company Founded</h4>
                <p className="text-gray-600">
                  CompanyName was established with a vision to provide innovative technology solutions to businesses.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-right md:pr-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-primary text-white mb-2">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold">2013</h3>
              </div>
              <div className="md:w-2/3 md:border-l border-company-primary md:pl-8 text-left">
                <h4 className="text-lg font-bold text-company-primary mb-2">Team Expansion</h4>
                <p className="text-gray-600">
                  Growing to 50+ employees and expanding our service offerings to include cloud solutions and cybersecurity.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-right md:pr-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-primary text-white mb-2">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold">2016</h3>
              </div>
              <div className="md:w-2/3 md:border-l border-company-primary md:pl-8 text-left">
                <h4 className="text-lg font-bold text-company-primary mb-2">Industry Recognition</h4>
                <p className="text-gray-600">
                  Received multiple industry awards for our innovative solutions and exceptional client service.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-right md:pr-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-company-primary text-white mb-2">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-bold">2020</h3>
              </div>
              <div className="md:w-2/3 md:border-l border-company-primary md:pl-8 text-left">
                <h4 className="text-lg font-bold text-company-primary mb-2">Global Expansion</h4>
                <p className="text-gray-600">
                  Expanded operations to international markets, serving clients across North America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide our work and relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-company-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-company-primary">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly pursue new ideas and technologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-company-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-company-primary">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring the highest quality in all our deliverables.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-company-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-company-primary">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards, honesty, and transparency.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-company-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-company-primary">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working together—with our team and clients—to achieve exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the experienced professionals leading our company forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-company-secondary font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">
                  With 20+ years of industry experience, John leads our company with a focus on innovation and growth.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80" 
                alt="CTO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-company-secondary font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  Sarah oversees our technical strategy and ensures we stay at the forefront of technology innovation.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" 
                alt="COO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-company-secondary font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Michael ensures our operations run smoothly, enabling us to deliver exceptional service to our clients.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-company-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our values and passion for innovation.
          </p>
          <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100">
            View Careers
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
