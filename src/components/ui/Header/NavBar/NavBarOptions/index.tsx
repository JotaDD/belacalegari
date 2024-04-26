import { defaultLocale } from '@/i18n'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { navBarOptions } from '@/lib/utils'

type NavBarOptionsType = React.HTMLAttributes<HTMLLIElement>

const NavBarOptions = ({ ...props }: NavBarOptionsType) => {
  const locale = useLocale()
  return (
    <>
      {navBarOptions.map((option, index) => (
        <li
          key={index}
          className={`rounded px-3 py-2 text-base text-ic-orange-900 hover:text-ic-red-500 hover:transition-colors hover:duration-300 md:text-ic-orange-900`}
          {...props}
        >
          <Link href={option.href} locale={locale}>
            {locale === defaultLocale ? option.name : option.nameUS}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavBarOptions
