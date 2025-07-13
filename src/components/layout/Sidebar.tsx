
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Search, 
  FileText, 
  MapPin, 
  Bell, 
  Users, 
  BarChart3,
  LogOut,
  User
} from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Find Scholarships', href: '/scholarships', icon: Search },
  { name: 'My Applications', href: '/applications', icon: FileText },
  { name: 'Documents', href: '/documents', icon: BookOpen },
  { name: 'Roadmap', href: '/roadmap', icon: MapPin },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Profile', href: '/profile', icon: User },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <div className="flex flex-col h-full bg-background border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">ScholarPath</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4">
        <Button variant="ghost" onClick={signOut} className="w-full justify-start">
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};
