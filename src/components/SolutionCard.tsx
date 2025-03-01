import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Solution } from '../data/solutions';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const navigate = useNavigate();
  const { icon: Icon, title, description, stats, features } = solution;
  
  const getDetailPath = () => {
    switch (title) {
      case 'Lead Capture':
        return '/lead-capture-details';
      case 'CRM Integration':
        return '/crm-integration-details';
      case 'Smart Scheduling':
        return '/smart-scheduling-details';
      case 'Customer Support AI':
        return '/customer-support-ai-details';
      case 'AI Email Outreach':
        return '/email-outreach-details';
      case 'Social Media Automation':
        return '/social-media-automation-details';
      case 'Website Creation':
        return '/website-creation-details';
      case 'AI Call Center':
        return '/ai-call-center-details';
      default:
        return '/';
    }
  };
  
  return (
    <div className="p-8 rounded-lg bg-black border border-white/20 hover:bg-black/80 transition-colors group cursor-pointer hover-glow">
      <div className="flex flex-col h-full">
        <Icon className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg p-3 border border-white/10"
            >
              <p className="text-white font-mono">{stat}</p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-400 flex items-center">
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <button 
          onClick={() => navigate(getDetailPath())}
          className="mt-auto group/btn flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white font-mono"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default SolutionCard