import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
        <h1 className="text-xl font-bold text-white font-mono">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;