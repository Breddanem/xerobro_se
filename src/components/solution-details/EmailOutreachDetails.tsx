import React from 'react';
import { Mail, Target, BarChart3, Zap, ArrowRight, XCircle } from 'lucide-react';
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

const EmailOutreachDetails = () => {
  return (
    <DetailLayout
      title="AI Email Outreach"
      subtitle="Transform your email campaigns with AI-powered personalization that drives engagement and delivers measurable results."
      icon={Mail}
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
            title="Smart Personalization"
            description="AI-driven content customization that resonates with each recipient's profile and behavior."
          />
          <FeatureCard
            icon={BarChart3}
            title="Performance Analytics"
            description="Real-time tracking and analysis of campaign metrics for continuous optimization."
          />
          <FeatureCard
            icon={Zap}
            title="Automated Testing"
            description="Intelligent A/B testing to identify and deploy the most effective email variants."
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
          <MetricCard value="55%" label="Open Rate" />
          <MetricCard value="32%" label="Response Rate" />
          <MetricCard value="2.5X" label="ROI Increase" />
          <MetricCard value="90%" label="Time Saved" />
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
              'Dynamic content personalization',
              'Sentiment analysis and tone adjustment',
              'Subject line optimization',
              'Smart send time prediction',
              'Automated follow-up sequences',
              'Response intent detection'
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
            title="Generic Messaging"
            description="Manually crafting emails results in generic, one-size-fits-all messages that fail to resonate with individual recipients."
          />
          <DownsideCard
            title="Low Engagement Rates"
            description="Without AI-driven insights and optimization, manual email campaigns suffer from poor open and response rates."
          />
          <DownsideCard
            title="Time-Consuming Process"
            description="Writing and tracking emails manually is inefficient and costly, limiting the scale and effectiveness of outreach efforts."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default EmailOutreachDetails;