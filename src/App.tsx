import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import DeploymentForm from './components/DeploymentForm';
import LeadCaptureDetails from './components/solution-details/LeadCaptureDetails';
import CrmIntegrationDetails from './components/solution-details/CrmIntegrationDetails';
import SmartSchedulingDetails from './components/solution-details/SmartSchedulingDetails';
import CustomerSupportDetails from './components/solution-details/CustomerSupportDetails';
import EmailOutreachDetails from './components/solution-details/EmailOutreachDetails';
import SocialMediaAutomationDetails from './components/solution-details/SocialMediaAutomationDetails';
import WebsiteCreationDetails from './components/solution-details/WebsiteCreationDetails';
import AICallCenterDetails from './components/solution-details/AICallCenterDetails';

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if we're not returning to the home page
    if (!location.pathname.includes('policy') && !location.pathname.includes('terms')) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"
          style={{
            background: `
              radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 100%),
              radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
              radial-gradient(2px 2px at 70% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 100%),
              radial-gradient(2px 2px at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
            `,
            backgroundSize: '250px 250px',
            animation: 'twinkle 8s ease-in-out infinite alternate',
          }}
        />
        
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(255, 0, 221, 0.1) 0%, transparent 40%)
            `,
            filter: 'blur(20px)',
            animation: 'nebulaPulse 15s ease-in-out infinite',
          }}
        />
        
        <div className="absolute inset-0 grid-animation opacity-20" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Solutions />
        <Technologies />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/deploy" element={<DeploymentForm />} />
        <Route path="/lead-capture-details" element={<LeadCaptureDetails />} />
        <Route path="/crm-integration-details" element={<CrmIntegrationDetails />} />
        <Route path="/smart-scheduling-details" element={<SmartSchedulingDetails />} />
        <Route path="/customer-support-ai-details" element={<CustomerSupportDetails />} />
        <Route path="/email-outreach-details" element={<EmailOutreachDetails />} />
        <Route path="/social-media-automation-details" element={<SocialMediaAutomationDetails />} />
        <Route path="/website-creation-details" element={<WebsiteCreationDetails />} />
        <Route path="/ai-call-center-details" element={<AICallCenterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;