import React from 'react';
import { Navigate } from 'react-router-dom';
import { Brain, LineChart, Apple, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import UserProfile from '../components/UserProfile';

const Dashboard: React.FC = () => {
  const { user, loading, signOut } = useAuth();

  // If user is not logged in, redirect to login page
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-xl text-gray-800">NutriAI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">Meal Plans</a>
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">Insights</a>
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">Settings</a>
          </nav>
          <div>
            <button 
              onClick={signOut}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome to Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile */}
          <div className="md:col-span-1">
            <UserProfile />
          </div>
          
          {/* Dashboard Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Activity className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Daily Progress</p>
                  <p className="text-xl font-semibold text-gray-900">68%</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Apple className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Meals Logged</p>
                  <p className="text-xl font-semibold text-gray-900">2/5</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <LineChart className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weekly Trend</p>
                  <p className="text-xl font-semibold text-emerald-500">+12%</p>
                </div>
              </div>
            </div>
            
            {/* Recommendations */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Recommendations</h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-gray-900">Increase protein intake</h3>
                  <p className="text-gray-600 text-sm mt-1">Based on your activity level and goals, we recommend adding 15g of protein to your breakfast.</p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-gray-900">Hydration reminder</h3>
                  <p className="text-gray-600 text-sm mt-1">You're 20% below your optimal hydration level. Aim for 2 more glasses of water today.</p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-gray-900">Nutrient optimization</h3>
                  <p className="text-gray-600 text-sm mt-1">Your vitamin D levels could be improved. Consider 15 minutes of morning sunlight or a supplement.</p>
                </div>
              </div>
            </div>
            
            {/* Upcoming Meals */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Meal Plan</h2>
              <p className="text-gray-600 mb-4">Here's your AI-generated meal plan for today based on your preferences and nutritional needs.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">Breakfast</p>
                    <p className="text-gray-600 text-sm">Greek yogurt with berries and nuts</p>
                  </div>
                  <span className="text-sm text-gray-500">7:30 AM</span>
                </div>
                
                <div className="flex justify-between items-center p-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">Lunch</p>
                    <p className="text-gray-600 text-sm">Grilled chicken salad with avocado</p>
                  </div>
                  <span className="text-sm text-gray-500">12:30 PM</span>
                </div>
                
                <div className="flex justify-between items-center p-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">Snack</p>
                    <p className="text-gray-600 text-sm">Apple with almond butter</p>
                  </div>
                  <span className="text-sm text-gray-500">3:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center p-3">
                  <div>
                    <p className="font-medium text-gray-900">Dinner</p>
                    <p className="text-gray-600 text-sm">Salmon with roasted vegetables</p>
                  </div>
                  <span className="text-sm text-gray-500">7:00 PM</span>
                </div>
              </div>
              
              <button className="mt-6 w-full py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium">
                View Full Meal Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;