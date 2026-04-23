import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../site-data';

@Component({
  selector: 'app-catering',
  imports: [CommonModule],
  template: `
    <section class="page-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Catering</span>
          <h1>Servicio dulce y salado para eventos</h1>
          <p class="lead">
            Una página pensada para mostrar mesas dulces, propuestas saladas y atención personalizada.
          </p>
        </div>

        <div class="grid-3">
          <article class="card">
            <h3>Mesas dulces</h3>
            <p>Cheesecakes, postres clásicos, alfajores y opciones visualmente atractivas para eventos.</p>
          </article>

          <article class="card">
            <h3>Opciones saladas</h3>
            <p>Empanadas, pizzas y propuestas para reuniones, cumpleaños, encuentros y celebraciones.</p>
          </article>

          <article class="card">
            <h3>Atención directa</h3>
            <p>La consulta se resuelve rápido por WhatsApp para cotizar cantidad, fecha y disponibilidad.</p>
          </article>
        </div>

        <div class="split-2 top-space-lg">
          <div class="info-panel">
            <h2>Ideal para</h2>
            <div class="tag-list">
              <span class="badge">Cumpleaños</span>
              <span class="badge">Reuniones</span>
              <span class="badge">Eventos familiares</span>
              <span class="badge">Fechas especiales</span>
              <span class="badge">Empresas</span>
            </div>
          </div>

          <div class="info-panel">
            <h2>Pedí presupuesto</h2>
            <p>
              Esta sección puede crecer después con combos, cantidades mínimas,
              galería real y formulario.
            </p>
            <a class="btn btn-primary" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer">
              Consultar catering
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CateringComponent {
  readonly whatsappUrl = WHATSAPP_URL;
}