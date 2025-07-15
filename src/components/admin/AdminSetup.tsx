
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const AdminSetup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createAdminUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('/functions/v1/create-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "Admin user created successfully! You can now login with adebayo@admin.com",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to create admin user",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create admin user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-muted">
      <h3 className="text-lg font-semibold mb-2">Admin Setup</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Click the button below to create the admin user account. This only needs to be done once.
      </p>
      <Button 
        onClick={createAdminUser} 
        disabled={loading}
        variant="outline"
      >
        {loading ? 'Creating Admin...' : 'Create Admin User'}
      </Button>
    </div>
  );
};
