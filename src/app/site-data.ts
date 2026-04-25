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
  'https://www.google.com/maps/place/Sabores+Argentinos/@-31.4627764,-64.3756363,15z/data=!4m6!3m5!1s0x942d5f5fe46a5ea9:0xc030fa1f53462300!8m2!3d-31.462796!4d-64.3571824!16s%2Fg%2F11n3czrftb?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D';

export const DELIVERY_ZONAS = [
  'Malagueño',
  'Yocsina',
  'La Perla',
  'Barrio 1° de Mayo'
];

export const EMPANADAS: MenuItem[] = [
  { nombre: 'Árabes', descripcion: 'Sabor intenso y fresco.' },
  { nombre: 'Osobuco', descripcion: 'Carne de osobuco desmechada.' },
  { nombre: 'Roquefort & Nuez', descripcion: 'Roquefort y nuez.' },
  { nombre: '4 Quesos', descripcion: 'Mozzarella, roquefort, parmesano y tybo.' },
  { nombre: 'Jamón & Queso', descripcion: 'Jamón cocido y mozzarella.' },
  { nombre: 'Criollas Saladas', descripcion: 'Clásica y bien sabrosa.' },
  { nombre: 'Criollas Dulces', descripcion: 'Dulce sabor argentino con pasa uva.' },
  { nombre: 'Criollas Picantes', descripcion: 'Picante con actitud.' },
  { nombre: 'Cheeseburger', descripcion: 'Carne, cheddar, panceta y cebolla grillada.' },
  { nombre: 'Caprese', descripcion: 'Mozzarella, tomate y albahaca.' },
  { nombre: 'Fugazeta', descripcion: 'Una opción suave y bien sabrosa.' }
];

export const PIZZAS: MenuItem[] = [
  { nombre: 'Muzza', descripcion: 'Mozzarella, orégano y aceitunas verdes.' },
  { nombre: 'Especial con anchoas', descripcion: 'Mozzarella, jamón, anchoas, morrón y aceitunas verdes.' },
  { nombre: 'Fugazeta', descripcion: 'Mozzarella y abundante cebolla con aceitunas.' },
  { nombre: 'Napolitana', descripcion: 'Mozzarella, tomate, ajo, orégano y aceitunas verdes.' },
  { nombre: 'Provenzal', descripcion: 'Mozzarella, ajo y perejil con aceitunas.' },
  { nombre: '4 Quesos', descripcion: 'Mozzarella, roquefort, parmesano y tybo.' },
  { nombre: 'Calabresa', descripcion: 'Mozzarella, calabresa y aceitunas.' },
  { nombre: 'Caprese', descripcion: 'Mozzarella, tomate, albahaca fresca y aceitunas verdes.' }
];

export const POSTRES: MenuItem[] = [
  { nombre: 'Tiramisú', descripcion: 'Capas suaves de mascarpone y vainillas embebidas en café.' },
  { nombre: 'Chocotorta', descripcion: 'Capas de galletitas de chocolate y dulce de leche cremoso.' },
  { nombre: 'Chajá de durazno', descripcion: 'Bizcochuelo, dulce de leche, crema, duraznos y merengue.' },
  { nombre: 'Cheesecake de frutos rojos', descripcion: 'Base crocante, queso cremoso y frutos rojos.' },
  { nombre: 'Cheesecake de maracuyá', descripcion: 'Base crocante, queso cremoso y sabor tropical.' }
];

export const CHEESECAKES: MenuItem[] = [
  { nombre: 'Cheesecake de frutos rojos', descripcion: 'Base crocante, queso cremoso y frutos rojos.' },
  { nombre: 'Cheesecake de maracuyá', descripcion: 'Base crocante, queso cremoso y sabor tropical.' }
];

export const BEBIDAS: MenuItem[] = [
  { nombre: 'Coca Retonable 2L', descripcion: '' },
  { nombre: 'Pepsi 2L', descripcion: '' },
  { nombre: 'Pritty Limón 1,5L', descripcion: '' },
  { nombre: 'Coca  500 Ml', descripcion: '' },
  { nombre: 'Tónica 1,5L', descripcion: '' },
  { nombre: 'Speed XL', descripcion: '' },
  { nombre: 'Vinos Tinto', descripcion: 'Merlot Malbec, Malbec y Cabernet Malbec.' },
  { nombre: 'Vinos Blanco', descripcion: 'Chenin-Chardonnay Dulce y Chardonnay.' },
  { nombre: 'Cervezas', descripcion: 'Beta IPA (IPA clásica lupulada), Mexican Lager (Rubia y ligera), Oktoberfest (Roja maltosa y dulce) Honigbier (Rubia dorada c/ miel).' },
  { nombre: 'Maleficio', descripcion: 'Gin DRY (Destilado de 7 botánicos). Vodka artesanal (ORIGINAL, FRAMBUESA, MANZANA) para el alma de la noche.'},
  { nombre: 'Fernet', descripcion: 'Fernet Branca.' }
];