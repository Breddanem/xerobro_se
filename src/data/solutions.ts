import { BrainCircuit, Users, Calendar, MessageSquare, Mail, Share2, Globe, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string[];
  features: string[];
}

export const solutions: Solution[] = [
  {
    icon: BrainCircuit,
    title: 'Lead Capture',
    description: 'Effortlessly collect and organize leads through forms, chatbots, or landing pages.',
    stats: [
      '45% Increase in Conversion',
      '3X More Qualified Leads'
    ],
    features: [
      'Targeted Outreach with AI-driven insights',
      'Efficient Scaling to reach 100s daily',
      'Real-Time Analytics for ROI optimization'
    ]
  },
  {
    icon: Users,
    title: 'CRM Integration',
    description: 'Seamlessly sync captured leads into your CRM system for better management and follow-up.',
    stats: [
      '35% Reduced Cost per Lead'
    ],
    features: [
      'Automated lead categorization',
      'Custom CRM workflows',
      'API-based integrations for smooth data transfer'
    ]
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automate appointment bookings and follow-ups with AI-powered scheduling tools.',
    stats: [
      '60% Reduction in No-Shows',
      '2X More Meetings Scheduled'
    ],
    features: [
      'Intelligent Time Slot Optimization',
      'Seamless Calendar & CRM Integration',
      'Automated Reminders & Rescheduling'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Customer Support AI',
    description: 'Manage customer inquiries effectively with an AI-powered ticketing system that organizes, prioritizes, and resolves issues.',
    stats: [
      '70% Faster Response Time',
      '500h Saved per Month',
      '92% Customer Satisfaction'
    ],
    features: [
      'Instant AI responses for 85% of queries',
      'Smart issue escalation system',
      'Personalized customer interactions'
    ]
  },
  {
    icon: Mail,
    title: 'AI Email Outreach',
    description: 'Engage prospects with AI-crafted, personalized email campaigns that deliver highly relevant messages at scale.',
    stats: [
      '55% Open Rate',
      '32% Response Rate',
      '2.5X ROI Increase'
    ],
    features: [
      'Smart personalization',
      'A/B testing',
      'Performance analytics'
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    description: 'Leverage AI to connect with your target audience on social platforms like Instagram, LinkedIn, and Facebook.',
    stats: [
      '85% Time Saved',
      '3X Engagement Rate',
      '60% Reach Increase'
    ],
    features: [
      'Multi-platform management',
      'Content scheduling',
      'Engagement automation'
    ]
  },
  {
    icon: Globe,
    title: 'Website Creation',
    description: 'Build stunning, AI-powered websites that adapt and optimize for maximum conversion and engagement.',
    stats: [
      '75% Faster Development',
      '40% Higher Conversion',
      '24/7 Optimization'
    ],
    features: [
      'AI-driven design recommendations',
      'Smart content generation',
      'Automated SEO optimization'
    ]
  },
  {
    icon: Phone,
    title: 'AI Call Center',
    description: 'Transform your call center operations with AI-powered voice assistants that handle calls efficiently and intelligently.',
    stats: [
      '65% Cost Reduction',
      '90% First Call Resolution',
      '24/7 Availability'
    ],
    features: [
      'Natural language processing',
      'Real-time voice analysis',
      'Seamless human handoff'
    ]
  }
];