type MenuButtonProps = {
  isMenuOpen: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const MenuButton = ({ isMenuOpen, ...props }: MenuButtonProps) => {
  return (
    <button {...props} className="w-10 rounded-sm bg-ic-red-500 md:hidden">
      <div className=" inline-block cursor-pointer">
        <div
          className={`${isMenuOpen && 'translate-y-[10px] rotate-[-45deg] transform'} mt-[6px]  h-1 w-6 rounded-full bg-ic-stone-200 transition-all duration-300 `}
        ></div>
        <div
          className={`${isMenuOpen && 'opacity-0'} mt-[6px]  h-1 w-6 rounded-full bg-ic-stone-200 transition-all duration-300 `}
        ></div>
        <div
          className={`${isMenuOpen && 'translate-y-[-10px] rotate-[45deg] transform'} mt-[6px]  h-1 w-6 rounded-full bg-ic-stone-200 transition-all duration-300`}
        ></div>
      </div>
    </button>
  )
}
export default MenuButton
