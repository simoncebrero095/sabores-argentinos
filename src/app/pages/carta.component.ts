import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BEBIDAS,
  CHEESECAKES,
  EMPANADAS,
  MenuItem,
  PIZZAS,
  POSTRES,
  WHATSAPP_URL
} from '../site-data';

interface MenuSection {
  titulo: string;
  imagen: string;
  alt: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-carta',
  imports: [CommonModule],
  template: `
    <section class="page-section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Carta</span>
          <h1>Nuestra carta ilustrativa</h1>
          <p class="lead">
            Una presentación visual clara, sin precios, pensada para mostrar variedad y generar consultas.
          </p>
        </div>

        <section
          class="menu-block"
          *ngFor="let section of sections; let i = index"
          [class.reverse]="i % 2 === 1"
        >
          <div class="menu-visual">
            <img [src]="section.imagen" [alt]="section.alt" />
          </div>

          <div class="menu-content">
            <h2>{{ section.titulo }}</h2>

            <div class="menu-grid">
              <article class="menu-item" *ngFor="let item of section.items">
                <h3>{{ item.nombre }}</h3>
                <p>{{ item.descripcion }}</p>
              </article>
            </div>
          </div>
        </section>

        <div class="cta-box">
          <h2>¿Querés pedir o consultar disponibilidad?</h2>
          <a class="btn btn-primary" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  `
})
export class CartaComponent {
  readonly whatsappUrl = WHATSAPP_URL;

  readonly sections: MenuSection[] = [
    { titulo: 'Empanadas', imagen: 'empanadas.png', alt: 'Carta de empanadas', items: EMPANADAS },
    { titulo: 'Pizzas', imagen: 'pizzas.png', alt: 'Carta de pizzas', items: PIZZAS },
    { titulo: 'Postres', imagen: 'postres.jpg', alt: 'Carta de postres', items: POSTRES },
    { titulo: 'Cheesecakes', imagen: 'cheesecakes.jpg', alt: 'Cheesecakes Sabores Argentinos', items: CHEESECAKES },
    { titulo: 'Bebidas', imagen: 'bebidas.jpg', alt: 'Carta de bebidas', items: BEBIDAS }
  ];
}