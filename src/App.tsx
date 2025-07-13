
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/components/auth/AuthProvider";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <DashboardLayout>{children}</DashboardLayout>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Index />} />
      <Route path="/auth" element={<PublicRoute><Auth /></PublicRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      {/* Placeholder routes for other pages */}
      <Route path="/scholarships" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Scholarships - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/applications" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Applications - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/documents" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Documents - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/roadmap" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Roadmap - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Notifications - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/community" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Community - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><div className="p-8"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
