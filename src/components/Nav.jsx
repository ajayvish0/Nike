import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants';
import { useState } from 'react';
const Nav = () => {
  // JSX
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

return (
  <header className='padding-x  py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
        <img src={headerLogo} alt="logo" width={130} height={29} />
      </a>
       
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
            </li>
          ))}
        </ul>
      
      <div className='lg:hidden'>
        <img src={hamburger} alt='hamburger' width={25} height={25} onClick={toggleMenu} />
      </div>
      {showMenu && (
        <div className=' absolute top-full right-0 bg-white mt-2 p-8 rounded-lg shadow-md lg:hidden  '>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  </header>
);
}

export default Nav