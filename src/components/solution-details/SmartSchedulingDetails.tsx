import React from 'react';
import { Calendar, Clock, Bell, BarChart3, ArrowRight, XCircle } from 'lucide-react';
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

const SmartSchedulingDetails = () => {
  return (
    <DetailLayout
      title="AI-Powered Smart Scheduling"
      subtitle="Revolutionize your appointment management with intelligent scheduling that learns and adapts to your business needs."
      icon={Calendar}
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
            icon={Clock}
            title="Time Optimization"
            description="AI algorithms optimize scheduling to maximize efficiency and minimize gaps."
          />
          <FeatureCard
            icon={Bell}
            title="Smart Reminders"
            description="Context-aware notifications reduce no-shows and improve attendance rates."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Dashboard"
            description="Comprehensive insights into scheduling patterns and efficiency metrics."
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
          <MetricCard value="60%" label="No-Show Reduction" />
          <MetricCard value="2X" label="Booking Increase" />
          <MetricCard value="95%" label="Client Satisfaction" />
          <MetricCard value="30%" label="Time Saved" />
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
            <h3 className="text-2xl font-bold mb-6">Smart Features</h3>
            <ul className="space-y-4">
              {[
                'Smart calendar management',
                'Automated reminders and follow-ups',
                'Multi-timezone support',
                'Integration with popular calendar apps',
                'Custom booking rules and availability',
                'Analytics and reporting'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Calendar Integrations</h3>
            <ul className="space-y-4">
              {[
                'Google Calendar with real-time sync',
                'Microsoft Outlook integration',
                'Apple iCloud calendar support',
                'Custom calendar API support'
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

      {/* Manual Labor Downsides section */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># MANUAL_PROCESS_LIMITATIONS</span>
          <h2 className="text-3xl font-bold">Manual Labor Downsides</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <DownsideCard
            title="Missed Opportunities"
            description="Manual booking processes often result in scheduling conflicts and delays, leading to lost business opportunities and frustrated clients."
          />
          <DownsideCard
            title="High No-Show Rates"
            description="Without automated reminders and follow-ups, businesses experience higher rates of missed appointments and wasted resources."
          />
          <DownsideCard
            title="Inefficient Coordination"
            description="Manually coordinating calendars across different time zones and availability windows is time-consuming and prone to errors."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default SmartSchedulingDetails;