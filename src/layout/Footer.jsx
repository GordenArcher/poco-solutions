import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'

const Footer = ({ setShowPolicy }) => {
  return (
    <footer className="bg-[#103e91]">
        <div className="max-w-7xl !mx-auto !py-12 !px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <Link to={'/'}>
                        <img 
                        src={Logo} 
                        alt="Poco Solutions Logo" 
                        className="h-10"
                    />
                    </Link>
                
                <p className="!mt-4 text-gray-400">Your trusted partner in academic and professional excellence since 2018.</p>
                </div>
                
                <div>
                <h3 className="text-sm !font-semibold text-gray-300 tracking-wider uppercase">Quick Links</h3>
                <ul className="!mt-4 space-y-4">
                    <li><Link to={'/'} className="text-base text-gray-400 hover:text-white">Home</Link></li>
                    <li><Link to={'/service'} className="text-base text-gray-400 hover:text-white">Services</Link></li>
                    <li><Link to={'/about'} className="text-base text-gray-400 hover:text-white">About Us</Link></li>
                    <li><Link to={'/contact'} className="text-base text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
                </div>
                
                <div>
                <h3 className="text-sm !font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="!mt-4 space-y-4">
                    <li><a onClick={() => setShowPolicy(true)} className="text-base text-gray-400 cursor-pointer hover:text-white">Privacy Policy</a></li>
                    <li><Link to={'/terms-condition'} href="#" className="text-base text-gray-400 cursor-pointer hover:text-white">Terms of Service</Link></li>
                </ul>
                </div>
            </div>
            
            <div className="!mt-8 border-t border-gray-800 !pt-8">
                <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} Poco Solutions. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer