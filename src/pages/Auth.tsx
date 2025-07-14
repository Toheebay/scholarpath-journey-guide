
import React, { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { Check } from 'lucide-react';

export const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Promotional content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 to-transparent"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6">
            Achieve More With Our
            <span className="block">Exclusive Scholarship</span>
            <span className="block">Opportunity</span>
          </h1>
          
          <p className="text-xl mb-8 opacity-90">
            Apply for a Scholarship Today!
          </p>
          
          <p className="text-lg mb-8 opacity-80">
            Our scholarship program offers financial assistance, mentorship, and opportunities for personal and academic growth
          </p>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Key Benefits:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span>No IELTS, TOEFL, or Duolingo Required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span>Financial Assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span>Access to Better Education</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span>Academic and Career Boost</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span>Personal Growth & Mentorship</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-90">
              <strong>Exclusive Benefit:</strong> After payment confirmation, you'll be automatically invited to our exclusive WhatsApp community for ongoing support and networking!
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side - Auth forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-md">
          {isSignIn ? (
            <SignInForm onToggleMode={() => setIsSignIn(false)} />
          ) : (
            <SignUpForm onToggleMode={() => setIsSignIn(true)} />
          )}
        </div>
      </div>
    </div>
  );
};
