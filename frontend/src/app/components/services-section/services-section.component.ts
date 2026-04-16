import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  icon: string;
  title: string;
  tagline: string;
  items: string[];
  color: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  services: Service[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  activeTab = signal(0);

  categories: ServiceCategory[] = [
    {
      id: 'seo',
      label: 'SEO & Search',
      icon: '🔍',
      services: [
        {
          icon: '🔍',
          title: 'Search Engine Optimization',
          tagline: 'Rank higher. Get found. Drive traffic.',
          color: '#7c3aed',
          items: ['On-page SEO & meta optimization', 'Technical SEO & Core Web Vitals', 'Off-page SEO & link building', 'Local SEO & Google Business Profile', 'Keyword Research & Strategy', 'SEO Audits & Competitor Analysis']
        },
        {
          icon: '🤖',
          title: 'AEO – Answer Engine Optimization',
          tagline: 'Own featured snippets and voice results.',
          color: '#2563eb',
          items: ['Featured Snippet Optimization', 'FAQ & Schema Markup', 'Voice Search Optimization', 'Conversational Content Creation', 'Zero-click search strategies']
        },
        {
          icon: '🌍',
          title: 'GEO – Generative Engine Optimization',
          tagline: 'Win in AI-powered search (SGE, ChatGPT).',
          color: '#0891b2',
          items: ['AI search optimization for ChatGPT & SGE', 'Topic authority & content clustering', 'Semantic SEO', 'E-E-A-T optimization', 'AI-friendly content structuring']
        }
      ]
    },
    {
      id: 'ads',
      label: 'Paid Ads',
      icon: '💰',
      services: [
        {
          icon: '💰',
          title: 'Pay-Per-Click Advertising',
          tagline: 'Targeted ads. Maximum conversions.',
          color: '#d97706',
          items: ['Google Ads (Search, Display, YouTube)', 'Meta Ads (Facebook / Instagram)', 'LinkedIn Ads for B2B', 'Retargeting Campaigns', 'Ad Copywriting & Creatives', 'Conversion Tracking & Optimization']
        },
        {
          icon: '📱',
          title: 'Social Media Marketing',
          tagline: 'Build community. Drive engagement.',
          color: '#db2777',
          items: ['Content Creation (posts, reels, stories)', 'Social Media Management', 'Paid Ads (Meta, Instagram, LinkedIn)', 'Influencer Marketing', 'Community Management', 'Social Media Strategy & Growth']
        }
      ]
    },
    {
      id: 'content',
      label: 'Content & Email',
      icon: '✍️',
      services: [
        {
          icon: '✍️',
          title: 'Content Marketing',
          tagline: 'Content that educates, converts and ranks.',
          color: '#059669',
          items: ['Blog Writing & SEO Content', 'Website Copywriting', 'Ad Copywriting', 'Video Scripts & Reels Content', 'Infographics & Visual Content', 'Content Strategy & Planning']
        },
        {
          icon: '📧',
          title: 'Email Marketing',
          tagline: 'Nurture leads. Automate growth.',
          color: '#7c3aed',
          items: ['Email Campaign Design', 'Automation Flows (drip campaigns)', 'Newsletter Creation', 'Lead Nurturing Sequences', 'Cold Email Campaigns', 'Email Copywriting']
        },
        {
          icon: '🎥',
          title: 'Video Marketing',
          tagline: 'Visual storytelling that converts.',
          color: '#dc2626',
          items: ['YouTube Channel Management', 'Short-form Videos (Reels, Shorts)', 'Video Ads Creation', 'Explainer Videos', 'AI Video Generation', 'Video SEO Optimization']
        }
      ]
    },
    {
      id: 'growth',
      label: 'Growth & AI',
      icon: '🚀',
      services: [
        {
          icon: '🤖',
          title: 'AI-Powered Marketing',
          tagline: 'Automate. Predict. Outperform.',
          color: '#7c3aed',
          items: ['AI Content Generation', 'AI Chatbots for Lead Generation', 'AI Ad Optimization', 'Predictive Marketing (customer behavior)', 'Marketing Automation (Zapier, CRM)']
        },
        {
          icon: '🎯',
          title: 'Lead Generation',
          tagline: 'Qualified leads delivered at scale.',
          color: '#2563eb',
          items: ['Funnel Design (landing pages)', 'Lead Magnets (ebooks, offers)', 'CRM Integration', 'B2B Lead Generation', 'LinkedIn Outreach', 'Cold Email Systems']
        },
        {
          icon: '📊',
          title: 'Analytics & Performance',
          tagline: 'Data-driven decisions, measurable results.',
          color: '#0891b2',
          items: ['Google Analytics Setup', 'Conversion Tracking', 'Funnel Analysis', 'Heatmaps & User Behavior', 'A/B Testing', 'ROI Reporting Dashboards']
        }
      ]
    },
    {
      id: 'brand',
      label: 'Brand & Web',
      icon: '🧠',
      services: [
        {
          icon: '🧠',
          title: 'Branding & Strategy',
          tagline: 'Position your brand for authority.',
          color: '#7c3aed',
          items: ['Brand Positioning', 'Go-to-Market Strategy', 'Marketing Funnel Strategy', 'Competitor Research', 'Audience Persona Development']
        },
        {
          icon: '🌐',
          title: 'Website & CRO',
          tagline: 'Turn visitors into paying customers.',
          color: '#059669',
          items: ['Landing Page Optimization', 'UX/UI Improvements', 'Conversion Rate Optimization', 'Speed Optimization', 'A/B Testing']
        },
        {
          icon: '🔐',
          title: 'Online Reputation Management',
          tagline: 'Protect and strengthen your brand image.',
          color: '#d97706',
          items: ['Review Management', 'Negative Content Suppression', 'Brand Monitoring', 'PR & Media Outreach']
        },
        {
          icon: '🛒',
          title: 'E-Commerce Marketing',
          tagline: 'Scale your online store revenue.',
          color: '#db2777',
          items: ['Product Listing Optimization', 'Amazon / Marketplace SEO', 'Cart Abandonment Recovery', 'Retargeting Ads', 'Upselling & Cross-selling Strategies']
        }
      ]
    }
  ];

  setTab(index: number) {
    this.activeTab.set(index);
  }

  get activeServices(): Service[] {
    return this.categories[this.activeTab()].services;
  }

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '124, 58, 237';
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
}
