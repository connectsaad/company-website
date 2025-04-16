
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-company-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-in">
            Have questions or need assistance? Reach out to our team and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-company-dark mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Contact us using the information below or fill out the form to send us a message.
              </p>
              
              <div className="space-y-6">
                {/* Address */}
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="rounded-full bg-company-primary/10 p-3 mr-4">
                      <MapPin className="text-company-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Business Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Phone */}
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="rounded-full bg-company-primary/10 p-3 mr-4">
                      <Phone className="text-company-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Email */}
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="rounded-full bg-company-primary/10 p-3 mr-4">
                      <Mail className="text-company-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        info@companyname.com<br />
                        support@companyname.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Hours */}
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="rounded-full bg-company-primary/10 p-3 mr-4">
                      <Clock className="text-company-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-company-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-company-primary hover:bg-company-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.14448804179686!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1613923287168!5m2!1sen!2suk" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services and solutions.
          </p>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">What industries do you serve?</h3>
              <p className="text-gray-600">
                We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are adaptable to meet the unique needs of each sector.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">How quickly can you implement your solutions?</h3>
              <p className="text-gray-600">
                Implementation timelines vary based on project complexity and scope. We work with clients to establish realistic timelines and ensure smooth transitions with minimal disruption.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer ongoing support after implementation?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive support and maintenance services to ensure your systems continue to perform optimally. Our support packages can be tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">How do you ensure data security in your solutions?</h3>
              <p className="text-gray-600">
                Security is a top priority in all our solutions. We implement industry-leading security protocols, regular audits, and compliance with relevant regulations to ensure your data remains protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
