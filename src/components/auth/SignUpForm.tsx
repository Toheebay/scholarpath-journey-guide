import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from './AuthProvider';
import { toast } from 'sonner';

declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

interface SignUpFormProps {
  onToggleMode: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!username || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Initialize Flutterwave payment
    window.FlutterwaveCheckout({
      public_key: "FLWPUBK-3d0e062fa50b5b538affc64535245178-X",
      tx_ref: "scholarship_payment_" + Date.now(),
      amount: 50,
      currency: "USD",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: email,
        name: username,
      },
      customizations: {
        title: "ScholarPath Scholarship Access",
        description: "Get access to 10,000+ fully funded scholarships",
        logo: "/src/assets/logo.png",
      },
      callback: async function (data: any) {
        console.log("Payment successful:", data);
        if (data.status === "successful") {
          await handleSuccessfulPayment();
        }
      },
      onclose: function () {
        console.log("Payment cancelled");
      },
    });
  };

  const handleSuccessfulPayment = async () => {
    setLoading(true);
    try {
      await signUp(email, password, { username, user_type: 'student' });
      toast.success('Account created successfully! Redirecting to WhatsApp group...');
      
      // Redirect to WhatsApp group
      setTimeout(() => {
        window.open('https://chat.whatsapp.com/HYuhxy58SXOB8wryDolhkl', '_blank');
      }, 2000);
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error('Payment successful but account creation failed. Please contact support.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Join ScholarPath</CardTitle>
        <CardDescription>Pay $50 to access 10,000+ fully funded scholarships</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePaymentSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Full Name</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Processing...' : 'Pay $50 & Join Scholarship Program'}
          </Button>
          <Button type="button" variant="ghost" className="w-full" onClick={onToggleMode}>
            Already have an account? Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};