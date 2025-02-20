'use client';
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  cn,
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider
} from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Navbar = ({ session }: { session: any }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  if (pathname.includes('/auth')) return null;

  const menuItems = [
    'About',
    'Blog',
    'Customers',
    'Pricing',
    'Enterprise',
    'Changelog',
    'Documentation',
    'Contact Us'
  ];

  return (
    <> 
    
    </>
  );
};

export default Navbar;
