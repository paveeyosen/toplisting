import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  reasons = [
    {
      icon: '🎯',
      title: 'Data-Driven Strategy',
      desc: 'Every decision is backed by analytics, competitive intelligence, and real-time performance data.'
    },
    {
      icon: '🤖',
      title: 'AI-First Approach',
      desc: 'We leverage cutting-edge AI tools for content, ads optimization, and predictive customer behavior.'
    },
    {
      icon: '🚀',
      title: 'Fast Execution',
      desc: 'No bureaucracy. We move fast, test fast, and scale what works — delivering results within weeks.'
    },
    {
      icon: '🔍',
      title: 'Full SEO Coverage',
      desc: 'From traditional SEO to AEO and GEO — we ensure your brand is visible everywhere customers search.'
    },
    {
      icon: '📊',
      title: 'Transparent Reporting',
      desc: 'Real-time dashboards and bi-weekly reports so you always know exactly where your budget is going.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Partnership',
      desc: 'You get a dedicated account manager who understands your industry, goals, and vision deeply.'
    }
  ];
}
