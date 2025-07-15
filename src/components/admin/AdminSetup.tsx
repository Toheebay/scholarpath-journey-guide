
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const AdminSetup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createAdminUser = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-admin', {
        method: 'POST',
      });

      if (error) {
        console.error('Error invoking function:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to create admin user",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: "Admin user created successfully! You can now login with adebayo@admin.com",
      });
    } catch (error) {
      console.error('Unexpected error:', error);
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
