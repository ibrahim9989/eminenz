import React from 'react';
import { LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AdminHeader = () => {
  const { signOut, user } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Eminenz Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user?.email}</span>
            <button
              onClick={() => signOut()}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;