interface Page {
    id: number;
    name: string;
    href: string;
}

export const Pages: Page[] = [
    {
        id: 1,
        name: 'Home',
        href: '/'
    },
    {
        id: 2,
        name: 'Lists',
        href: '/lists'
    },
    {
        id: 3,
        name: 'Events',
        href: '/events'
    },
    {
        id: 4,
        name: 'About',
        href: '/about'
    },
    {
        id: 5,
        name: 'Contact Us',
        href: '/contact'
    }
]
