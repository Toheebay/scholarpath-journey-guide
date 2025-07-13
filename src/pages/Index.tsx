
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  FileText, 
  MapPin, 
  Bell, 
  Users, 
  BarChart3,
  Target,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ScholarPath</span>
          </div>
          <div className="flex gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Trusted by 50,000+ Students Worldwide
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your AI-Powered Path to
            <span className="text-blue-600 block">Scholarship Success</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover personalized scholarships, get AI assistance for applications, 
            and join a community of successful scholarship winners. Your journey to 
            academic funding starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">Scholarships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$2.5B+</div>
              <div className="text-gray-600">Awarded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">89%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Win Scholarships
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and support you need 
            for scholarship success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Search</h3>
            <p className="text-gray-600 mb-4">
              Find perfect matches from 10,000+ scholarships worldwide. Filter by country, 
              degree level, field of study, and language requirements.
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Smart matching algorithm
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Roadmap</h3>
            <p className="text-gray-600 mb-4">
              Get a custom step-by-step plan based on your profile, GPA, and goals. 
              Your personal path to scholarship success.
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Tailored action plans
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Document Assistant</h3>
            <p className="text-gray-600 mb-4">
              AI-powered templates for SOPs, CVs, and motivation letters. 
              Professional review and suggestions included.
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              AI writing assistance
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
              <Bell className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Live Alerts & Deadlines</h3>
            <p className="text-gray-600 mb-4">
              Never miss a deadline again. Smart notifications and reminders 
              keep you on track for every application.
            </p>
            <div className="flex items-center text-orange-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Automated reminders
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community & Peer Support</h3>
            <p className="text-gray-600 mb-4">
              Connect with fellow scholarship seekers. Share experiences, tips, 
              and documents in our supportive community.
            </p>
            <div className="flex items-center text-pink-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Global network
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
            <div className="p-3 bg-teal-100 rounded-lg w-fit mb-4">
              <BarChart3 className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Application Tracker</h3>
            <p className="text-gray-600 mb-4">
              Track all your applications in one place. Monitor status, deadlines, 
              and follow-up requirements.
            </p>
            <div className="flex items-center text-teal-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete overview
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have successfully secured scholarships 
            with ScholarPath. Your dream education is just one click away.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Award className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">ScholarPath</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ScholarPath. All rights reserved.</p>
            <p className="mt-2">Empowering students worldwide to achieve their dreams.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
