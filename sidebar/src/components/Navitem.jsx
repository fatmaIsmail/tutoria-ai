import { div } from 'framer-motion/client'
import React from 'react'

const   Navitem = ({icon, text, isOpen,setIsOpen}) => {
  return (
    <div className='flex items-center gap-4 cursor-pointer hover:text-blue-400  w-full transition-all' >
      <span 
        onClick={() => setIsOpen(prev => !prev)}
      data-tooltip-id={!isOpen ? 'sidebar-tooltip' : undefined} 
      className='text-xl'
      data-tooltip-content={!isOpen ? text: undefined}>{icon}</span>
      {isOpen && 
        <div>
            {text}
        </div>
      }
    </div>
  )
}

export default Navitem;
