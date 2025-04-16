import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Star, Search, FileText, Check, Filter, Zap, Shield, Clock, Award, BarChart3, Phone } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [location.search]);
  
  const categories = [
    'Security Solutions',
    'Cloud Platforms',
    'Data Analytics',
    'Enterprise Software',
    'Mobile Applications',
    'AI Tools'
  ];
  
  const allProducts = [
    {
      id: 1,
      name: 'SecureGuard Pro',
      category: 'Security Solutions',
      description: 'Advanced cybersecurity solution for enterprise protection against threats.',
      price: '$999',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80',
      features: ['Real-time threat monitoring', 'Automated vulnerability scanning', 'Compliance reporting'],
      benefits: ['Reduce security incidents by up to 85%', 'Save 200+ hours per month on manual security tasks'],
      releaseDate: 'January 2025',
      compatibility: 'Windows, macOS, Linux',
      badge: 'New Release',
      relatedServices: ['security'],
      relatedCaseStudies: ['finance'],
    },
    {
      id: 2,
      name: 'CloudSphere',
      category: 'Cloud Platforms',
      description: 'Scalable cloud infrastructure platform for businesses of all sizes.',
      price: '$799/month',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
      features: ['Auto-scaling resources', 'Global content delivery', 'Disaster recovery'],
      benefits: ['Reduce infrastructure costs by 40%', 'Scale instantly to meet demand'],
      releaseDate: 'November 2024',
      compatibility: 'All major platforms',
      badge: 'Best Seller',
      relatedServices: ['cloud'],
      relatedCaseStudies: ['technology'],
    },
    {
      id: 3,
      name: 'DataVision Analytics',
      category: 'Data Analytics',
      description: 'Comprehensive data analytics platform for business intelligence.',
      price: '$599/month',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
      features: ['Interactive dashboards', 'Predictive modeling', 'Custom reporting'],
      benefits: ['Increase decision accuracy by 65%', 'Reduce time-to-insight by 75%'],
      releaseDate: 'March 2025',
      compatibility: 'Web-based, API access',
      badge: 'Popular',
      relatedServices: ['analytics'],
      relatedCaseStudies: ['retail', 'healthcare'],
    },
    {
      id: 4,
      name: 'EnterpriseConnect',
      category: 'Enterprise Software',
      description: 'All-in-one business management software for enterprise operations.',
      price: '$1,299',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
      features: ['Process automation', 'Resource planning', 'Team collaboration'],
      benefits: ['Reduce operational costs by 30%', 'Improve team productivity by 25%'],
      releaseDate: 'October 2024',
      compatibility: 'Windows, Web, Mobile',
      badge: null,
      relatedServices: ['development'],
      relatedCaseStudies: ['manufacturing'],
    },
    {
      id: 5,
      name: 'MobileWorks',
      category: 'Mobile Applications',
      description: 'Mobile productivity suite for businesses on the go.',
      price: '$249',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80',
      features: ['Offline access', 'Cross-device sync', 'Secure file sharing'],
      benefits: ['Work from anywhere with 99.9% availability', 'Save 5+ hours per week on mobile tasks'],
      releaseDate: 'December 2024',
      compatibility: 'iOS, Android',
      badge: null,
      relatedServices: ['development'],
      relatedCaseStudies: ['retail'],
    },
    {
      id: 6,
      name: 'AI Assist',
      category: 'AI Tools',
      description: 'Artificial intelligence tools for business process automation.',
      price: '$899',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=80',
      features: ['Natural language processing', 'Machine learning models', 'API integration'],
      benefits: ['Automate up to 70% of repetitive tasks', 'Derive insights from unstructured data'],
      releaseDate: 'February 2025',
      compatibility: 'All platforms with API access',
      badge: 'Trending',
      relatedServices: ['ai'],
      relatedCaseStudies: ['healthcare', 'finance'],
    },
    {
      id: 7,
      name: 'SecureVault',
      category: 'Security Solutions',
      description: 'Data encryption and secure storage solution for sensitive information.',
      price: '$599',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1633265486501-b4d5c24b8a0a?w=500&auto=format&fit=crop&q=80',
      features: ['256-bit encryption', 'Multi-factor authentication', 'Secure sharing'],
      benefits: ['Protect sensitive data with military-grade encryption', 'Meet compliance requirements easily'],
      releaseDate: 'September 2024',
      compatibility: 'Windows, macOS, Linux, Mobile',
      badge: null,
      relatedServices: ['security'],
      relatedCaseStudies: ['finance'],
    },
    {
      id: 8,
      name: 'CloudBackup',
      category: 'Cloud Platforms',
      description: 'Automated cloud backup solution with disaster recovery capabilities.',
      price: '$399/month',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80',
      features: ['Incremental backups', 'One-click recovery', 'Version history'],
      benefits: ['Recover from disasters in minutes, not days', '99.99% backup success rate'],
      releaseDate: 'July 2024',
      compatibility: 'All major platforms',
      badge: null,
      relatedServices: ['cloud'],
      relatedCaseStudies: ['technology'],
    },
    {
      id: 9,
      name: 'PredictiveInsight',
      category: 'Data Analytics',
      description: 'Predictive analytics platform for forecasting business trends.',
      price: '$799/month',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
      features: ['Trend forecasting', 'Anomaly detection', 'Market analysis'],
      benefits: ['Predict market changes with 85% accuracy', 'Identify new opportunities before competitors'],
      releaseDate: 'April 2025',
      compatibility: 'Web-based, Desktop applications',
      badge: 'Advanced',
      relatedServices: ['analytics'],
      relatedCaseStudies: ['retail', 'finance'],
    }
  ];
  
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                          selectedCategories.includes(product.category);
    
    return matchesSearch && matchesCategory;
  });
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const comparisonProducts = [
    { id: 1, name: 'SecureGuard Pro', category: 'Security Solutions', price: '$999', 
      features: {
        protection: '99.9%',
        response: 'Real-time',
        compliance: 'GDPR, HIPAA, PCI DSS',
        updates: 'Automatic',
        support: '24/7 Premium'
      }
    },
    { id: 7, name: 'SecureVault', category: 'Security Solutions', price: '$599', 
      features: {
        protection: '98.5%',
        response: 'Near real-time',
        compliance: 'GDPR, PCI DSS',
        updates: 'Scheduled',
        support: 'Business hours'
      }
    },
    { id: 2, name: 'CloudSphere', category: 'Cloud Platforms', price: '$799/month', 
      features: {
        protection: '99.5%',
        response: 'Minutes',
        compliance: 'SOC 2, ISO 27001',
        updates: 'Automatic',
        support: '24/7 Standard'
      }
    }
  ];
  
  return (
    <Layout>
      <section className="bg-company-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-in">
            Explore our range of innovative products designed to address your business challenges.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-company-dark">Filter Products</h2>
                  <Filter className="text-company-primary h-5 w-5" />
                </div>
                
                <div className="mb-8 relative">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search Products
                  </label>
                  <div className="relative">
                    <Input
                      id="search"
                      placeholder="Search by name or description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-bold text-gray-700 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                          className="text-company-primary"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-company-primary transition-colors"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-700 mb-3">View Mode</h3>
                  <div className="flex border rounded-md overflow-hidden">
                    <button 
                      className={`flex-1 py-2 px-3 ${viewMode === 'grid' ? 'bg-company-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      Grid
                    </button>
                    <button 
                      className={`flex-1 py-2 px-3 ${viewMode === 'list' ? 'bg-company-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setViewMode('list')}
                    >
                      List
                    </button>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-bold text-gray-700 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/services" className="block text-company-primary hover:underline py-1 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" /> Services
                    </Link>
                    <Link to="/case-studies" className="block text-company-primary hover:underline py-1 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" /> Case Studies
                    </Link>
                    <Link to="/contact-us" className="block text-company-primary hover:underline py-1 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" /> Contact Sales
                    </Link>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategories([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="mb-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-company-dark mb-2">All Products</h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {allProducts.length} products
                </p>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-lg text-center animate-fade-in">
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategories([]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="card-shadow overflow-hidden flex flex-col hover-lift">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <Badge className="absolute top-3 right-3 bg-company-primary">
                          {product.category}
                        </Badge>
                        {product.badge && (
                          <Badge className="absolute top-3 left-3 bg-company-secondary">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center mb-3">
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
                        <p className="text-gray-600 mb-4 text-sm">
                          {product.description}
                        </p>
                        
                        {/* Product detailed information */}
                        <div className="mt-1 mb-4 text-sm space-y-2 flex-grow">
                          <div className="font-medium text-company-primary">Key Features:</div>
                          <ul className="pl-1 space-y-1">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-4 w-4 text-company-secondary mr-1 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="font-medium text-company-primary mt-3">Key Benefits:</div>
                          <ul className="pl-1 space-y-1">
                            {product.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <Zap className="h-4 w-4 text-company-secondary mr-1 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div>
                              <span className="font-medium text-gray-700 block">Release:</span>
                              <span className="text-gray-600">{product.releaseDate}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700 block">Compatible with:</span>
                              <span className="text-gray-600">{product.compatibility}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                        <span className="text-xl font-bold text-company-primary">{product.price}</span>
                        <Link to={`/products/${product.id}`}>
                          <Button 
                            size="sm" 
                            variant="view-details" 
                            className="bg-company-primary hover:bg-company-primary/90"
                          >
                            <FileText className="h-4 w-4 mr-1" /> View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 stagger-children">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="card-shadow overflow-hidden hover-lift">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative h-full min-h-[200px] md:col-span-1">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <Badge className="absolute top-3 right-3 bg-company-primary">
                            {product.category}
                          </Badge>
                          {product.badge && (
                            <Badge className="absolute top-3 left-3 bg-company-secondary">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                              <div className="flex items-center mb-3">
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
                            <span className="text-xl font-bold text-company-primary">{product.price}</span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">
                            {product.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="font-medium text-company-primary mb-2">Key Features:</div>
                              <ul className="pl-1 space-y-1">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-start">
                                    <Check className="h-4 w-4 text-company-secondary mr-1 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="font-medium text-company-primary mb-2">Key Benefits:</div>
                              <ul className="pl-1 space-y-1">
                                {product.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <Zap className="h-4 w-4 text-company-secondary mr-1 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3 mt-4">
                            {product.relatedServices.map(service => (
                              <Link key={service} to={`/services#${service}`}>
                                <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100">
                                  Related: {service.charAt(0).toUpperCase() + service.slice(1)}
                                </Badge>
                              </Link>
                            ))}
                            {product.relatedCaseStudies.map(study => (
                              <Link key={study} to={`/case-studies#${study}`}>
                                <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100">
                                  Case Study: {study.charAt(0).toUpperCase() + study.slice(1)}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                          
                          <div className="flex justify-end gap-3 mt-4">
                            <Link to={`/products/${product.id}`}>
                              <Button className="bg-company-primary hover:bg-company-primary/90">
                                <FileText className="h-4 w-4 mr-1" /> View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-slide-from-left">Product Comparisons</h2>
            <p className="section-subtitle animate-slide-from-right">
              Compare our top products to find the best solution for your business needs.
            </p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg animate-fade-in">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-company-primary text-white">
                  <th className="px-6 py-4 text-left">Features</th>
                  {comparisonProducts.map(product => (
                    <th key={product.id} className="px-6 py-4 text-center">{product.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Category</td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.category}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Price</td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.price}</td>
                  ))}
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-company-primary" />
                      Protection Level
                    </div>
                  </td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.features.protection}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-company-primary" />
                      Response Time
                    </div>
                  </td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.features.response}</td>
                  ))}
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-company-primary" />
                      Compliance
                    </div>
                  </td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.features.compliance}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-company-primary" />
                      Updates
                    </div>
                  </td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.features.updates}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-company-primary" />
                      Support
                    </div>
                  </td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">{product.features.support}</td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"></td>
                  {comparisonProducts.map(product => (
                    <td key={product.id} className="px-6 py-4 text-center">
                      <Button size="sm" className="bg-company-primary hover:bg-company-primary/90">
                        Details
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-slide-from-left">Featured Solutions</h2>
            <p className="section-subtitle animate-slide-from-right">
              Our most popular and highly-rated enterprise solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
            <Card className="bg-white shadow-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
                  alt="SecureGuard Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-company-secondary">New Release</Badge>
                <h3 className="text-2xl font-bold mb-2">SecureGuard Pro</h3>
                <p className="text-gray-600 mb-4">
                  Our flagship security solution offering comprehensive protection for enterprise networks and data.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Advanced threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Compliance reporting</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-company-primary">$999</span>
                  <div className="flex gap-2">
                    <Link to="/services#security">
                      <Button variant="outline" size="sm">
                        Related Service
                      </Button>
                    </Link>
                    <Link to="/products/1">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80"
                  alt="CloudSphere"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-company-secondary">Best Seller</Badge>
                <h3 className="text-2xl font-bold mb-2">CloudSphere</h3>
                <p className="text-gray-600 mb-4">
                  Cloud infrastructure platform for businesses requiring scalable, reliable solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Auto-scaling capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Global content delivery</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-company-primary">$799/month</span>
                  <div className="flex gap-2">
                    <Link to="/services#cloud">
                      <Button variant="outline" size="sm">
                        Related Service
                      </Button>
                    </Link>
                    <Link to="/products/2">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80"
                  alt="AI Assist"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-company-secondary">Popular</Badge>
                <h3 className="text-2xl font-bold mb-2">AI Assist</h3>
                <p className="text-gray-600 mb-4">
                  Artificial intelligence tools designed to automate and optimize business processes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Process automation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-company-secondary h-5 w-5 mr-2 mt-0.5" />
                    <span>Natural language processing</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-company-primary">$899</span>
                  <div className="flex gap-2">
                    <Link to="/services#ai">
                      <Button variant="outline" size="sm">
                        Related Service
                      </Button>
                    </Link>
                    <Link to="/products/6">
                      <Button className="bg-company-primary hover:bg-company-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-in">
            Explore our products or schedule a demo to see how our solutions can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100 animate-pulse-subtle">
                Schedule a Demo
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
