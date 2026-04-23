import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MARCA, WHATSAPP_URL } from '../site-data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" routerLink="/" (click)="closeMenu()">
          <img src="/home/linux-pc/Documentos/Sabores Argentino/pagina web/sabores-argentinos/src/assets/logo.png" alt="Logo Sabores Argentinos" />
          <div class="brand-copy">
            <strong>{{ marca.nombre }}</strong>
            <span>{{ marca.slogan }}</span>
          </div>
        </a>

        <button
          type="button"
          class="hamburger"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen"
          aria-label="Abrir menú"
        >
          {{ menuOpen ? '✕' : '☰' }}
        </button>

        <nav class="nav-links" [class.open]="menuOpen">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMenu()"
          >
            Inicio
          </a>

          <a routerLink="/carta" routerLinkActive="active" (click)="closeMenu()">
            Carta
          </a>

          <a routerLink="/catering" routerLinkActive="active" (click)="closeMenu()">
            Catering
          </a>

          <a routerLink="/contacto" routerLinkActive="active" (click)="closeMenu()">
            Contacto
          </a>

          <a
            class="btn btn-primary nav-cta"
            [href]="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            (click)="closeMenu()"
          >
            Pedí por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly marca = MARCA;
  readonly whatsappUrl = WHATSAPP_URL;
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}