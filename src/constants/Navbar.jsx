import { HiViewGrid, HiCube, HiShoppingBag, HiUserGroup, HiOutlineDocumentDuplicate, HiMail, HiCog, HiOutlineQuestionMarkCircle, HiLogout } from "react-icons/hi";

export const navData = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <HiViewGrid />
    },
    {
        name: 'Products',
        path: '/products',
        icon: <HiShoppingBag />
    },
    {
        name: 'Orders',
        path: '/orders',
        icon: <HiCube />
    },
    {
        name: 'Customers',
        path: '/customers',
        icon: <HiUserGroup />
    },
    {
        name: 'Transaction',
        path: '/transaction',
        icon: <HiOutlineDocumentDuplicate />
    },
    {
        name: 'Messages',
        path: '/messages',
        icon: <HiMail />
    }

];

export const bottom_link_data = [
    {
        name: 'Settings',
        path: '/settings',
        icon: <HiCog />
    },
    {
        name: 'Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    },
    {
        name: 'Logout',
        path: '/logout',
        icon: <HiLogout />
    }
]
