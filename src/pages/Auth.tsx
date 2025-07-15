
import React, { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { AdminSetup } from '@/components/admin/AdminSetup';
import { Navbar } from '@/components/layout/Navbar';
import { Check } from 'lucide-react';

export const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left side - Promotional content */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 to-transparent"></div>
        
          <div className="relative z-10">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Achieve More With Our
              <span className="block">Exclusive Scholarship</span>
              <span className="block">Opportunity</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
              Apply for a Scholarship Today!
            </p>
            
            <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-80">
              Our scholarship program offers financial assistance, mentorship, and opportunities for personal and academic growth
            </p>
          
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <h3 className="text-lg lg:text-xl font-semibold">Key Benefits:</h3>
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm lg:text-base">No IELTS, TOEFL, or Duolingo Required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm lg:text-base">Financial Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm lg:text-base">Access to Better Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm lg:text-base">Academic and Career Boost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm lg:text-base">Personal Growth & Mentorship</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
              <p className="text-xs lg:text-sm opacity-90">
                <strong>Exclusive Benefit:</strong> After payment confirmation, you'll be automatically invited to our exclusive WhatsApp community for ongoing support and networking!
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Auth forms */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-background p-4 lg:p-8 space-y-6">
          <div className="w-full max-w-md">
            {isSignIn ? (
              <SignInForm onToggleMode={() => setIsSignIn(false)} />
            ) : (
              <SignUpForm onToggleMode={() => setIsSignIn(true)} />
            )}
          </div>
          
          {/* Admin Setup Component */}
          <div className="w-full max-w-md">
            <AdminSetup />
          </div>
        </div>
      </div>
    </div>
  );
};
