import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { NavbarType } from './types'
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

export const useDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries[i18n.defaultLocale as Locale]
}
