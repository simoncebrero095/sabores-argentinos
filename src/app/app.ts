import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-header />
    <main class="main-shell">
      <router-outlet />
    </main>
    <app-whatsapp-button />
    <app-footer />
  `,
  styleUrl: './app.css'
})
export class App {}