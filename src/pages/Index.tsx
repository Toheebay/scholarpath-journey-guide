
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Bell, 
  Users, 
  BarChart3, 
  Crown, 
  CheckCircle, 
  Globe, 
  TrendingUp, 
  Star,
  ArrowRight,
  Play,
  Search,
  Filter,
  MessageCircle,
  Award,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Scholarship Finder",
      description: "AI-powered search across 10,000+ scholarships worldwide. Filter by country, degree level, field of study, and language requirements.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Roadmap",
      description: "Get a custom step-by-step plan based on your profile, GPA, and goals. Your personal path to scholarship success.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Assistant",
      description: "AI-powered templates for SOPs, CVs, and motivation letters. Professional review and suggestions included.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Live Alerts & Deadlines",
      description: "Never miss a deadline again. Smart notifications and reminders keep you on track for every application.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community & Peer Support",
      description: "Connect with fellow scholarship seekers. Share experiences, tips, and documents in our supportive community.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Application Tracker",
      description: "Track all your applications in one place. Monitor status, deadlines, and follow-up requirements.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      country: "Singapore",
      scholarship: "Full PhD Scholarship at MIT",
      avatar: "SC",
      quote: "ScholarPath helped me organize my entire application process. The document templates saved me weeks of work!"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      scholarship: "Masters Scholarship in Germany",
      avatar: "AH",
      quote: "The personalized roadmap feature showed me scholarships I never knew existed. Now studying in Berlin!"
    },
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      scholarship: "Undergraduate Scholarship in Canada",
      avatar: "MR",
      quote: "The community support was incredible. Other students shared their experiences and helped me succeed."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Helped", icon: <Users className="w-5 h-5" /> },
    { number: "10,000+", label: "Scholarships Listed", icon: <Award className="w-5 h-5" /> },
    { number: "180+", label: "Countries Covered", icon: <Globe className="w-5 h-5" /> },
    { number: "85%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ScholarPath
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#success" className="text-gray-600 hover:text-blue-600 transition-colors">Success Stories</a>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              🎓 Your Scholarship Journey Starts Here
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Your Easy Route to
              <br />
              <span className="relative">
                Scholarships
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find, apply, and win scholarships worldwide with AI-powered guidance. 
              Your personal scholarship mentor, available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                Start Your Journey Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              ✨ Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Everything You Need to Win Scholarships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From discovery to application, we guide you through every step of your scholarship journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                    activeFeature === index 
                      ? 'border-blue-200 shadow-lg bg-blue-50/50' 
                      : 'border-gray-100 hover:border-blue-100 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${features[activeFeature].color} mb-4`}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                  <p className="text-blue-100">{features[activeFeature].description}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Live Preview:</h4>
                  <div className="text-sm text-blue-100">
                    {activeFeature === 0 && "🔍 Found 47 scholarships matching your profile..."}
                    {activeFeature === 1 && "📋 Step 1 of 8: Prepare your IELTS exam by March..."}
                    {activeFeature === 2 && "📝 Your SOP is 89% complete. Add more about your goals..."}
                    {activeFeature === 3 && "⏰ Reminder: Oxford scholarship deadline in 5 days..."}
                    {activeFeature === 4 && "💬 Sarah: 'Just got accepted! Here's my application...'"}
                    {activeFeature === 5 && "📊 3 applications pending, 2 interviews scheduled..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              💎 Choose Your Plan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Start Free, Upgrade When Ready
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with our free plan, then unlock premium features to maximize your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-200 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Free Explorer</h3>
                <div className="text-4xl font-bold mb-2 text-gray-800">$0</div>
                <p className="text-gray-600">Perfect to get started</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Access to 1,000+ scholarships</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Basic filters and search</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Application tracker (5 applications)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Community access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Basic document templates</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-600 hover:bg-gray-700">
                Get Started Free
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <Crown className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Premium Scholar</h3>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  $29<span className="text-lg">/month</span>
                </div>
                <p className="text-gray-600">Everything you need to succeed</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Access to ALL 10,000+ scholarships</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Advanced AI-powered matching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Unlimited application tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Professional document review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>One-on-one guidance sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Hidden scholarship access</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Upgrade to Premium
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
              🌟 Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Dreams Made Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students who've transformed their lives through scholarships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.country}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    {testimonial.scholarship}
                  </Badge>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Scholarship Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 50,000 students who've found their perfect scholarship. 
            Your dream education is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ScholarPath</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering students worldwide to find and win scholarships. 
                Your journey to international education starts here.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ScholarPath. All rights reserved. Made with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
