
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, ExternalLink, Search, ArrowUpRight, Calendar, Building, Users, BarChart, Check, ChevronDown, ChevronUp, Clock, Quote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const CaseStudies = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStudies, setExpandedStudies] = useState<number[]>([]);

  // Parse the hash from the URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['healthcare', 'finance', 'retail', 'technology', 'manufacturing'].includes(hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab('all');
    }
  }, [location]);

  const toggleExpanded = (id: number) => {
    setExpandedStudies(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: number) => expandedStudies.includes(id);

  const allCaseStudies = [
    {
      id: 1,
      title: "Enhancing Patient Care with Data Analytics",
      client: "MediBridge Health Network",
      industry: "healthcare",
      challenge: "MediBridge Health Network struggled with long patient wait times and inefficient resource allocation across their 15 locations.",
      solution: "Implemented our DataVision Analytics platform to analyze patient flow patterns and optimize staff scheduling based on predicted demand.",
      results: [
        "45% reduction in average patient wait times",
        "32% improvement in resource utilization",
        "92% increase in patient satisfaction scores"
      ],
      testimonial: "The data analytics solution from CompanyName has transformed how we allocate resources and schedule staff. The impact on patient satisfaction has been remarkable.",
      testimonialAuthor: "Dr. Sarah Chen, Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
      services: ["analytics"],
      products: ["DataVision Analytics"],
      projectLength: "4 months",
      yearCompleted: 2023
    },
    {
      id: 2,
      title: "Strengthening Security Infrastructure",
      client: "Global Banking Corporation",
      industry: "finance",
      challenge: "Global Banking Corporation faced increasing cybersecurity threats and needed to strengthen their security posture to protect sensitive financial data.",
      solution: "Deployed SecureGuard Pro across their entire network, implementing advanced threat detection, vulnerability scanning, and compliance monitoring.",
      results: [
        "99.9% reduction in security breaches",
        "78% faster threat detection and response time",
        "Full compliance with GDPR, PCI DSS, and SOX requirements"
      ],
      testimonial: "CompanyName's security solution provided us with the comprehensive protection we needed. Their team's expertise was instrumental in strengthening our security posture.",
      testimonialAuthor: "James Wilson, CISO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      services: ["security", "consulting"],
      products: ["SecureGuard Pro", "SecureVault"],
      projectLength: "6 months",
      yearCompleted: 2024
    },
    {
      id: 3,
      title: "Optimizing Inventory Management",
      client: "Urban Retail Group",
      industry: "retail",
      challenge: "Urban Retail Group struggled with inventory management across their 50+ stores, leading to stockouts, overstocking, and lost sales.",
      solution: "Implemented EnterpriseConnect with custom inventory management modules integrated with their existing POS systems.",
      results: [
        "35% reduction in stockouts",
        "28% decrease in overstock situations",
        "41% improvement in inventory turnover"
      ],
      testimonial: "The inventory solution developed by CompanyName has significantly improved our operational efficiency and directly impacted our bottom line through reduced waste and increased sales.",
      testimonialAuthor: "Michael Rodriguez, COO",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80",
      services: ["development", "analytics"],
      products: ["EnterpriseConnect", "MobileWorks"],
      projectLength: "5 months",
      yearCompleted: 2023
    },
    {
      id: 4,
      title: "Scaling Infrastructure with Cloud Migration",
      client: "InnovateTech Solutions",
      industry: "technology",
      challenge: "InnovateTech Solutions experienced rapid growth and their on-premises infrastructure couldn't scale to meet increasing demand, causing performance issues.",
      solution: "Migrated their entire infrastructure to CloudSphere, implementing auto-scaling, load balancing, and global content delivery.",
      results: [
        "200% increase in platform scalability",
        "99.99% uptime achieved",
        "43% reduction in infrastructure costs"
      ],
      testimonial: "The cloud migration executed by CompanyName was seamless and has allowed us to scale without worrying about infrastructure limitations. Performance has never been better.",
      testimonialAuthor: "Linda Patel, CTO",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      services: ["cloud", "consulting"],
      products: ["CloudSphere", "CloudBackup"],
      projectLength: "3 months",
      yearCompleted: 2024
    },
    {
      id: 5,
      title: "Enhancing Customer Insights",
      client: "Prosperity Financial Group",
      industry: "finance",
      challenge: "Prosperity Financial Group lacked clear insights into customer behavior and preferences, limiting their ability to create personalized offerings.",
      solution: "Deployed our PredictiveInsight platform with custom financial services modules to analyze customer data and predict future needs.",
      results: [
        "38% increase in customer engagement",
        "52% improvement in cross-selling success rate",
        "28% increase in customer retention"
      ],
      testimonial: "The predictive analytics solution has given us unprecedented visibility into our customers' needs, allowing us to provide more personalized services than ever before.",
      testimonialAuthor: "Robert Chang, Customer Experience Director",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      services: ["analytics", "ai"],
      products: ["PredictiveInsight", "AI Assist"],
      projectLength: "7 months",
      yearCompleted: 2023
    },
    {
      id: 6,
      title: "Improving Operational Efficiency",
      client: "Metropolitan Medical Center",
      industry: "healthcare",
      challenge: "Metropolitan Medical Center faced administrative bottlenecks and inefficient workflows that were impacting patient care and staff satisfaction.",
      solution: "Implemented AI Assist with custom healthcare modules to automate routine tasks and streamline administrative workflows.",
      results: [
        "50% reduction in administrative workload",
        "62% decrease in documentation errors",
        "3.5 hours per day saved per clinician"
      ],
      testimonial: "The AI solution has transformed our administrative processes, giving our medical staff more time to focus on what matters most – patient care.",
      testimonialAuthor: "Dr. Thomas Johnson, Hospital Director",
      image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=800&auto=format&fit=crop&q=80",
      services: ["ai", "development"],
      products: ["AI Assist"],
      projectLength: "5 months",
      yearCompleted: 2024
    },
    {
      id: 7,
      title: "Modernizing Production Systems",
      client: "Advanced Manufacturing Inc.",
      industry: "manufacturing",
      challenge: "Advanced Manufacturing Inc. operated with legacy production systems that were becoming unreliable and inefficient, impacting product quality and throughput.",
      solution: "Designed and implemented a comprehensive IoT solution connecting machines to a centralized management platform with predictive maintenance capabilities.",
      results: [
        "37% increase in production throughput",
        "53% reduction in unplanned downtime",
        "24% improvement in product quality metrics"
      ],
      testimonial: "The manufacturing solution provided by CompanyName has revolutionized our production floor. The predictive maintenance alone has saved us millions in prevented downtime.",
      testimonialAuthor: "Eliza Montgomery, VP of Operations",
      image: "https://images.unsplash.com/photo-1589792593911-1c2415561a42?w=800&auto=format&fit=crop&q=80",
      services: ["development", "cloud"],
      products: ["EnterpriseConnect", "CloudSphere"],
      projectLength: "8 months",
      yearCompleted: 2023
    },
    {
      id: 8,
      title: "Enhancing E-commerce Performance",
      client: "Global Trends Retail",
      industry: "retail",
      challenge: "Global Trends Retail's e-commerce platform suffered from performance issues during peak shopping seasons, resulting in lost sales and customer dissatisfaction.",
      solution: "Migrated their e-commerce platform to CloudSphere with auto-scaling capabilities and implemented DataVision Analytics for real-time performance monitoring.",
      results: [
        "300% increase in handling capacity during peak traffic",
        "65% improvement in page load times",
        "42% increase in conversion rates"
      ],
      testimonial: "Our e-commerce platform now handles Black Friday traffic with ease. The performance improvements have directly translated to higher conversion rates and customer satisfaction.",
      testimonialAuthor: "Sophia Martinez, Digital Director",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      services: ["cloud", "analytics"],
      products: ["CloudSphere", "DataVision Analytics"],
      projectLength: "4 months",
      yearCompleted: 2024
    }
  ];
  
  // Filter case studies based on active tab and search query
  const filteredCaseStudies = allCaseStudies.filter(study => {
    const matchesTab = activeTab === 'all' || study.industry === activeTab;
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  return (
    <Layout>
      <section className="bg-company-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Case Studies</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-in">
            Discover how our solutions have helped businesses across various industries solve their most challenging problems.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="md:w-3/4">
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
                <h2 className="text-2xl font-bold text-company-primary mb-6">Success Stories Across Industries</h2>
                <p className="text-gray-600 mb-8">
                  At CompanyName, we measure our success by the success of our clients. These case studies demonstrate how our technology solutions have helped organizations overcome challenges, optimize operations, and achieve their business goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg text-center hover-lift">
                    <Building className="h-10 w-10 text-company-primary mb-4" />
                    <span className="text-2xl font-bold text-company-primary">100+</span>
                    <span className="text-gray-600">Clients Served</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg text-center hover-lift">
                    <BarChart className="h-10 w-10 text-company-primary mb-4" />
                    <span className="text-2xl font-bold text-company-primary">40%</span>
                    <span className="text-gray-600">Average ROI</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg text-center hover-lift">
                    <Users className="h-10 w-10 text-company-primary mb-4" />
                    <span className="text-2xl font-bold text-company-primary">95%</span>
                    <span className="text-gray-600">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search Case Studies
                  </label>
                  <div className="relative">
                    <Input
                      id="search"
                      placeholder="Search by title, client or industry..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Jump to Industry</h3>
                  <div className="space-y-2">
                    <Link to="#healthcare" className="block p-2 rounded hover:bg-gray-100 text-company-primary flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Healthcare
                    </Link>
                    <Link to="#finance" className="block p-2 rounded hover:bg-gray-100 text-company-primary flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Finance
                    </Link>
                    <Link to="#retail" className="block p-2 rounded hover:bg-gray-100 text-company-primary flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Retail
                    </Link>
                    <Link to="#technology" className="block p-2 rounded hover:bg-gray-100 text-company-primary flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Technology
                    </Link>
                    <Link to="#manufacturing" className="block p-2 rounded hover:bg-gray-100 text-company-primary flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Manufacturing
                    </Link>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact-us">
                    <Button className="w-full bg-company-primary hover:bg-company-primary/90">
                      Discuss Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 animate-fade-in">
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              </TabsList>
              
              {/* This content displays for all tabs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-company-dark mb-2">
                  {activeTab === 'all' ? 'All Case Studies' : 
                   `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Case Studies`}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredCaseStudies.length} case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
                </p>
              </div>
              
              <div id="caseStudies" className="space-y-8">
                {filteredCaseStudies.length === 0 ? (
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">No case studies found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search criteria to find what you're looking for.
                    </p>
                    <Button variant="outline" onClick={() => setSearchQuery('')}>
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <div className="stagger-children">
                    {filteredCaseStudies.map((study) => (
                      <Card key={study.id} className="overflow-hidden hover-lift" id={study.id.toString()}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-1 h-full">
                            <div className="h-64 md:h-full w-full">
                              <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div className="md:col-span-2 p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge className="bg-company-primary capitalize">
                                {study.industry}
                              </Badge>
                              {study.services.map((service, index) => (
                                <Link key={index} to={`/services#${service}`}>
                                  <Badge variant="outline" className="hover:bg-gray-100">
                                    {service.charAt(0).toUpperCase() + service.slice(1)}
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-company-dark mb-2">
                              {study.title}
                            </h3>
                            <p className="text-lg font-medium text-company-secondary mb-4">
                              {study.client}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Completed: {study.yearCompleted}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>Duration: {study.projectLength}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h4 className="font-bold text-gray-700 mb-1">Challenge:</h4>
                              <p className="text-gray-600">{study.challenge}</p>
                            </div>
                            
                            <div className={`transition-all duration-300 ${isExpanded(study.id) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                              <div className="mb-4">
                                <h4 className="font-bold text-gray-700 mb-1">Solution:</h4>
                                <p className="text-gray-600">{study.solution}</p>
                              </div>
                              
                              <div className="mb-6">
                                <h4 className="font-bold text-gray-700 mb-2">Results:</h4>
                                <ul className="space-y-2">
                                  {study.results.map((result, index) => (
                                    <li key={index} className="flex items-start">
                                      <Check className="h-5 w-5 text-company-secondary mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-company-secondary">
                                <div className="flex items-start">
                                  <Quote className="h-6 w-6 text-company-secondary mr-2 mt-1 flex-shrink-0" />
                                  <div>
                                    <p className="text-gray-700 italic mb-2">{study.testimonial}</p>
                                    <p className="text-sm font-medium text-gray-600">— {study.testimonialAuthor}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="font-bold text-gray-700 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {study.products.map((product, index) => (
                                    <Badge key={index} className="bg-gray-200 text-gray-700">
                                      {product}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-4">
                              <Button 
                                variant="ghost" 
                                onClick={() => toggleExpanded(study.id)}
                                className="text-company-primary flex items-center p-0 h-auto"
                              >
                                {isExpanded(study.id) ? (
                                  <>Hide Details <ChevronUp className="ml-1 h-4 w-4" /></>
                                ) : (
                                  <>Show Details <ChevronDown className="ml-1 h-4 w-4" /></>
                                )}
                              </Button>
                              
                              <div className="flex gap-2">
                                {study.services.map((service, index) => (
                                  <Link key={index} to={`/services#${service}`}>
                                    <Button variant="outline" size="sm" className="text-xs">
                                      Related Service
                                    </Button>
                                  </Link>
                                ))}
                                <Link to="/contact-us">
                                  <Button size="sm" className="bg-company-primary hover:bg-company-primary/90">
                                    Similar Solution <ArrowUpRight className="ml-1 h-3 w-3" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-slide-from-left">Industry Insights</h2>
            <p className="section-subtitle animate-slide-from-right">
              Learn about the unique challenges and solutions for different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            <Card className="hover-scale">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
                  alt="Healthcare"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Discover how our technology helps healthcare providers improve patient care, streamline operations, and ensure compliance.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="#healthcare" className="text-company-primary hover:underline flex items-center">
                    View Healthcare Cases <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link to="/services#healthcare">
                    <Button variant="outline" size="sm">
                      Related Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565514020179-026b92b2d7c4?w=800&auto=format&fit=crop&q=80"
                  alt="Finance"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  See how our solutions help financial institutions enhance security, improve customer experience, and optimize operations.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="#finance" className="text-company-primary hover:underline flex items-center">
                    View Finance Cases <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link to="/services#finance">
                    <Button variant="outline" size="sm">
                      Related Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80"
                  alt="Retail"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Retail & E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Learn how our technology helps retail businesses enhance customer experience, streamline inventory, and increase sales.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="#retail" className="text-company-primary hover:underline flex items-center">
                    View Retail Cases <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link to="/services#retail">
                    <Button variant="outline" size="sm">
                      Related Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-in">
            Contact us today to discuss how we can help you achieve similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-white text-company-primary hover:bg-gray-100 animate-pulse-subtle">
                Request a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title animate-slide-from-left">Our Client Success Process</h2>
            <p className="section-subtitle animate-slide-from-right">
              We follow a proven methodology to ensure successful outcomes for our clients.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We thoroughly analyze your business challenges and objectives.
                </p>
              </div>
              
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                <p className="text-gray-600">
                  We create a customized solution tailored to your specific needs.
                </p>
              </div>
              
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our experts deliver and implement the solution with minimal disruption.
                </p>
              </div>
              
              <div className="text-center hover-lift">
                <div className="rounded-full bg-company-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact-us">
              <Button className="bg-company-primary hover:bg-company-primary/90">
                Start Your Success Story <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
