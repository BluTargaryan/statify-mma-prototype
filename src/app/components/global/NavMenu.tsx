import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { Pages } from '@/app/inAppData/pages'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const pathname = usePathname();

    // Add click handler when menu is active
    React.useEffect(() => {
        const closeMenu = () => setIsMenuActive(false);
        
        if (isMenuActive) {
            window.addEventListener('click', closeMenu);
            // Cleanup
            return () => window.removeEventListener('click', closeMenu);
        }
    }, [isMenuActive]);

    

    return (
        <>
        <div className='lg:flex hidden gap-6 text-sm'>
            {Pages.map((page) => (
                <Link 
                    href={page.href} 
                    key={page.id}
                    className={`${pathname === page.href ? 'font-bold' : 'font-normal'} hover:text-secondary active:text-primary transition-all duration-300`}
                >
                    {page.name}
                </Link>
            ))}
                
                

        </div>
        < div className='lg:hidden'>
            {isMenuActive ? (
                <MdClose 
                    className='text-3xl hover:text-secondary active:text-primary cursor-pointer'
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuActive(!isMenuActive);
                    }}
                />
            ) : (
                <MdMenu 
                    className='text-3xl hover:text-secondary active:text-primary cursor-pointer'
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuActive(!isMenuActive);
                    }}
                />
            )}

    {isMenuActive && (
        <div className='absolute left-0 top-[56px] w-full h-screen py-12 flex flex-col items-center gap-12 bg-white shadow-lg
        overflow-y-scroll scroll-smooth scrollbar-hide
        md:py-20 md:gap-16 md:text-xl
        '>
            {Pages.map((page) => (
                <Link 
                    href={page.href} 
                    key={page.id}
                    className={`${pathname === page.href ? 'font-bold' : 'font-normal'} hover:text-secondary active:text-primary transition-all duration-300`}
                >
                    {page.name}
                </Link>
            ))}
        </div>
    )}
    </div>
    </>
  )
}

export default NavMenu