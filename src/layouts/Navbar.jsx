import { Link } from 'react-router';
import { BookHeart } from 'lucide-react';
import { RiAccountCircle2Line } from "react-icons/ri";
import useAuthContext from '../hooks/useAuthContext';

const Navbar = () => {
     const { user, logoutUser } = useAuthContext();
    return (
        <div>
            <div className="navbar bg-rose-100 shadow-sm h-24 relative z-[100]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-rose-50 z-1 mt-4 w-52 p-3 shadow">
                    <li className="mb-1">
                        <Link to="/" className="text-gray-800 hover:bg-rose-100 hover:text-rose-800 font-medium py-3 px-4 transition-all duration-200">
                            Home
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link to="/shop" className="text-gray-800 hover:bg-rose-100 hover:text-rose-800 font-medium py-3 px-4 transition-all duration-200">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-800 hover:bg-rose-100 hover:text-rose-800 font-medium py-3 px-4 transition-all duration-200">
                            About
                        </Link>
                    </li>
                </ul>
                </div>
                <a className="btn btn-ghost text-stone-700 text-3xl gap-3 lg:ml-6"> <BookHeart className='size-8 text-rose-300'/> BOOK HEAVEN</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden md:flex mr-10 lg:gap-4">
                    <li>
                        <Link to="/" className="text-stone-500 hover:text-stone-800 text-lg px-2 py-2 flex items-center gap-2 border-b-2 border-transparent hover:border-stone-800 transition-colors">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="text-stone-500 hover:text-stone-800 text-lg px-3 py-2 flex items-center gap-2 border-b-2 border-transparent hover:border-stone-800 transition-colors">
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-stone-500 hover:text-stone-800 text-lg px-2 py-2 flex items-center gap-2 border-b-2 border-transparent hover:border-stone-800 transition-colors">
                            ABOUT
                        </Link>
                    </li>
                </ul>
                </div>
                {user ? (
                <div className="flex-none">
                    <div className="dropdown dropdown-end mr-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 text-neutral-400">
                            <RiAccountCircle2Line className='size-10'/>
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-rose-50 z-1 mt-3 w-52 p-3 shadow">
                        <li className="mb-1">
                        <Link to="profile" className="hover:text-red-900 font-medium py-3 px-3 transition-all duration-200 flex items-center gap-3">
                            My Profile
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link to="borrowrecord" className="hover:text-red-900 font-medium py-3 px-3 transition-all duration-200 flex items-center gap-3">
                            Borrow Records
                        </Link>
                    </li>
                    <li className="mb-1">
                        <a className="hover:text-red-900 font-medium py-3 px-3 transition-all duration-200 flex items-center gap-3">
                            Settings
                        </a>
                    </li>
                    
                    <li className="border-t mt-1 pt-1">
                        <a onClick={logoutUser} className="text-red-400 hover:text-red-800 font-medium py-3 px-3 transition-all duration-200 flex items-center gap-3">
                            Logout
                        </a>
                    </li>
                    </ul>
                    </div>
                </div>) : (
                <div className="flex gap-3">
                    <Link to="/login" className="btn btn-neutral opacity-50">
                    Login
                    </Link>
                    <Link to="/register" className="btn btn-neutral opacity-70">
                    Register
                    </Link>
                </div>
                )}
            
            </div>
        </div>
    );
};

export default Navbar;