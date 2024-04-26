import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const defaultLocale = 'pt-BR'
export const locales = ['en-US', defaultLocale]

export const i18n = {
  locales,
  defaultLocale,
  localDetection: true,
}
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
