
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, LogIn, Monitor, Database, Shield, BarChart3, Cloud, Code, FileText, Package, Cpu, BookOpen, PieChart, Award, Globe, Users, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { 
      name: 'Services', 
      path: '/services',
      children: [
        { 
          name: 'IT Consulting', 
          path: '/services#consulting',
          icon: <Globe size={18} className="mr-2 text-company-primary" />,
          description: 'Strategic guidance for business technology',
          details: [
            'Technology roadmap development',
            'Digital transformation strategy',
            'IT infrastructure assessment'
          ]
        },
        { 
          name: 'Software Development', 
          path: '/services#development',
          icon: <Code size={18} className="mr-2 text-company-primary" />,
          description: 'Custom applications built for your needs',
          details: [
            'Custom application development',
            'Web and mobile solutions',
            'API integration services'
          ]
        },
        { 
          name: 'Cloud Solutions', 
          path: '/services#cloud',
          icon: <Cloud size={18} className="mr-2 text-company-primary" />,
          description: 'Scalable cloud infrastructure services',
          details: [
            'Cloud migration strategy',
            'Infrastructure as a Service (IaaS)',
            'Software as a Service (SaaS)'
          ]
        },
        { 
          name: 'Data Analytics', 
          path: '/services#analytics',
          icon: <BarChart3 size={18} className="mr-2 text-company-primary" />,
          description: 'Turn data into actionable insights',
          details: [
            'Business intelligence solutions',
            'Data visualization tools',
            'Predictive analytics'
          ]
        },
        { 
          name: 'Cybersecurity', 
          path: '/services#security',
          icon: <Shield size={18} className="mr-2 text-company-primary" />,
          description: 'Protect your business from threats',
          details: [
            'Security assessment and auditing',
            'Threat detection and response',
            'Compliance management'
          ]
        },
        { 
          name: 'AI & Machine Learning', 
          path: '/services#ai',
          icon: <Cpu size={18} className="mr-2 text-company-primary" />,
          description: 'Advanced AI automation solutions',
          details: [
            'AI solution development',
            'Machine learning models',
            'Natural language processing'
          ]
        }
      ]
    },
    { 
      name: 'Products', 
      path: '/products',
      children: [
        { 
          name: 'Security Solutions', 
          path: '/products?category=Security+Solutions',
          icon: <Shield size={18} className="mr-2 text-company-primary" />,
          description: 'Enterprise-grade security products',
          featured: [
            { name: 'SecureGuard Pro', price: '$999' },
            { name: 'SecureVault', price: '$599' }
          ]
        },
        { 
          name: 'Cloud Platforms', 
          path: '/products?category=Cloud+Platforms',
          icon: <Cloud size={18} className="mr-2 text-company-primary" />,
          description: 'Scalable cloud infrastructure',
          featured: [
            { name: 'CloudSphere', price: '$799/month' },
            { name: 'CloudBackup', price: '$399/month' }
          ]
        },
        { 
          name: 'Data Analytics', 
          path: '/products?category=Data+Analytics',
          icon: <PieChart size={18} className="mr-2 text-company-primary" />,
          description: 'Business intelligence tools',
          featured: [
            { name: 'DataVision Analytics', price: '$599/month' },
            { name: 'PredictiveInsight', price: '$799/month' }
          ]
        },
        { 
          name: 'Enterprise Software', 
          path: '/products?category=Enterprise+Software',
          icon: <Database size={18} className="mr-2 text-company-primary" />,
          description: 'Business management solutions',
          featured: [
            { name: 'EnterpriseConnect', price: '$1,299' }
          ]
        },
        { 
          name: 'Mobile Applications', 
          path: '/products?category=Mobile+Applications', 
          icon: <Monitor size={18} className="mr-2 text-company-primary" />,
          description: 'Mobile productivity apps',
          featured: [
            { name: 'MobileWorks', price: '$249' }
          ]
        },
        { 
          name: 'AI Tools', 
          path: '/products?category=AI+Tools',
          icon: <Cpu size={18} className="mr-2 text-company-primary" />,
          description: 'Artificial intelligence solutions',
          featured: [
            { name: 'AI Assist', price: '$899' }
          ]
        }
      ]
    },
    { 
      name: 'Case Studies', 
      path: '/case-studies',
      children: [
        { 
          name: 'Healthcare', 
          path: '/case-studies#healthcare',
          icon: <Users size={18} className="mr-2 text-company-primary" />,
          description: 'Transformation in healthcare organizations',
          featured: [
            { 
              client: 'MediBridge Health Network',
              title: 'Enhances Patient Care with Data Analytics',
              result: '45% reduction in wait times'
            },
            {
              client: 'Metropolitan Medical Center',
              title: 'Improves Operational Efficiency',
              result: '50% reduction in administrative workload'
            }
          ]
        },
        { 
          name: 'Finance', 
          path: '/case-studies#finance',
          icon: <BookOpen size={18} className="mr-2 text-company-primary" />,
          description: 'Success stories in financial services',
          featured: [
            {
              client: 'Global Banking Corporation',
              title: 'Strengthens Security Infrastructure', 
              result: '99.9% reduction in security breaches'
            },
            {
              client: 'Prosperity Financial Group',
              title: 'Enhances Customer Insights',
              result: '38% increase in customer engagement'
            }
          ]
        },
        { 
          name: 'Retail', 
          path: '/case-studies#retail',
          icon: <Package size={18} className="mr-2 text-company-primary" />,
          description: 'Digital solutions for retail businesses',
          featured: [
            {
              client: 'Urban Retail Group',
              title: 'Optimizes Inventory Management',
              result: '35% reduction in stockouts'
            }
          ]
        },
        { 
          name: 'Technology', 
          path: '/case-studies#technology', 
          icon: <Award size={18} className="mr-2 text-company-primary" />,
          description: 'Digital transformation in tech companies',
          featured: [
            {
              client: 'InnovateTech Solutions',
              title: 'Scales Infrastructure with Cloud Migration',
              result: '200% increase in platform scalability'
            }
          ]
        }
      ]
    },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-company-primary hover:opacity-90 transition-opacity">
          CompanyName
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                link.children ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger className={isActive(link.path) ? "text-company-primary font-medium" : "text-gray-700"}>
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[450px] p-4 bg-white">
                        <h3 className="font-medium text-company-primary mb-4 pb-2 border-b">
                          {link.name} Options
                        </h3>
                        <div className="grid gap-3">
                          {link.children.map((child) => (
                            <div key={child.name} className="select-none rounded-md p-3 hover:bg-accent transition-colors">
                              <Link 
                                to={child.path}
                                className="block"
                              >
                                <div className="flex items-center">
                                  {child.icon}
                                  <div>
                                    <div className="text-sm font-medium mb-1">{child.name}</div>
                                    <div className="text-xs text-muted-foreground">{child.description}</div>
                                  </div>
                                </div>
                              </Link>
                              
                              {/* Services details */}
                              {link.name === 'Services' && child.details && (
                                <div className="mt-2 pl-7 border-l border-gray-200 ml-2">
                                  <div className="text-xs font-medium text-gray-600 mb-1">Key offerings:</div>
                                  <ul className="text-xs text-gray-500 space-y-1">
                                    {child.details.map((detail, idx) => (
                                      <li key={idx} className="flex items-center">
                                        <ArrowRight className="h-2 w-2 mr-1 text-company-secondary flex-shrink-0" />
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Products featured items */}
                              {link.name === 'Products' && child.featured && (
                                <div className="mt-2 pl-7 border-l border-gray-200 ml-2">
                                  <div className="text-xs font-medium text-gray-600 mb-1">Featured products:</div>
                                  <ul className="text-xs text-gray-500 space-y-1">
                                    {child.featured.map((product, idx) => (
                                      <li key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                          <ArrowRight className="h-2 w-2 mr-1 text-company-secondary flex-shrink-0" />
                                          <span>{product.name}</span>
                                        </div>
                                        <span className="text-company-primary font-medium">{product.price}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Case Studies featured items */}
                              {link.name === 'Case Studies' && child.featured && (
                                <div className="mt-2 pl-7 border-l border-gray-200 ml-2">
                                  <div className="text-xs font-medium text-gray-600 mb-1">Success stories:</div>
                                  <ul className="text-xs text-gray-500 space-y-2">
                                    {child.featured.map((story, idx) => (
                                      <li key={idx}>
                                        <div className="font-medium">{story.client}</div>
                                        <div className="text-xs">{story.title}</div>
                                        <div className="text-company-secondary text-xs mt-0.5">Result: {story.result}</div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-2 border-t">
                          <Link 
                            to={link.path} 
                            className="text-sm text-company-primary flex items-center hover:underline"
                          >
                            View all {link.name} <FileText size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link to={link.path}>
                      <NavigationMenuLink 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive(link.path) ? "text-company-primary font-medium" : "text-gray-700"
                        )}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link to="/login" className="hidden md:flex">
          <Button className="bg-company-primary hover:bg-company-primary/90 flex items-center gap-2">
            <LogIn size={18} />
            <span>Login</span>
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                {link.children ? (
                  <div className="space-y-2">
                    <div className="text-company-primary font-medium flex items-center">
                      {link.name} <ChevronDown size={16} className="ml-1" />
                    </div>
                    <div className="pl-4 space-y-4 border-l-2 border-gray-200">
                      {link.children.map((child) => (
                        <div key={child.name} className="py-1">
                          <Link
                            to={child.path}
                            className="block hover:text-company-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              {child.icon}
                              <span>{child.name}</span>
                            </div>
                            <div className="text-xs text-gray-500 ml-6 mt-1">
                              {child.description}
                            </div>
                          </Link>
                          
                          {/* Services details for mobile */}
                          {link.name === 'Services' && child.details && (
                            <div className="mt-2 ml-6 pl-2 border-l border-gray-200">
                              <div className="text-xs font-medium text-gray-600 mb-1">Key offerings:</div>
                              <ul className="text-xs text-gray-500 space-y-1">
                                {child.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <ArrowRight className="h-2 w-2 mr-1 text-company-secondary flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Products featured items for mobile */}
                          {link.name === 'Products' && child.featured && (
                            <div className="mt-2 ml-6 pl-2 border-l border-gray-200">
                              <div className="text-xs font-medium text-gray-600 mb-1">Featured products:</div>
                              <ul className="text-xs text-gray-500 space-y-1">
                                {child.featured.map((product, idx) => (
                                  <li key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <ArrowRight className="h-2 w-2 mr-1 text-company-secondary flex-shrink-0" />
                                      <span>{product.name}</span>
                                    </div>
                                    <span className="text-company-primary font-medium">{product.price}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Case Studies details for mobile */}
                          {link.name === 'Case Studies' && child.featured && (
                            <div className="mt-2 ml-6 pl-2 border-l border-gray-200">
                              <div className="text-xs font-medium text-gray-600 mb-1">Success story:</div>
                              <div className="text-xs text-gray-500">
                                <div className="font-medium">{child.featured[0].client}</div>
                                <div>{child.featured[0].title}</div>
                                <div className="text-company-secondary mt-0.5">Result: {child.featured[0].result}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block hover:text-company-primary transition-colors ${
                      isActive(link.path) ? "text-company-primary font-medium" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-company-primary hover:bg-company-primary/90 flex items-center justify-center gap-2">
                <LogIn size={18} />
                <span>Login</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
