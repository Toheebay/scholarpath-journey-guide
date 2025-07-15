
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Globe,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get personalized scholarship guidance",
      contact: "support@scholarpath.com",
      availability: "24/7 Response within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak with our scholarship experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri: 9AM-6PM EST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant help with your questions",
      contact: "Available on website",
      availability: "24/7 AI + Human support"
    },
    {
      icon: MapPin,
      title: "Office Address",
      description: "Visit our scholarship center",
      contact: "123 Education Ave, Toronto, Canada",
      availability: "By appointment only"
    }
  ];

  const supportServices = [
    {
      title: "Germany Scholarship Support",
      description: "DAAD, Deutschlandstipendium, and university-specific scholarships",
      features: ["Free consultation", "Application review", "Interview preparation"]
    },
    {
      title: "Austrian Scholarship Guidance",
      description: "OeAD scholarships and Austrian university funding opportunities",
      features: ["Document assistance", "Timeline planning", "Success tracking"]
    },
    {
      title: "Canadian Scholarship Program",
      description: "Vanier CGS, Trudeau Foundation, and provincial scholarships",
      features: ["Profile optimization", "Application strategy", "Follow-up support"]
    },
    {
      title: "Swiss Scholarship Assistance",
      description: "Swiss Government Excellence and university scholarships",
      features: ["Eligibility assessment", "Application coaching", "Interview prep"]
    }
  ];

  const faqs = [
    {
      question: "Do I need IELTS for European scholarships?",
      answer: "No! Many European countries like Germany, Austria, and Switzerland offer English-taught programs that don't require IELTS, TOEFL, or Duolingo. We help you find these opportunities."
    },
    {
      question: "What does 'fully funded' mean?",
      answer: "Fully funded scholarships cover tuition fees, living expenses, health insurance, and often include additional benefits like travel allowances and research funding."
    },
    {
      question: "How long does the application process take?",
      answer: "Application timelines vary by country and program, typically 3-6 months. We provide personalized timelines and ensure you never miss deadlines."
    },
    {
      question: "Can I apply to multiple scholarships?",
      answer: "Absolutely! We recommend applying to 5-10 scholarships to maximize your chances. Our platform helps you track all applications efficiently."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 px-4 py-2">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact & Support
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Expert Help with Your
            <span className="text-blue-600 block">Scholarship Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Our team of scholarship experts is here to guide you through every step of securing 
            fully funded education in Germany, Austria, Canada, Switzerland, and beyond.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <method.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <div className="text-blue-600 font-medium text-sm mb-2">{method.contact}</div>
              <div className="text-gray-500 text-xs">{method.availability}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Support Services */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have specific questions about scholarships? Our experts will get back to you within 2 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your scholarship goals, target countries, or specific questions..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Support Services */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Support Services
              </h2>
              <p className="text-gray-600 mb-8">
                Specialized assistance for scholarships in top destinations worldwide.
              </p>
              
              <div className="space-y-6">
                {supportServices.map((service, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about fully funded scholarships
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Scholarship?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let funding be a barrier to your education. Start your scholarship search today 
            and join thousands of successful students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Free Search
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Book Free Consultation
            </Button>
          </div>
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
            <p className="mt-2 text-sm md:text-base">Your trusted partner in scholarship success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
