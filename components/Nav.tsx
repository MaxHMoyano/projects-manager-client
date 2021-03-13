import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav>
        <Link href='/projects'>
          <a className='px-8 py-3 mx-3  text-white bg-transparent text-xl hover:bg-gray-50 hover:text-black rounded transition-all duration-500'>
            Your projects
          </a>
        </Link>
        <Link href='/about'>
          <a className='px-8 py-3 mx-3  text-white bg-transparent text-xl hover:bg-gray-50 hover:text-black rounded transition-all duration-500'>
            About
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
