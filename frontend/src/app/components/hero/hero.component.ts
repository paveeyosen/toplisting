import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '10x', label: 'Average ROI' },
    { value: '5+', label: 'Years Experience' }
  ];
}
