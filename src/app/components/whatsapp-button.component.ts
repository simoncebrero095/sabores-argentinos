import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../site-data';

@Component({
  selector: 'app-whatsapp-button',
  template: `
    <a
      class="floating-wa"
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
    >
      WhatsApp
    </a>
  `
})
export class WhatsappButtonComponent {
  readonly whatsappUrl = WHATSAPP_URL;
}