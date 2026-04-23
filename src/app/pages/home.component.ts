import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  DELIVERY_ZONAS,
  INSTAGRAM_URL,
  MARCA,
  TIKTOK_URL,
  WHATSAPP_URL
} from '../site-data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Sabores Argentinos</span>
          <h1>{{ marca.frasePrincipal }}</h1>
          <p class="lead">
            Empanadas, pizzas, postres, bebidas y catering con una estética bien marcada,
            identidad argentina y venta directa por WhatsApp.
          </p>

          <div class="action-row">
            <a class="btn btn-primary" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">
              Pedir ahora
            </a>
            <a class="btn btn-secondary" routerLink="/carta">Ver carta</a>
          </div>

          <div class="social-row">
            <a [href]="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a [href]="tiktokUrl" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        <div class="logo-card">
          <img src="logo.png" alt="Logo Sabores Argentinos" />
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Destacados</span>
          <h2>Una marca visual fuerte y lista para vender</h2>
        </div>

        <div class="grid-3">
          <article class="card">
            <img class="card-image" src="empanadas.png" alt="Carta ilustrativa de empanadas" />
            <h3>Empanadas artesanales</h3>
            <p>Sabores clásicos y especiales, con masa casera y una identidad bien argentina.</p>
          </article>

          <article class="card">
            <img class="card-image" src="pizzas.png" alt="Carta ilustrativa de pizzas" />
            <h3>Pizzas caseras</h3>
            <p>Muzzas, caprese, fugazeta, napolitana y otras variedades para compartir.</p>
          </article>

          <article class="card">
            <img class="card-image" src="cheesecakes.jpg" alt="Cheesecakes Sabores Argentinos" />
            <h3>Postres y nuevas líneas</h3>
            <p>Cheesecakes, tiramisú, chocotorta y propuestas dulces que suman valor a la marca.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section section-alt">
      <div class="container split-2">
        <div class="info-panel">
          <span class="eyebrow">Información</span>
          <h2>Todo listo para pedidos directos</h2>
          <p><strong>Dirección:</strong> {{ marca.direccion }}</p>
          <p><strong>Horarios:</strong> {{ marca.horarios }}</p>
          <p><strong>Especialidad:</strong> empanadas, pizzas, postres, bebidas y catering.</p>
        </div>

        <div class="info-panel">
          <span class="eyebrow">Delivery</span>
          <h2>Zonas de entrega</h2>
          <div class="tag-list">
            <span class="badge" *ngFor="let zona of zonas">{{ zona }}</span>
          </div>
          <a class="btn btn-primary top-space" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">
            Consultar por zona
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  readonly marca = MARCA;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly instagramUrl = INSTAGRAM_URL;
  readonly tiktokUrl = TIKTOK_URL;
  readonly zonas = DELIVERY_ZONAS;
}