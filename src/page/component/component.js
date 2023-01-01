import React from 'react';
import Cart from './cart';
import Filter from './Filter';

const Component = () => {
  return (
    <div className='w-1/2 pl-12 py-20'>
      <input
        type="text"
        id="default-input"
        placeholder='Search'
        class="w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <Filter />
        <Cart />



    </div>
  );
};

export default Component;