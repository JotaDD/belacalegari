import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { NavbarOptions } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navBarOptions: NavbarOptions = ['Home', 'Sobre', 'Portfolio', 'Contato']

export { navBarOptions }
