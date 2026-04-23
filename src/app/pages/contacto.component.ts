import { Component } from '@angular/core';
import {
  INSTAGRAM_URL,
  MAPS_URL,
  MARCA,
  TIKTOK_URL,
  WHATSAPP_URL
} from '../site-data';

@Component({
  selector: 'app-contacto',
  template: `
    <section class="page-section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Contacto</span>
          <h1>Pedí fácil y rápido</h1>
          <p class="lead">Todos los canales claros para que la gente llegue directo a comprar.</p>
        </div>

        <div class="grid-2">
          <article class="card contact-card">
            <h3>WhatsApp</h3>
            <p>351 2049 613</p>
            <a class="btn btn-primary" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">
              Enviar mensaje
            </a>
          </article>

          <article class="card contact-card">
            <h3>Instagram</h3>
            <p>@sabores.argentinos25</p>
            <a class="btn btn-secondary" [href]="instagramUrl" target="_blank" rel="noopener noreferrer">
              Abrir Instagram
            </a>
          </article>

          <article class="card contact-card">
            <h3>TikTok</h3>
            <p>@sabores.argentinos25</p>
            <a class="btn btn-secondary" [href]="tiktokUrl" target="_blank" rel="noopener noreferrer">
              Abrir TikTok
            </a>
          </article>

          <article class="card contact-card">
            <h3>Ubicación</h3>
            <p>{{ marca.direccion }}</p>
            <a class="btn btn-secondary" [href]="mapsUrl" target="_blank" rel="noopener noreferrer">
              Ver mapa
            </a>
          </article>
        </div>

        <div class="info-panel top-space-lg center-box">
          <h2>Horarios</h2>
          <p>{{ marca.horarios }}</p>
        </div>
      </div>
    </section>
  `
})
export class ContactoComponent {
  readonly marca = MARCA;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly instagramUrl = INSTAGRAM_URL;
  readonly tiktokUrl = TIKTOK_URL;
  readonly mapsUrl = MAPS_URL;
}