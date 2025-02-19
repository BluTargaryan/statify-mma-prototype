import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavSocialsData } from "@/app/inAppData/NavSocialsData";

const NavSocialsList = () => {
  return (
    <div className='flex gap-4 text-xl'>
        {NavSocialsData.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon className='hover:text-secondary active:text-primary transition-all duration-300'
                onClick={() => window.open(social.href, '_blank')}
                />
            </a>
        ))}
    </div>
  )
}

export default NavSocialsList
