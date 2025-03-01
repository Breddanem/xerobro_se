import React from 'react';
import { Bot, Cpu, Workflow, Zap, Blocks } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: Bot,
      name: 'Voiceflow',
      description: 'Conversational AI Design'
    },
    {
      icon: Cpu,
      name: 'OpenAI',
      description: 'Advanced Language Models'
    },
    {
      icon: Zap,
      name: 'Instantly',
      description: 'Automated Outreach'
    },
    {
      icon: Workflow,
      name: 'Make',
      description: 'Workflow Automation'
    },
    {
      icon: Blocks,
      name: 'Bland.ai',
      description: 'Voice AI Solutions'
    }
  ];

  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># TECH_STACK</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Technologies We Use_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="group">
                <div className="relative p-6 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover-glow flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-white/90 to-white/70 p-2 mb-4 glow-sm">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono glow-text">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;