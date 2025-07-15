
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Globe, 
  Award, 
  Users, 
  BookOpen,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const countries = [
    {
      name: "Germany",
      flag: "🇩🇪",
      scholarships: "2,500+",
      benefits: "Full tuition + €853/month living allowance",
      programs: ["DAAD Scholarships", "Deutschlandstipendium", "Heinrich Böll Foundation"],
      requirements: "No IELTS required for English programs"
    },
    {
      name: "Austria",
      flag: "🇦🇹",
      scholarships: "800+",
      benefits: "Full tuition + €1,200/month stipend",
      programs: ["OeAD Scholarships", "Ernst Mach Grant", "University Scholarships"],
      requirements: "English proficiency accepted"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      scholarships: "1,200+",
      benefits: "Full funding + CAD $20,000-35,000/year",
      programs: ["Vanier CGS", "Trudeau Foundation", "NSERC Scholarships"],
      requirements: "Various English tests accepted"
    },
    {
      name: "Switzerland",
      flag: "🇨🇭",
      scholarships: "600+",
      benefits: "Full tuition + CHF 1,920/month allowance",
      programs: ["Swiss Government Excellence", "ETH Zurich Scholarships", "EPFL Fellowships"],
      requirements: "No specific language test required"
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      scholarships: "900+",
      benefits: "Full tuition + €1,000/month living costs",
      programs: ["Holland Scholarship", "Orange Tulip Scholarship", "University Grants"],
      requirements: "English programs available"
    },
    {
      name: "Norway",
      flag: "🇳🇴",
      scholarships: "400+",
      benefits: "Free tuition + NOK 12,000/month stipend",
      programs: ["Norwegian Government Scholarships", "Quota Scheme", "University Funding"],
      requirements: "No tuition fees for all students"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to 10,000+ scholarships across 50+ countries worldwide"
    },
    {
      icon: Award,
      title: "Fully Funded Programs",
      description: "Complete coverage including tuition, living expenses, and additional benefits"
    },
    {
      icon: Users,
      title: "No Language Barriers",
      description: "Many programs don't require IELTS, TOEFL, or Duolingo tests"
    },
    {
      icon: BookOpen,
      title: "All Study Levels",
      description: "Bachelor's, Master's, PhD, and postdoctoral research opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 px-4 py-2">
            <GraduationCap className="h-4 w-4 mr-2" />
            About ScholarPath
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Gateway to 
            <span className="text-blue-600 block">Fully Funded Education</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We connect ambitious students with life-changing scholarship opportunities across the globe. 
            From Germany's DAAD scholarships to Canada's prestigious Vanier awards, we help you 
            find and secure fully funded education without the barriers of expensive language tests.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm md:text-base text-gray-600">Scholarships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">50+</div>
              <div className="text-sm md:text-base text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">$2.5B+</div>
              <div className="text-sm md:text-base text-gray-600">Available Funding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">89%</div>
              <div className="text-sm md:text-base text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Countries Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Scholarship Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore fully funded opportunities in the world's leading education destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <div className="text-xl font-bold">{country.name}</div>
                      <div className="text-blue-100 text-sm">{country.scholarships} opportunities</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Benefits</div>
                        <div className="text-gray-600 text-sm">{country.benefits}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Top Programs</div>
                        <div className="text-gray-600 text-sm">
                          {country.programs.slice(0, 2).join(", ")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Requirements</div>
                        <div className="text-gray-600 text-sm">{country.requirements}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have secured fully funded scholarships. 
            Your dream education is waiting for you.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <img src="/lovable-uploads/3fc9c01e-0e41-494a-97d5-e48187ab9e2f.png" alt="ScholarPath" className="h-8 w-8 mr-2" />
            <span className="text-xl md:text-2xl font-bold">ScholarPath</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ScholarPath. All rights reserved.</p>
            <p className="mt-2 text-sm md:text-base">Empowering students worldwide to achieve their dreams.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
