import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  serviceLinks = [
    'SEO & AEO & GEO',
    'Social Media Marketing',
    'Pay-Per-Click Ads',
    'Content Marketing',
    'Email Marketing',
    'Lead Generation',
    'AI-Powered Marketing',
    'Branding & Strategy'
  ];

  companyLinks = [
    { label: 'Home', anchor: 'hero' },
    { label: 'Services', anchor: 'services' },
    { label: 'Packages', anchor: 'packages' },
    { label: 'Why Us', anchor: 'why-us' },
    { label: 'Contact', anchor: 'contact' }
  ];
}
