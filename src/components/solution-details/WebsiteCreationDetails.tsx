import React from 'react';
import { Globe, Zap, Palette, BarChart3, ArrowRight, XCircle } from 'lucide-react';
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

const WebsiteCreationDetails = () => {
  return (
    <DetailLayout
      title="AI Website Creation"
      subtitle="Build stunning, conversion-optimized websites with AI-powered design and content generation."
      icon={Globe}
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
            icon={Palette}
            title="AI Design System"
            description="Intelligent design recommendations based on industry best practices and user behavior."
          />
          <FeatureCard
            icon={Zap}
            title="Smart Content"
            description="AI-generated content that's optimized for engagement and conversion."
          />
          <FeatureCard
            icon={BarChart3}
            title="Performance Analytics"
            description="Real-time insights and optimization recommendations for maximum impact."
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
          <MetricCard value="75%" label="Faster Development" />
          <MetricCard value="40%" label="Higher Conversion" />
          <MetricCard value="60%" label="Cost Reduction" />
          <MetricCard value="24/7" label="Optimization" />
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
              'Intelligent layout optimization',
              'Dynamic content personalization',
              'Automated SEO optimization',
              'Smart color scheme generation',
              'User behavior analysis',
              'Conversion path optimization'
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
            title="Time-Intensive Development"
            description="Traditional website development requires extensive manual coding and design work, leading to longer development cycles and higher costs."
          />
          <DownsideCard
            title="Limited Optimization"
            description="Manual website management lacks real-time optimization capabilities, resulting in missed opportunities for improved performance."
          />
          <DownsideCard
            title="Static Content"
            description="Manually created websites often feature static content that doesn't adapt to user behavior or preferences."
          />
          <DownsideCard
            title="Inconsistent Design"
            description="Manual design processes can lead to inconsistent branding and user experience across different pages and sections."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default WebsiteCreationDetails;