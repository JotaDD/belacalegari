import NavBarOptions from '../NavBarOptions'

const DesktopMenu = () => {
  return (
    <nav className=" hidden font-normal md:flex md:p-0 ">
      <ul className="flex items-center justify-between">
        <NavBarOptions />
      </ul>
    </nav>
  )
}
export default DesktopMenu
