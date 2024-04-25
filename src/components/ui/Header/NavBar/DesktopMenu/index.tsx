import { navBarOptions } from '@/lib/utils'
import NavBarOptions from '../NavBarOptions'

const DesktopMenu = () => {
  return (
    <nav className=" hidden border border-red-500 font-normal  md:p-0 ">
      <ul className="flex items-center justify-between">
        <NavBarOptions navBarOptions={navBarOptions} />
      </ul>
    </nav>
  )
}
export default DesktopMenu
