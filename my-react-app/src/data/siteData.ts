import type { NavItem, PropertyItem } from '../types'

export const navItems: NavItem[] = [
  { key: 'accueil', label: 'Accueil' },
  { key: 'vente', label: 'Vente' },
  { key: 'location', label: 'Location' },
  { key: 'carte', label: 'Carte' },
  { key: 'estimation', label: 'Estimation' },
  { key: 'contact', label: 'Contact' },
]

export const featuredProperties: PropertyItem[] = [
  {
    title: 'Villa contemporaine',
    type: 'À vendre',
    price: '2 350 000 TND',
    location: 'La Marsa',
    details: '420 m² · S+5 · Piscine',
    reference: 'IC-2026-002',
    imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    status: 'Disponible',
  },
  {
    title: 'Appartement S+3 lumineux',
    type: 'À vendre',
    price: '580 000 TND',
    location: 'Menzah 9',
    details: '165 m² · S+3',
    reference: 'IC-2026-001',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    status: 'Disponible',
  },
  {
    title: 'Résidence premium',
    type: 'À louer',
    price: '2 400 TND / mois',
    location: 'Lac 2',
    details: '145 m² · S+3',
    reference: 'IC-2026-003',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    status: 'Disponible',
  },
]

export const zones = [
  'Tunis (centre)',
  'Menzah 1',
  'Menzah 2',
  'Menzah 3',
  'Menzah 4',
  'Menzah 5',
  'Menzah 6',
  'Menzah 7',
  'Menzah 8',
  'Menzah 9',
  'Mutuelleville',
  'Cité Ennasr',
  'Ariana',
  'Riadh Andalous',
  'Soukra',
  'Aouina',
  'La Marsa',
  'Lac 0',
  'Lac 1',
  'Lac 2',
  'Lac 3',
]

export const whatsappNumbers = ['+216 22 000 000', '+216 99 000 000']
