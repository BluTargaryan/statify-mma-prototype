import React from 'react'
import { NavSocialsData } from "@/app/inAppData/NavSocialsData";

const NavSocialsList = () => {
  return (
    <div className='flex gap-4 text-xl
    md:text-2xl md:gap-6
    '>
        {NavSocialsData.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon className='hover:text-secondary active:text-primary transition-all duration-300 '  
                onClick={() => window.open(social.href, '_blank')}
                />
            </a>
        ))}
    </div>
  )
}

export default NavSocialsList
