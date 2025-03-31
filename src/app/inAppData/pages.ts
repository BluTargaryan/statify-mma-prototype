interface Page {
    id: number;
    name: string;
    href: string;
    pageType: 'page' | 'category';
}

export const Pages: Page[] = [
    {
        id: 1,
        name: 'Home',
        href: '/',
        pageType: 'page'
    },
    {
        id: 2,
        name: 'Lists',
        href: '/lists',
        pageType: 'category'
    },
    {
        id: 3,
        name: 'Events',
        href: '/events',
        pageType: 'category'
    },
    {
        id: 4,
        name: 'News',
        href: '/news',
        pageType: 'category'
    },
    {
        id: 5,
        name: 'About',
        href: '/about',
        pageType: 'page'
    },
    {
        id: 6,
        name: 'Contact Us',
        href: '/contact',
        pageType: 'page'
    },
    {
        id: 7,
        name: 'Privacy Policy',
        href: '/privacy-policy',
        pageType: 'page'
    },
    {
        id: 8,
        name: 'T & Cs',
        href: '/t-and-cs',
        pageType: 'page'
    }
]
