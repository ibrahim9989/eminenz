import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import AboutSummary from './components/home/AboutSummary';
import Services from './components/home/Services';
import Testimonials from './components/home/Testimonials';
import Projects from './components/projects/Projects';
import ContactSection from './components/contact/ContactSection';
import ContactForm from './components/careers/ContactForm';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/pages/AdminLogin';
import PageLoader from './components/layout/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <main>
                <Hero />
                <AboutSummary />
                <Services />
                <Projects />
                <Testimonials />
                <ContactSection />
                <ContactForm />
              </main>
            </div>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          {/* Add admin dashboard routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;