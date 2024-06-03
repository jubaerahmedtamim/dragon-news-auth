import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6 space-y-3'>
                <h3 className="text-2xl">Login with</h3>
                <button className='btn btn-outline w-full'>
                    <FaGoogle />
                    Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h3 className="text-2xl">Find us on</h3>
                <a className='p-4 flex text-lg items-center border gap-2 rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex text-lg items-center border-x gap-2 ' href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='p-4 flex text-lg items-center border gap-2 rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='p-4 mb-6'>
                <h3 className="text-2xl">Q Zone</h3>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;