
import React, { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';

export const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        {isSignIn ? (
          <SignInForm onToggleMode={() => setIsSignIn(false)} />
        ) : (
          <SignUpForm onToggleMode={() => setIsSignIn(true)} />
        )}
      </div>
    </div>
  );
};
