import Logo from '@/components/svg/Logo'
import { navBarOptions } from '@/lib/utils'
import MenuButton from './MenuButton'

const index = () => {
  return (
    <nav className="w-full  bg-ic-stone-200 p-2">
      <div className="max-w-screen-lg w-[80%] flex flex-wrap items-center justify-between mx-auto">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
        </span>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-ic-red-500 font-semibold rounded-full text-sm px-3  text-center "
          >
            PT-EN
          </button>
          {/* Menu Hamburguer */}
          <MenuButton />
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {navBarOptions.map((option, index) => (
              <li
                key={index}
                className="block py-2 px-3 md:p-0 text-base text-ic-orange-900 rounded md:bg-transparent md:text-ic-orange-900"
              >
                <a href="">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default index
