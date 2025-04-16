
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Register form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back! You've been logged in.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate registration API call
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now log in.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  {/* Login Tab */}
                  <TabsContent value="login">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-company-dark">Welcome Back</h2>
                      <p className="text-gray-600">Log in to access your account</p>
                    </div>
                    
                    <form onSubmit={handleLoginSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="your@email.com"
                              value={loginData.email}
                              onChange={handleLoginChange}
                              className="pl-10"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                          </label>
                          <div className="relative">
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              required
                              placeholder="••••••••"
                              value={loginData.password}
                              onChange={handleLoginChange}
                              className="pl-10 pr-10"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="rememberMe"
                              type="checkbox"
                              checked={loginData.rememberMe}
                              onChange={handleLoginChange}
                              className="h-4 w-4 text-company-primary rounded border-gray-300"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                              Remember me
                            </label>
                          </div>
                          
                          <div className="text-sm">
                            <a href="#" className="text-company-primary hover:underline">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full bg-company-primary hover:bg-company-primary/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Logging in..." : "Log In"}
                        </Button>
                      </div>
                    </form>
                    
                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                          </svg>
                          Google
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          Facebook
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Register Tab */}
                  <TabsContent value="register">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-company-dark">Create Account</h2>
                      <p className="text-gray-600">Register to get started</p>
                    </div>
                    
                    <form onSubmit={handleRegisterSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              placeholder="John Doe"
                              value={registerData.name}
                              onChange={handleRegisterChange}
                              className="pl-10"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Input
                              id="register-email"
                              name="email"
                              type="email"
                              required
                              placeholder="your@email.com"
                              value={registerData.email}
                              onChange={handleRegisterChange}
                              className="pl-10"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                          </label>
                          <div className="relative">
                            <Input
                              id="register-password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              required
                              placeholder="••••••••"
                              value={registerData.password}
                              onChange={handleRegisterChange}
                              className="pl-10 pr-10"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                          </label>
                          <div className="relative">
                            <Input
                              id="confirm-password"
                              name="confirmPassword"
                              type={showPassword ? "text" : "password"}
                              required
                              placeholder="••••••••"
                              value={registerData.confirmPassword}
                              onChange={handleRegisterChange}
                              className="pl-10"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          </div>
                        </div>
                        
                        <div className="text-sm">
                          <p className="text-gray-600">
                            By registering, you agree to our{' '}
                            <Link to="/terms" className="text-company-primary hover:underline">
                              Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-company-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </p>
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full bg-company-primary hover:bg-company-primary/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Creating Account..." : "Register"}
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
