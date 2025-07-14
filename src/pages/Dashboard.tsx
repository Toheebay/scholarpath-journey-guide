
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Navbar } from '@/components/layout/Navbar';
import { 
  BookOpen, 
  Search, 
  FileText, 
  MapPin, 
  Bell, 
  Users,
  TrendingUp,
  Calendar,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <DashboardLayout>
        <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome to ScholarPath</h1>
        <p className="text-muted-foreground mt-2">
          Your journey to scholarship success starts here
        </p>
      </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Scholarships</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+180</span> new this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">2</span> pending review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> vs last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Deadline</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">days remaining</p>
          </CardContent>
        </Card>
      </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Find Scholarships</CardTitle>
                <CardDescription>AI-powered search across 10,000+ opportunities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link to="/scholarships">
              <Button className="w-full">Start Searching</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-lg">My Roadmap</CardTitle>
                <CardDescription>Personalized step-by-step success plan</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link to="/roadmap">
              <Button className="w-full" variant="outline">View Roadmap</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Document Assistant</CardTitle>
                <CardDescription>AI-powered templates and review</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link to="/documents">
              <Button className="w-full" variant="outline">Create Documents</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Track your latest scholarship applications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Global Excellence Scholarship</p>
                <p className="text-sm text-muted-foreground">United States • $50,000</p>
              </div>
              <Badge variant="secondary">Under Review</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Commonwealth Scholarship</p>
                <p className="text-sm text-muted-foreground">United Kingdom • $40,000</p>
              </div>
              <Badge variant="outline">Planning</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">European Research Grant</p>
                <p className="text-sm text-muted-foreground">Germany • $30,000</p>
              </div>
              <Badge variant="default">Applied</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Don't miss these important dates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Canadian Merit Award</p>
                <p className="text-sm text-muted-foreground">Application due</p>
              </div>
              <Badge variant="destructive">12 days</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Asian Development Scholarship</p>
                <p className="text-sm text-muted-foreground">Documents submission</p>
              </div>
              <Badge variant="secondary">25 days</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">European Research Grant</p>
                <p className="text-sm text-muted-foreground">Interview preparation</p>
              </div>
              <Badge variant="outline">1 month</Badge>
            </div>
          </CardContent>
          </Card>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};
