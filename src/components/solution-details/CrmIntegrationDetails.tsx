import React from 'react';
import { Users, Database, Workflow, Shield, ArrowRight, XCircle } from 'lucide-react';
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

const CrmIntegrationDetails = () => {
  return (
    <DetailLayout
      title="Seamless CRM Integration"
      subtitle="Connect and synchronize your customer data across platforms with our intelligent CRM integration system."
      icon={Users}
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
            icon={Database}
            title="Data Synchronization"
            description="Real-time bi-directional sync ensures data consistency across all your platforms."
          />
          <FeatureCard
            icon={Workflow}
            title="Custom Workflows"
            description="Create automated workflows tailored to your specific business processes."
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade encryption and security for all your customer data."
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
          <MetricCard value="35%" label="Cost Reduction" />
          <MetricCard value="20h+" label="Weekly Time Saved" />
          <MetricCard value="95%" label="Error Reduction" />
          <MetricCard value="100%" label="Data Accuracy" />
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
            <h3 className="text-2xl font-bold mb-6">Supported Platforms</h3>
            <ul className="space-y-4">
              {[
                'Salesforce with custom object support',
                'HubSpot with workflow automation',
                'Zoho with multi-org capabilities',
                'Custom CRM via REST API'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Data Management</h3>
            <ul className="space-y-4">
              {[
                'Automated field mapping and validation',
                'Custom data transformation rules',
                'Historical data migration support',
                'Real-time conflict resolution'
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
            title="Data Entry Overload"
            description="Manual data entry is not only time-consuming but also takes valuable resources away from strategic tasks and customer engagement."
          />
          <DownsideCard
            title="Human Errors"
            description="Manual data entry is prone to mistakes, leading to duplicate records, missing information, and costly business decisions based on incorrect data."
          />
          <DownsideCard
            title="Delayed Follow-Ups"
            description="Without automated processes, lead response times increase significantly, resulting in missed opportunities and reduced conversion rates."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default CrmIntegrationDetails;