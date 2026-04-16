import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-section.component.html',
  styleUrls: ['./packages-section.component.scss']
})
export class PackagesSectionComponent {
  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '124, 58, 237';
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }

  packages = [
    {
      name: 'Starter',
      tagline: 'Perfect to get your brand visible online.',
      price: 'Custom',
      highlight: false,
      badge: null,
      color: '#2563eb',
      features: [
        'Social Media (10–15 posts/month)',
        'Basic On-Page SEO',
        '1 Ad Campaign (Google or Meta)',
        'Monthly Performance Report',
        'Email Support'
      ]
    },
    {
      name: 'Growth',
      tagline: 'Scale traffic, leads & conversions faster.',
      price: 'Custom',
      highlight: true,
      badge: 'Most Popular',
      color: '#7c3aed',
      features: [
        'Full SEO + Content Marketing',
        'Social Media + Paid Ads Management',
        'Email Automation (drip campaigns)',
        'Lead Generation Funnel',
        'Bi-weekly Strategy Calls',
        'Advanced Analytics & Reporting',
        'Priority Support'
      ]
    },
    {
      name: 'Premium',
      tagline: 'End-to-end marketing dominance with AI.',
      price: 'Custom',
      highlight: false,
      badge: 'Best Results',
      color: '#06b6d4',
      features: [
        'Full Funnel (Ads + Landing Pages)',
        'SEO + AEO + GEO Coverage',
        'AI Automation + Chatbots',
        'Advanced Analytics Dashboard',
        'Video Marketing & Reels',
        'ORM – Reputation Management',
        'Dedicated Account Manager',
        'Weekly Strategy Sessions'
      ]
    }
  ];
}
