import { NavbarOptions } from '@/lib/types'

type NavBarOptionsType = {
  navBarOptions: NavbarOptions
} & React.HTMLAttributes<HTMLLIElement>

const NavBarOptions = ({ navBarOptions, ...props }: NavBarOptionsType) => {
  return (
    <>
      {navBarOptions.map((option, index) => (
        <li
          key={index}
          className={`rounded px-3 py-2 text-base text-ic-orange-900 hover:text-ic-red-500 hover:transition-colors hover:duration-300 md:text-ic-orange-900`}
          {...props}
        >
          <a href="">{option}</a>
        </li>
      ))}
    </>
  )
}
export default NavBarOptions
