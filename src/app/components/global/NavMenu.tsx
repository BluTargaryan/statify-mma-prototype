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
            {isMenuActive ? (
                <MdClose 
                    className='text-3xl hover:text-secondary active:text-primary'
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuActive(!isMenuActive);
                    }}
                />
            ) : (
                <MdMenu 
                    className='text-3xl hover:text-secondary active:text-primary '
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuActive(!isMenuActive);
                    }}
                />
            )}

    {isMenuActive && (
        <div className='absolute left-0 top-[56px] w-full py-14 flex flex-col items-center justify-center gap-5 bg-white shadow-lg z-50'>
            {Pages.map((page) => (
                <Link 
                    href={page.href} 
                    key={page.id}
                    className={`${pathname === page.href ? 'font-bold' : 'font-normal'}`}
                >
                    {page.name}
                </Link>
            ))}
        </div>
    )}
    </>
  )
}

export default NavMenu