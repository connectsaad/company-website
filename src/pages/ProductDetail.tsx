
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Check, Zap, Calendar, Computer, Shield, Clock, Award, BarChart3, Phone } from 'lucide-react';

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    // For this demo, we'll simulate loading from the product data
    const allProducts = [
      {
        id: 1,
        name: 'SecureGuard Pro',
        category: 'Security Solutions',
        description: 'Advanced cybersecurity solution for enterprise protection against threats.',
        longDescription: 'SecureGuard Pro is our flagship security solution designed for enterprises that demand the highest level of protection against evolving cybersecurity threats. This comprehensive platform combines real-time threat monitoring, automated vulnerability scanning, and compliance reporting to create a robust security environment for your organization.',
        price: '$999',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80',
        features: ['Real-time threat monitoring', 'Automated vulnerability scanning', 'Compliance reporting', 'Multi-factor authentication', 'End-to-end encryption', 'Security analytics dashboard', 'Incident response automation'],
        benefits: ['Reduce security incidents by up to 85%', 'Save 200+ hours per month on manual security tasks', 'Maintain compliance with global security standards', 'Detect and respond to threats in seconds, not days'],
        releaseDate: 'January 2025',
        compatibility: 'Windows, macOS, Linux',
        badge: 'New Release',
        relatedServices: ['security'],
        relatedCaseStudies: ['finance'],
        technicalSpecs: {
          deploymentOptions: 'Cloud, On-premise, Hybrid',
          apiAccess: 'REST API, GraphQL',
          securityCertifications: 'ISO 27001, SOC 2 Type II, HIPAA, PCI DSS',
          scaleCapacity: 'Unlimited endpoints',
          updateFrequency: 'Weekly security updates',
          supportTiers: '24/7 Premium Support included'
        }
      },
      {
        id: 2,
        name: 'CloudSphere',
        category: 'Cloud Platforms',
        description: 'Scalable cloud infrastructure platform for businesses of all sizes.',
        longDescription: 'CloudSphere provides a complete cloud infrastructure solution designed to scale with your business needs. Our platform offers automatic resource scaling, global content delivery, and robust disaster recovery capabilities to ensure your applications and services are always available and performing optimally.',
        price: '$799/month',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
        features: ['Auto-scaling resources', 'Global content delivery', 'Disaster recovery', 'Load balancing', 'Containerization support', 'Serverless computing options', 'Multi-region deployment'],
        benefits: ['Reduce infrastructure costs by 40%', 'Scale instantly to meet demand', 'Achieve 99.99% uptime for critical applications', 'Deploy new services in minutes instead of weeks'],
        releaseDate: 'November 2024',
        compatibility: 'All major platforms',
        badge: 'Best Seller',
        relatedServices: ['cloud'],
        relatedCaseStudies: ['technology'],
        technicalSpecs: {
          deploymentOptions: 'Public cloud, Private cloud, Hybrid',
          apiAccess: 'RESTful APIs, SDKs for major languages',
          securityCertifications: 'SOC 2, ISO 27001, GDPR compliant',
          scaleCapacity: 'Unlimited with auto-scaling',
          updateFrequency: 'Continuous deployment',
          supportTiers: '24/7 Standard Support included'
        }
      },
      {
        id: 3,
        name: 'DataVision Analytics',
        category: 'Data Analytics',
        description: 'Comprehensive data analytics platform for business intelligence.',
        longDescription: 'DataVision Analytics transforms your raw data into actionable business intelligence. Our platform includes interactive dashboards, predictive modeling capabilities, and custom reporting tools that help you understand trends, identify opportunities, and make data-driven decisions with confidence.',
        price: '$599/month',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
        features: ['Interactive dashboards', 'Predictive modeling', 'Custom reporting', 'Data visualization', 'AI-powered insights', 'Real-time analytics', 'Natural language querying'],
        benefits: ['Increase decision accuracy by 65%', 'Reduce time-to-insight by 75%', 'Identify emerging trends before competitors', 'Make data accessible to all stakeholders'],
        releaseDate: 'March 2025',
        compatibility: 'Web-based, API access',
        badge: 'Popular',
        relatedServices: ['analytics'],
        relatedCaseStudies: ['retail', 'healthcare'],
        technicalSpecs: {
          deploymentOptions: 'Cloud, On-premise, Embedded',
          apiAccess: 'Full API coverage, custom integrations',
          securityCertifications: 'SOC 2, HIPAA compliant, GDPR',
          scaleCapacity: 'Handles petabytes of data',
          updateFrequency: 'Monthly feature updates',
          supportTiers: 'Business hours support included, 24/7 available'
        }
      },
      // Add more products with expanded details as needed
    ];

    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === Number(id));
      setProduct(foundProduct || null);
      
      // Get related products (same category, excluding current)
      if (foundProduct) {
        const related = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 2);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }, 500); // Simulate loading time
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button className="bg-company-primary hover:bg-company-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-company-primary hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
          </Link>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-company-dark">{product.name}</h1>
            <Badge className="bg-company-primary text-white">{product.category}</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Image and Basic Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-company-primary">{product.price}</span>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4"
                            fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-company-primary mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Release Date</div>
                        <div className="font-medium">{product.releaseDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Computer className="h-5 w-5 text-company-primary mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Compatibility</div>
                        <div className="font-medium">{product.compatibility}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link to="/contact-us">
                      <Button className="w-full bg-company-primary hover:bg-company-primary/90">
                        Request a Demo
                      </Button>
                    </Link>
                    <Link to="/contact-us">
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Related Services Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4">Related Services & Studies</h3>
                <div className="space-y-2">
                  {product.relatedServices.map((service: string) => (
                    <Link key={service} to={`/services#${service}`} className="block">
                      <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100 w-full justify-start text-left py-2 px-3">
                        Service: {service.charAt(0).toUpperCase() + service.slice(1)}
                      </Badge>
                    </Link>
                  ))}
                  
                  {product.relatedCaseStudies.map((study: string) => (
                    <Link key={study} to={`/case-studies#${study}`} className="block">
                      <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100 w-full justify-start text-left py-2 px-3">
                        Case Study: {study.charAt(0).toUpperCase() + study.slice(1)}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {product.longDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-bold text-company-primary mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-company-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-company-primary mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Zap className="h-5 w-5 text-company-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Technical Specifications */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Deployment Options</h4>
                      <p className="text-gray-700">{product.technicalSpecs.deploymentOptions}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">API Access</h4>
                      <p className="text-gray-700">{product.technicalSpecs.apiAccess}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Security Certifications</h4>
                      <p className="text-gray-700">{product.technicalSpecs.securityCertifications}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Scale Capacity</h4>
                      <p className="text-gray-700">{product.technicalSpecs.scaleCapacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Update Frequency</h4>
                      <p className="text-gray-700">{product.technicalSpecs.updateFrequency}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-company-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Support</h4>
                      <p className="text-gray-700">{product.technicalSpecs.supportTiers}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQ Section */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">What kind of support is included?</h4>
                    <p className="text-gray-700">Our products include comprehensive support packages tailored to your needs. Basic support is included with all purchases, with options to upgrade to premium 24/7 support.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Do you offer implementation assistance?</h4>
                    <p className="text-gray-700">Yes, we provide professional implementation services to ensure smooth deployment and integration with your existing systems.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Is training available for our team?</h4>
                    <p className="text-gray-700">We offer comprehensive training programs for both administrators and end-users, available online or on-site.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">What is your update policy?</h4>
                    <p className="text-gray-700">All our products receive regular updates with new features, security patches, and performance improvements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {relatedProducts.map(product => (
                <Card key={product.id} className="overflow-hidden hover-lift">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="mt-auto">
                        <Link to={`/products/${product.id}`}>
                          <Button className="bg-company-primary hover:bg-company-primary/90">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <section className="py-16 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our sales team to discuss how {product.name} can help your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100">
                Contact Sales
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
