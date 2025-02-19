import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

const NavMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

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
        <div className='absolute left-0 top-28 w-full h-full flex items-center gap-5 bg-bg shadow-lg z-50'>
            
        </div>
    )}
    </>
  )
}

export default NavMenu