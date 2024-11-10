
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitterSquare, FaInstagram } from 'react-icons/fa'; // Corrected import from 'fa' module

// Define the type for the props
interface SocialProps {
  containerstyle: string;
  iconstyle: string;
}

const soclas = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedinIn />, path: '' },  // Corrected LinkedIn icon
    { icon: <FaTwitterSquare />, path: '' },
    { icon:  <FaInstagram />, path: '' },
];

const Social: React.FC<SocialProps> = ({ containerstyle, iconstyle }) => {
    return (
        <div className={containerstyle}>
            {soclas.map((item, index) => (
                <Link key={index} href={item.path} className={iconstyle}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;

