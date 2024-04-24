'use client'
import { useState } from 'react'

// type MenuButtonProps = {
//   isOpen: boolean
// }
const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-ic-red-500 rounded-sm w-10 md:hidden"
    >
      <div className=" cursor-pointer inline-block">
        <div
          className={`${isOpen && 'transform translate-y-[10px] rotate-[-45deg]'} w-6  rounded-full h-1 bg-ic-stone-200 mt-[6px] transition-all duration-300 `}
        ></div>
        <div
          className={`${isOpen && 'opacity-0'} w-6  rounded-full h-1 bg-ic-stone-200 mt-[6px] transition-all duration-300 `}
        ></div>
        <div
          className={`${isOpen && 'transform translate-y-[-10px] rotate-[45deg]'} w-6  rounded-full h-1 bg-ic-stone-200 mt-[6px] transition-all duration-300`}
        ></div>
      </div>
    </button>
  )
}
export default MenuButton
