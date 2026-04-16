import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { PackagesSectionComponent } from '../../components/packages-section/packages-section.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesSectionComponent,
    PackagesSectionComponent,
    WhyUsComponent,
    ContactSectionComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-services-section></app-services-section>
    <app-packages-section></app-packages-section>
    <app-why-us></app-why-us>
    <app-contact-section></app-contact-section>
  `
})
export class HomeComponent {}
