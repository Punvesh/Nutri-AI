import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
        <button
          onClick={signOut}
          className="text-sm text-gray-600 hover:text-emerald-600"
        >
          Sign Out
        </button>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 mt-2">
          <span className="font-medium">User ID:</span> {user.id.substring(0, 8)}...
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your Nutrition Plan</h3>
        <p className="text-gray-600">
          Your personalized nutrition plan is being prepared. Our AI is analyzing your data to create recommendations tailored to your unique biology.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;