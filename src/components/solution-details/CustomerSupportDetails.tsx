import React from 'react';
import { MessageSquare, Zap, Brain, BarChart3, ArrowRight, XCircle } from 'lucide-react';
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

const CustomerSupportDetails = () => {
  return (
    <DetailLayout
      title="AI-Powered Customer Support"
      subtitle="Transform your customer support with intelligent automation that delivers faster responses and higher satisfaction rates."
      icon={MessageSquare}
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
            icon={Zap}
            title="Instant Response"
            description="AI-powered responses to common queries within seconds, available 24/7."
          />
          <FeatureCard
            icon={Brain}
            title="Smart Learning"
            description="System continuously learns from interactions to improve response accuracy."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Dashboard"
            description="Comprehensive insights into support performance and customer satisfaction."
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
          <MetricCard value="70%" label="Faster Response" />
          <MetricCard value="500h" label="Monthly Time Saved" />
          <MetricCard value="92%" label="Customer Satisfaction" />
          <MetricCard value="85%" label="Auto-Resolution Rate" />
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
            <h3 className="text-2xl font-bold mb-6">AI Capabilities</h3>
            <ul className="space-y-4">
              {[
                'Instant AI responses for common queries',
                'Smart ticket routing and prioritization',
                'Automated follow-ups and resolution tracking',
                'Multi-language support',
                '24/7 availability',
                'Advanced analytics dashboard'
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
            title="Slow Response Times"
            description="Human agents can only handle a limited number of queries simultaneously, leading to longer wait times and customer frustration."
          />
          <DownsideCard
            title="High Operational Costs"
            description="Maintaining a large support team to handle customer inquiries is expensive and inefficient compared to AI-powered solutions."
          />
          <DownsideCard
            title="Inconsistent Quality"
            description="Manual responses vary in accuracy and tone depending on the agent, leading to inconsistent customer experiences."
          />
          <DownsideCard
            title="24/7 Availability Issues"
            description="Providing round-the-clock support with human agents is costly and logistically challenging."
          />
          <DownsideCard
            title="Overloaded Support Teams"
            description="High volumes of inquiries can overwhelm human agents, resulting in burnout and degraded service quality."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default CustomerSupportDetails;