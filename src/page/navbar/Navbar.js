import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-end space-x-10 pr-20'>
      <Link to="/home" className=' font-bold'>Home</Link>
      <Link to="/dropdown" className=' font-bold'>Dropdown</Link>
      <Link to="/logout" className=' font-bold'>Logout</Link>
    </div>
  );
};

export default Navbar;