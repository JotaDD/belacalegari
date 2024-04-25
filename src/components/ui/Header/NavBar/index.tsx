import { isMenuOpenType } from '@/lib/types'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const NavBar = ({ isMenuOpen, setIsMenuOpen }: isMenuOpenType) => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}
export default NavBar
