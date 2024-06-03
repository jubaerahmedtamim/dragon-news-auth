import React from 'react';
import Header from '../../shared/Header/Header';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import Navbar from '../../shared/Navbar/Navbar';

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h3 className='text-2xl'> News Details</h3>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;