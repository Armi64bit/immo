export type PageKey = 'accueil' | 'vente' | 'location' | 'carte' | 'estimation' | 'contact'

export type NavItem = {
  key: PageKey
  label: string
}

export type PropertyItem = {
  title: string
  type: string
  price: string
  location: string
  details: string
  reference: string
  imageUrl: string
  status: string
  lat?: number
  lng?: number
}
