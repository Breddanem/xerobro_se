import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Country codes for US and European countries
const countryCodes = [
  { code: '+1', country: 'United States' },
  { code: '+43', country: 'Austria' },
  { code: '+32', country: 'Belgium' },
  { code: '+385', country: 'Croatia' },
  { code: '+45', country: 'Denmark' },
  { code: '+372', country: 'Estonia' },
  { code: '+358', country: 'Finland' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+30', country: 'Greece' },
  { code: '+36', country: 'Hungary' },
  { code: '+353', country: 'Ireland' },
  { code: '+39', country: 'Italy' },
  { code: '+371', country: 'Latvia' },
  { code: '+370', country: 'Lithuania' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+356', country: 'Malta' },
  { code: '+31', country: 'Netherlands' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+351', country: 'Portugal' },
  { code: '+40', country: 'Romania' },
  { code: '+421', country: 'Slovakia' },
  { code: '+386', country: 'Slovenia' },
  { code: '+34', country: 'Spain' },
  { code: '+46', country: 'Sweden' },
  { code: '+41', country: 'Switzerland' },
  { code: '+44', country: 'United Kingdom' }
].sort((a, b) => a.country.localeCompare(b.country));

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Other'
];

const DeploymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    countryCode: '+46', // Default to Sweden
    phone: '',
    industry: '',
    automationNeeds: '',
    currentProcesses: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create a mailto link with the form data
      const subject = encodeURIComponent(`New Deployment Request from ${formData.businessName}`);
      const body = encodeURIComponent(`
Business Name: ${formData.businessName}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Industry: ${formData.industry}

Automation Needs:
${formData.automationNeeds}

Current Processes:
${formData.currentProcesses}
      `);

      // Open default email client with pre-filled data
      window.location.href = `mailto:info@xerobro.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          businessName: '',
          email: '',
          countryCode: '+46',
          phone: '',
          industry: '',
          automationNeeds: '',
          currentProcesses: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block">
              <div className="flex flex-col items-start">
                <span className="font-mono text-white/70 mb-2"># DEPLOYMENT_REQUEST</span>
                <h1 className="text-3xl font-bold text-white font-mono">
                  Initialize Deployment_
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              Your request has been sent successfully! We'll be in touch soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
              <XCircle className="h-5 w-5 mr-2" />
              There was an error sending your request. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your business email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-4">
                  <div className="relative">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="appearance-none bg-black/50 border border-white/20 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code}>
                          {code} ({country})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="appearance-none w-full bg-black/50 border border-white/20 rounded-lg pl-4 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="automationNeeds" className="block text-sm font-medium text-gray-300 mb-2">
                  What would you like to automate?
                </label>
                <textarea
                  id="automationNeeds"
                  name="automationNeeds"
                  value={formData.automationNeeds}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Describe the processes or tasks you'd like to automate"
                  required
                />
              </div>

              <div>
                <label htmlFor="currentProcesses" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Process Description
                </label>
                <textarea
                  id="currentProcesses"
                  name="currentProcesses"
                  value={formData.currentProcesses}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Describe your current processes and pain points"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeploymentForm;