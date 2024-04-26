export type NavbarOptions = [
  {
    
  }
  'Home',
  'Sobre' | 'About',
  'Portfólio' | 'Portfolio',
  'Contato' | 'Contact',
]

export type isMenuOpenType = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}
