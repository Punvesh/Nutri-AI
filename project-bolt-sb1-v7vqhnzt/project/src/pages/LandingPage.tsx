import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Dna, 
  LineChart, 
  Apple, 
  Utensils, 
  Activity, 
  Droplets, 
  Microscope, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LandingPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-xl text-gray-800">NutriAI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-emerald-500 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-emerald-500 transition-colors">Pricing</a>
            <a href="#science" className="text-gray-600 hover:text-emerald-500 transition-colors">Science</a>
          </nav>
          <div className="flex space-x-4">
            {user ? (
              <Link to="/dashboard" className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm">
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                  Log In
                </Link>
                <Link to="/login" className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Nutrition as <span className="text-emerald-500">unique</span> as you are
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                The world's first AI-powered nutrition platform that adapts to your biology, preferences, and goals in real-time.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to={user ? "/dashboard" : "/login"} className="px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-md font-medium text-center">
                  {user ? "Go to Dashboard" : "Start Your Journey"}
                </Link>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Person analyzing nutrition data on a tablet" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-500 mb-2">15.9%</p>
              <p className="text-gray-600">Market Growth</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-500 mb-2">$8.2B</p>
              <p className="text-gray-600">Market Value</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-500 mb-2">80%+</p>
              <p className="text-gray-600">Goal Achievement</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-500 mb-2">1.7B</p>
              <p className="text-gray-600">Health App Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines multiple data streams with advanced AI to deliver truly personalized nutrition guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Dna className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genetic Analysis</h3>
              <p className="text-gray-600">
                Personalized nutrition based on your unique genetic profile and predispositions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <LineChart className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Adaptation</h3>
              <p className="text-gray-600">
                Continuous monitoring and adjustment based on your body's responses to foods.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Apple className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Meal Planning</h3>
              <p className="text-gray-600">
                AI-generated meal plans that adapt to your preferences, schedule, and nutritional needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Activity className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biometric Integration</h3>
              <p className="text-gray-600">
                Seamless connection with wearables and health devices for comprehensive monitoring.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Droplets className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biomarker Tracking</h3>
              <p className="text-gray-600">
                Monitor key health indicators and see how dietary changes impact your body.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                <Utensils className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Support</h3>
              <p className="text-gray-600">
                Direct integration with grocery delivery, meal kits, and food services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach creates a continuous cycle of improvement for your nutrition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-4 h-20 w-20">
                <Dna className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Collection</h3>
              <p className="text-gray-600">
                We gather information from your genetics, wearables, blood work, and preferences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-4 h-20 w-20">
                <Brain className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithms identify patterns and optimal nutritional approaches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-4 h-20 w-20">
                <Utensils className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Plan</h3>
              <p className="text-gray-600">
                Receive customized recommendations, meal plans, and actionable guidance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-4 h-20 w-20">
                <LineChart className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                Your plan adapts based on your results, feedback, and changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your nutrition?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have discovered their optimal nutrition path with our AI-powered platform.
          </p>
          <Link to={user ? "/dashboard" : "/login"} className="px-8 py-4 bg-white text-emerald-500 rounded-lg hover:bg-gray-100 transition-colors shadow-md font-medium text-lg inline-flex items-center">
            {user ? "Go to Dashboard" : "Start Your Free Trial"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-emerald-200 mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-emerald-500" />
              <span className="font-bold text-white">NutriAI</span>
            </div>
            <p className="text-sm">© 2025 NutriAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;