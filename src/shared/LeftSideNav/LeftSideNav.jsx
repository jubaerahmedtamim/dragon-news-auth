import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCatergories]= useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatergories(data))
    },[])
    return (
        <div className='space-y-4'>
            <h className="text-2xl">All Categories</h>
            {
                categories.map(category => <Link
                key={category.id}
                className='block ml-4 text-xl font-semibold'
                >{category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;