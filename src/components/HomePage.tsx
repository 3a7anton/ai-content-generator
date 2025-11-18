import { Sparkles, FileText, Mail, MessageSquare, ShoppingBag, Zap, Shield, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-gray-900">ContentAI</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex">Features</Button>
              <Button variant="ghost" className="hidden sm:inline-flex">Pricing</Button>
              <Button variant="outline">Sign In</Button>
              <Button onClick={onGetStarted} className="hidden sm:inline-flex">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by Advanced AI
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6">
              Create Compelling Content in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Seconds</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Generate high-quality blog posts, emails, ads, and social media content with our AI-powered platform. Save time and boost your productivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={onGetStarted} className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 sm:mt-6">No credit card required • 10,000 free tokens</p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 sm:mb-4">AI-Powered Content Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Generate any type of content you need with our specialized AI models
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="border-2 border-transparent hover:border-purple-200 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Blog Posts</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create engaging, SEO-optimized blog posts that captivate your audience and drive traffic.
                </p>
                <Badge variant="secondary" className="text-xs">500 tokens</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-blue-200 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Email Campaigns</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Craft compelling email copy that converts subscribers into customers.
                </p>
                <Badge variant="secondary" className="text-xs">300 tokens</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-green-200 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Social Media</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Generate viral-worthy social media posts that engage your followers.
                </p>
                <Badge variant="secondary" className="text-xs">100 tokens</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-orange-200 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Product Descriptions</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Write persuasive product descriptions that highlight key features and benefits.
                </p>
                <Badge variant="secondary" className="text-xs">200 tokens</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 sm:mb-4">Why Choose ContentAI?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to supercharge your content creation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate high-quality content in seconds, not hours. Boost your productivity instantly.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Your data is encrypted and secure. We never share or sell your information.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">24/7 Available</h3>
              <p className="text-gray-600">
                Access our AI anytime, anywhere. Never miss a deadline or content opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 sm:mb-4">Simple, Transparent Pricing</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl text-gray-900 mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-900">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    10,000 tokens/month
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    All content types
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Basic support
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={onGetStarted}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-purple-600">Most Popular</Badge>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl text-gray-900 mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    50,000 tokens/month
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    All content types
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Export history
                  </li>
                </ul>
                <Button className="w-full" onClick={onGetStarted}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl text-gray-900 mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Unlimited tokens
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    All content types
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Custom integrations
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={onGetStarted}>
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl text-white mb-4 sm:mb-6">
            Join 10,000+ Content Creators
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Start creating amazing content today. No credit card required.
          </p>
          <Button size="lg" variant="secondary" onClick={onGetStarted} className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Guides</li>
                <li>Help Center</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">ContentAI</span>
            </div>
            <p className="text-sm text-center sm:text-left">© 2025 ContentAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
