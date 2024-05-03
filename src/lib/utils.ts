import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { NavbarType, ProductType } from './types'
import { Locale, i18n } from '@/i18n'
import { dictionaries } from '@/dictionaries'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navBarOptions: NavbarType[] = [
  {
    name: 'Home',
    nameUS: 'Home',
    href: '/',
  },
  {
    name: 'Portfólio',
    nameUS: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Sobre',
    nameUS: 'About',
    href: '/about',
  },
  {
    name: 'Contato',
    nameUS: 'Contact',
    href: '/contact',
  },
]

export const products: ProductType[] = [
  {
    name: 'PACK SOLO posts 100% editáveis no canva',
    nameUs: 'PACK SOLO posts 100% editable in canva',
    link: 'link',
  },
  {
    name: 'branding & identidade visual',
    nameUs: 'branding & visual identity',
    link: 'link',
  },
  {
    name: 'mídias digitais e gráficas',
    nameUs: 'digital and graphic media',
    link: 'link',
  },
  {
    name: 'landing page',
    nameUs: 'landing page',
    link: 'link',
  },
  {
    name: 'portfólio',
    nameUs: 'portfolio',
    link: 'link',
  },
  {
    name: 'ilustração',
    nameUs: 'illustration',
    link: 'link',
  },
  {
    name: 'aulas particulares .psd e .ai',
    nameUs: 'private lessons .psd and .ai',
    link: 'link',
  },
  {
    name: 'template Notion',
    nameUs: 'Notion template',
    link: 'link',
  },
  {
    name: 'projeto FLUI para mulheres e LGBTQIAP+',
    nameUs: 'FLUI project for women and LGBTQIAP+',
    link: 'link',
  },
]

export const useDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries[i18n.defaultLocale as Locale]
}
