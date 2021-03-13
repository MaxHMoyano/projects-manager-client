import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='w-screen h-20 bg-gray-700 flex items-center justify-between p-8'>
      <Link href='/'>
        <a className='text-2xl text-white hover:text-gray-200 transition-all duration-500'>
          Max's Projects Manager
        </a>
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
