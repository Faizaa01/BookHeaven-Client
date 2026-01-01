import React from 'react';
import { Link } from 'react-router';

const AddButtons = () => {
    return (
        <div className='flex justify-around gap-6 mb-8'>
            <Link to='/addbook' className='px-24 py-2 border text-white text-xl bg-black'> Add Book</Link>
            <Link to='/addauthor' className='px-24 py-2 border text-white text-xl bg-black'> Add Author</Link>
            <Link to='/addcategory' className='px-24 py-2 border text-white text-xl bg-black '> Add Category</Link>
        </div>
    );
};

export default AddButtons;