import { isMenuOpenType } from '@/lib/types'
import NavBarOptions from '../NavBarOptions'

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: isMenuOpenType) => {
  return (
    // <nav className=" flex w-fit items-center justify-center border border-blue-500 sm:hidden">
    <nav
      id="click-away-wrapper"
      className={` bg-ic-orange-500 fixed left-0 top-12 h-full w-full bg-opacity-40 backdrop-blur-sm md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div
        className={` ${isMenuOpen ? ' flex bg-ic-stone-200' : 'hidden'} h-fit w-full flex-col items-center justify-center px-5 py-2 text-center shadow-md md:hidden`}
      >
        <ul className="flex w-[50%] flex-col items-center justify-center ">
          <NavBarOptions className=" w-full border-b border-ic-orange-900 pb-4 pt-2 hover:border-ic-red-500 hover:text-ic-red-500 hover:transition-colors hover:duration-300 md:text-ic-orange-900" />
        </ul>
      </div>
    </nav>
    // </nav>
  )
}
export default MobileMenu
