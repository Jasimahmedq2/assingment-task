import React from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <div>
      <nav className='flex justify-between items-center space-x-2 py-8'>
        <Link>dropdown</Link>
        <Link>filter1</Link>
        <Link>filter2</Link>
        <Link>filter3</Link>
        <Link>dropdown</Link>

      </nav>
    </div>
  );
};

export default Filter;