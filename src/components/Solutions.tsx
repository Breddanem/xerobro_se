import React from 'react';
import { solutions } from '../data/solutions';
import SolutionCard from './SolutionCard';

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># SOLUTIONS_MATRIX</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                AI Lead Solutions_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;