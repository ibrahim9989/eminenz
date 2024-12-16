import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home,
  FileText,
  Users,
  MessageSquare,
  Image,
  Settings
} from 'lucide-react';

const AdminSidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard />, label: 'Dashboard', to: '/admin' },
    { icon: <Home />, label: 'Home Content', to: '/admin/home' },
    { icon: <FileText />, label: 'About', to: '/admin/about' },
    { icon: <Users />, label: 'Team', to: '/admin/team' },
    { icon: <MessageSquare />, label: 'Testimonials', to: '/admin/testimonials' },
    { icon: <Image />, label: 'Media', to: '/admin/media' },
    { icon: <Settings />, label: 'Settings', to: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-8">
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;