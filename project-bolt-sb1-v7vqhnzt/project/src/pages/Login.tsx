import React from 'react';
import { Navigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { user, loading } = useAuth();

  // If user is already logged in, redirect to dashboard
  if (user && !loading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-xl text-gray-800">NutriAI</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© 2025 NutriAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;