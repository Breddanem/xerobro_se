import React from 'react';
import { Phone, Mic, Brain, BarChart3, ArrowRight, XCircle } from 'lucide-react';
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

const AICallCenterDetails = () => {
  return (
    <DetailLayout
      title="AI Call Center"
      subtitle="Transform your call center operations with intelligent voice AI that provides 24/7 support while reducing costs."
      icon={Phone}
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
            icon={Mic}
            title="Natural Voice AI"
            description="Human-like voice interactions powered by advanced speech recognition and synthesis."
          />
          <FeatureCard
            icon={Brain}
            title="Smart Routing"
            description="Intelligent call routing and prioritization based on context and urgency."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Dashboard"
            description="Comprehensive insights into call patterns, resolution rates, and customer satisfaction."
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
          <MetricCard value="65%" label="Cost Reduction" />
          <MetricCard value="90%" label="First Call Resolution" />
          <MetricCard value="24/7" label="Availability" />
          <MetricCard value="0s" label="Wait Time" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># SPECIFICATIONS</span>
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="p-8 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">AI Features</h3>
          <ul className="space-y-4">
            {[
              'Natural language understanding',
              'Real-time voice analysis',
              'Sentiment detection',
              'Multi-language support',
              'Context-aware responses',
              'Seamless human handoff'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-400 group">
                <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                {item}
              </li>
            ))}
          </ul>
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
            title="High Operational Costs"
            description="Traditional call centers require large teams of agents, leading to significant overhead costs in salaries, training, and infrastructure."
          />
          <DownsideCard
            title="Limited Availability"
            description="Human agents can only work fixed hours, making 24/7 coverage expensive and logistically challenging."
          />
          <DownsideCard
            title="Inconsistent Service"
            description="Quality of service varies between agents and can be affected by factors like fatigue and emotional state."
          />
          <DownsideCard
            title="Long Wait Times"
            description="Peak call volumes can lead to long customer wait times and frustrated callers."
          />
          <DownsideCard
            title="Language Limitations"
            description="Supporting multiple languages requires hiring and maintaining multilingual staff, increasing complexity and costs."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default AICallCenterDetails;