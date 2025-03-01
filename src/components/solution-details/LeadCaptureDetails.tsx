import React from 'react';
import { BrainCircuit, Target, BarChart3, Users, ArrowRight, XCircle } from 'lucide-react';
import DetailLayout from '../DetailLayout';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
    <div className="inline-block p-3 rounded-lg bg-white/10 mb-6">
      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const MetricCard = ({ value, label }: { value: string, label: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group">
    <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const DownsideCard = ({ title, description }: { title: string, description: string }) => (
  <div className="flex items-start space-x-4 p-6 rounded-lg bg-white/5 border border-white/10">
    <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
    <div>
      <h4 className="text-lg font-bold text-red-400 mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const LeadCaptureDetails = () => {
  return (
    <DetailLayout
      title="Advanced Lead Capture System"
      subtitle="Transform your lead generation process with AI-powered automation that captures, qualifies, and nurtures leads with unprecedented efficiency."
      icon={BrainCircuit}
    >
      {/* Key Features */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># FEATURES</span>
          <h2 className="text-3xl font-bold">Key Capabilities</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Intelligent Targeting"
            description="AI algorithms analyze user behavior to optimize lead capture forms and messaging in real-time."
          />
          <FeatureCard
            icon={BarChart3}
            title="Advanced Analytics"
            description="Comprehensive analytics dashboard with real-time insights and conversion tracking."
          />
          <FeatureCard
            icon={Users}
            title="Lead Scoring"
            description="Automated lead scoring system that prioritizes high-value prospects."
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># METRICS</span>
          <h2 className="text-3xl font-bold">Performance Impact</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard value="45%" label="Conversion Rate Increase" />
          <MetricCard value="3X" label="Lead Quality Improvement" />
          <MetricCard value="24/7" label="Automated Operation" />
          <MetricCard value="99.9%" label="System Uptime" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># SPECIFICATIONS</span>
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Integration Capabilities</h3>
            <ul className="space-y-4">
              {[
                'REST API endpoints with comprehensive documentation',
                'Webhook support for real-time event handling',
                'Custom field mapping for flexible data structure',
                'Real-time data synchronization across platforms'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Security Features</h3>
            <ul className="space-y-4">
              {[
                'End-to-end encryption for all data transfers',
                'GDPR and CCPA compliance built-in',
                'Automated data backup and recovery',
                'Role-based access control system'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Manual Labor Downsides */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># MANUAL_PROCESS_LIMITATIONS</span>
          <h2 className="text-3xl font-bold">Manual Labor Downsides</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <DownsideCard
            title="Slow & Inefficient"
            description="Manually collecting leads is time-consuming and prone to errors, resulting in lost opportunities and wasted resources."
          />
          <DownsideCard
            title="High Drop-Off Rates"
            description="Lack of instant engagement means potential leads lose interest and move on before being properly captured and nurtured."
          />
          <DownsideCard
            title="Poor Lead Qualification"
            description="Without automation, there's no systematic way to prioritize and qualify leads, leading to inefficient resource allocation."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default LeadCaptureDetails;