import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CartaComponent } from './pages/carta.component';
import { CateringComponent } from './pages/catering.component';
import { ContactoComponent } from './pages/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];