export interface MenuItem {
  nombre: string;
  descripcion: string;
}

export const MARCA = {
  nombre: 'Sabores Argentinos',
  slogan: 'El secreto está en la masa',
  frasePrincipal: 'Hechas con pasión y sabor real 🇦🇷',
  direccion: 'Belgrano 577, Malagueño, Córdoba',
  horarios: 'Jueves a Domingos de 19:00 a 01:00 hs'
};

export const WHATSAPP_URL =
  'https://wa.me/543512049613?countryCode=54&countryName=AR&phoneNumber=3512049613';

export const INSTAGRAM_URL =
  'https://www.instagram.com/sabores.argentinos25/';

export const TIKTOK_URL =
  'https://www.tiktok.com/@sabores.argentinos25';

export const MAPS_URL =
  'https://maps.google.com/?q=Belgrano+577+Malague%C3%B1o+C%C3%B3rdoba';

export const DELIVERY_ZONAS = [
  'Malagueño',
  'Yocsina',
  'La Perla',
  'Barrio 1° de Mayo'
];

export const EMPANADAS: MenuItem[] = [
  { nombre: 'Árabes', descripcion: 'Masa casera.' },
  { nombre: 'Osobuco', descripcion: 'Estofado de osobuco.' },
  { nombre: 'Roquefort & Nuez', descripcion: 'Roquefort y nuez.' },
  { nombre: '4 Quesos', descripcion: 'Mozzarella, roquefort, parmesano y provolone.' },
  { nombre: 'Jamón & Queso', descripcion: 'Jamón cocido y mozzarella.' },
  { nombre: 'Criollas', descripcion: 'Saladas, dulces o picantes.' },
  { nombre: 'Cheeseburger', descripcion: 'Carne, cheddar, panceta y cebolla grillada.' },
  { nombre: 'Caprese', descripcion: 'Mozzarella, tomate y albahaca.' },
  { nombre: 'Cebolla caramelizada & muzzarella', descripcion: 'Una opción suave y bien sabrosa.' }
];

export const PIZZAS: MenuItem[] = [
  { nombre: 'Muzza', descripcion: 'Mozzarella, orégano y aceitunas verdes.' },
  { nombre: 'Especial con anchoas', descripcion: 'Mozzarella, jamón, anchoas, morrón y aceitunas verdes.' },
  { nombre: 'Fugazeta', descripcion: 'Mozzarella y abundante cebolla con aceitunas.' },
  { nombre: 'Napolitana', descripcion: 'Mozzarella, tomate, ajo, orégano y aceitunas verdes.' },
  { nombre: 'Provenzal', descripcion: 'Mozzarella, ajo y perejil con aceitunas.' },
  { nombre: '4 Quesos', descripcion: 'Mozzarella, roquefort, provolone y parmesano.' },
  { nombre: 'Calabresa', descripcion: 'Mozzarella, calabresa y aceitunas.' },
  { nombre: 'Caprese', descripcion: 'Mozzarella, tomate, albahaca fresca y aceitunas verdes.' }
];

export const POSTRES: MenuItem[] = [
  { nombre: 'Tiramisú', descripcion: 'Capas suaves de mascarpone y vainillas embebidas en café.' },
  { nombre: 'Chocotorta', descripcion: 'Capas de galletitas de chocolate y dulce de leche cremoso.' },
  { nombre: 'Chajá de durazno', descripcion: 'Bizcochuelo, dulce de leche, crema, duraznos y merengue.' },
  { nombre: 'Alfajor de maicena', descripcion: 'Masa tierna con abundante dulce de leche repostero.' },
  { nombre: 'Alfajor de chocolate', descripcion: 'Masa suave con baño de chocolate semiamargo.' }
];

export const CHEESECAKES: MenuItem[] = [
  { nombre: 'Cheesecake de frutos rojos', descripcion: 'Base crocante, queso cremoso y frutos rojos.' },
  { nombre: 'Cheesecake de maracuyá', descripcion: 'Base crocante, queso cremoso y sabor tropical.' }
];

export const BEBIDAS: MenuItem[] = [
  { nombre: '7Up 2.25L', descripcion: 'Refrescante lima-limón.' },
  { nombre: 'Pepsi', descripcion: 'El clásico sabor a cola.' },
  { nombre: 'Pritty Limón', descripcion: 'Sabor a limón y naranja.' },
  { nombre: 'Vinos', descripcion: 'Malbec y Cabernet Malbec.' },
  { nombre: 'Cervezas', descripcion: 'Beta IPA, Oktoberfest y cerveza de miel.' },
  { nombre: 'Maleficio', descripcion: 'Gin y vodka para cócteles.' },
  { nombre: 'Tónica', descripcion: 'Rumipal Bartender.' },
  { nombre: 'Speed', descripcion: 'Energizante en lata.' }
];