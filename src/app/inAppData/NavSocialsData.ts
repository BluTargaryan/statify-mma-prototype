import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconType } from 'react-icons';

interface NavSocialItem {
    id: number;
    name: string;
    icon: IconType;
    href: string;
}

export const NavSocialsData: NavSocialItem[] = [
    {
        id: 1,
        name: 'Twitter',
        icon: FaSquareXTwitter,
        href: 'https://x.com/StatifyMMA'
    },
    {
        id: 2,
        name: 'Instagram',
        icon: FaInstagram,
        href: 'https://www.instagram.com/statifymma/'
    },
    {
        id: 3,
        name: 'TikTok',
        icon: FaTiktok,
        href: 'https://www.tiktok.com/@statifymma'
    },
    {
        id: 4,
        name: 'YouTube',
        icon: FaYoutube,
        href: 'https://www.youtube.com/@StatifyMMA'
    }
]
