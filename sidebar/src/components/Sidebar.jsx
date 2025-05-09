import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from './data';
import NavItem from './navitem';
import SearchBar from "./Searchbar";
import { Tooltip } from 'react-tooltip';
import logo from '../assets/logo.png'; 

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <motion.div initial={{width:60}} 
      animate={{width: isOpen ? 240 : 60}} 
      transition={{duration : 0.4}}
      className='bg-gray-900 h-screen text-white p-4'>
        <img
          src={logo}
          alt="Logo"
          onClick={() => setIsOpen((prev) => !prev)} 
          className="w-8 h-8 mb-8 cursor-pointer hover:opacity-80 transition-opacity"
        />

        <div className={`mb-8 ${isOpen ? "block" : "hidden"}`}>
          <SearchBar />
        </div>

        <nav className='flex flex-col gap-11'>
            {menuItems.map((item, index) => (
                <NavItem 
                key={index} 
                icon={item.icon} 
                text={item.text} 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}/>
            ))}
        </nav>
      </motion.div>
      {!isOpen && <Tooltip 
      id='sidebar-tooltip' offset={40} />}
    </div>
  )
}

export default Sidebar;
