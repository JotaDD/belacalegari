'use client'
import Logo from '@/components/svg/Logo'
import { navBarOptions } from '@/lib/utils'
import MenuButton from './MenuButton'
import { useState } from 'react'
import NavBarOptions from './NavBarOptions'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full min-w-fit bg-ic-stone-200 p-2">
      <div className="max-w-screen mx-auto flex w-[80%] flex-wrap items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="rounded-full px-3 text-center text-sm font-semibold  text-ic-red-500 "
          >
            PT-EN
          </button>
          <MenuButton
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {/* Desktop Menu */}
        <div className="w-full items-center justify-between md:order-1 md:w-auto">
          <ul
            className={` mt-4 hidden flex-col items-center  p-4 px-6 font-normal md:flex md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse `}
          >
            <NavBarOptions navBarOptions={navBarOptions} />
          </ul>
        </div>
        {/* Mobile Menu */}
        <div
          className={` ${isMenuOpen ? 'flex' : 'hidden'} flex h-fit w-full flex-col items-center justify-center  py-2 text-center md:hidden`}
        >
          <ul className="flex w-[50%] flex-col items-center justify-center ">
            <NavBarOptions
              navBarOptions={navBarOptions}
              className=" w-full border-b border-ic-orange-900 pb-4 pt-2 hover:border-ic-red-500 hover:text-ic-red-500 hover:transition-colors hover:duration-300 md:text-ic-orange-900"
            />
          </ul>
        </div>
      </div>
      <button
        id="click-away-button"
        className={`absolute h-screen w-screen bg-transparent md:hidden ${isMenuOpen ? '' : 'hidden'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></button>
    </nav>
  )
}
export default NavBar
