import React from 'react';
import { BrainCircuit, Gauge, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'AI Expertise',
      description: 'Our team of AI and automation experts is committed to empowering businesses with innovative, tailor-made solutions.'
    },
    {
      icon: Gauge,
      title: 'Efficiency Focus',
      description: 'We specialize in automating repetitive tasks and streamlining workflows to save time and reduce operational costs.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Driven',
      description: 'Position your company for success in today\'s competitive environment with our cutting-edge solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># ABOUT_US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Expert AI Automation Solutions_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover-glow">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-white/90 to-white/70 p-2 mb-4 glow-sm">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono glow-text">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;