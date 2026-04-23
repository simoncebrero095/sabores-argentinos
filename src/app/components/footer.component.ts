import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  INSTAGRAM_URL,
  MARCA,
  TIKTOK_URL,
  WHATSAPP_URL
} from '../site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <strong>{{ marca.nombre }} 🇦🇷</strong>
          <p>{{ marca.frasePrincipal }}</p>
        </div>

        <div class="footer-links">
          <a routerLink="/">Inicio</a>
          <a routerLink="/carta">Carta</a>
          <a routerLink="/catering">Catering</a>
          <a routerLink="/contacto">Contacto</a>
        </div>

        <div class="footer-meta">
          <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a [href]="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a [href]="tiktokUrl" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly marca = MARCA;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly instagramUrl = INSTAGRAM_URL;
  readonly tiktokUrl = TIKTOK_URL;
}