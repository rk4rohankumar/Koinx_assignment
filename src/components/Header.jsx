import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between shadow-xl'>
            <div className='m-5'>
                <img src="https://i.ibb.co/kBjb3Cj/koinx-logo.png" alt="Koinx Logo" className='h-8 mx-16' />
            </div>
            <div className='flex items-center space-x-24 m-5 font-semibold'>
                <Link to="/crypto-taxes" className="text-black hover:text-blue-500">
                    Crypto Taxes
                </Link>
                <Link to="/free-tools" className="text-black hover:text-blue-500">
                    Free Tools
                </Link>
                <Link to="/resources" className="text-black hover:text-blue-500">
                    Resources
                </Link>
                <Link to="/get-started">
                    <button className="border px-4 py-2 rounded-md bg-blue-500 text-white">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
