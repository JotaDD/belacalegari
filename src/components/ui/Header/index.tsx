'use client'
import Logo from '@/components/svg/Logo'
import { useState } from 'react'
import NavBar from './NavBar'
import MenuButton from './MenuButton'
import TranslateButton from './TranslateButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex w-full min-w-fit items-center justify-center  bg-ic-stone-200">
      <div className="flex w-[80%] max-w-[1200px]  items-center justify-between  py-2">
        <Logo />
        <div className="flex w-fit gap-2  md:order-2 md:space-x-8 rtl:space-x-reverse ">
          <TranslateButton />
          <MenuButton
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  )
}
export default Header
