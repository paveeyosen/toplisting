import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactRequest } from '../../services/contact.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  submitting = signal(false);
  submitted = signal(false);
  error = signal('');

  formData: ContactRequest = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  services = [
    'SEO – Search Engine Optimization',
    'AEO – Answer Engine Optimization',
    'GEO – Generative Engine Optimization',
    'Social Media Marketing',
    'Pay-Per-Click Advertising (PPC)',
    'Content Marketing',
    'Email Marketing',
    'Video Marketing',
    'E-Commerce Marketing',
    'AI-Powered Marketing',
    'Lead Generation',
    'Branding & Strategy',
    'Website & CRO',
    'Online Reputation Management',
    'Full Growth Package',
    'Other / Not Sure'
  ];

  contacts = [
    { icon: '📧', label: 'Email Us', value: 'hello@toplisting.com' },
    { icon: '📱', label: 'WhatsApp', value: '+1 (555) 000-0000' },
    { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' }
  ];

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.submitting()) return;
    this.submitting.set(true);
    this.error.set('');

    this.contactService.sendMessage(this.formData).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
        this.resetForm();
      },
      error: () => {
        this.error.set('Something went wrong. Please try again or email us directly.');
        this.submitting.set(false);
      }
    });
  }

  private resetForm() {
    this.formData = { name: '', email: '', phone: '', company: '', service: '', message: '' };
  }
}
