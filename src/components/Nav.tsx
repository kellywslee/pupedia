'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../public/images/1.png';

// const navLinks = [
//   { id: 1, name: 'Home', path: '/' },
//   { id: 2, name: 'About', path: '/about' },
//   { id: 3, name: 'Contact Dev', path: '/contact' },
// ];

export default function Nav() {
  const [isHambugerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when user lands on a new page
  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  // Close dropdown when the window is resized to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div
        ref={dropdownRef}
        className={`${
          isHambugerOpen
            ? 'absolute right-0 top-full z-50 flex h-dvh w-full flex-col items-center justify-center gap-y-6 bg-slate-50 pb-12'
            : 'hidden lg:flex lg:w-11/12 lg:max-w-7xl lg:items-center lg:justify-between lg:gap-x-6'
        }`}
      >
        {/* <ul className="flex w-full flex-col items-center gap-x-6 gap-y-6 lg:flex-row">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-sm transition-all duration-300 ease-in-out hover:font-bold"
              onClick={closeMenu}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul> */}
        <Link href="/">
          <Image src={logo} alt="pupeida logo" width={200} />
        </Link>
        <div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Dev</Link>
        </div>
      </div>

      <div ref={hamburgerRef} className="z-50 block justify-end lg:hidden">
        <Hamburger
          toggled={isHambugerOpen}
          toggle={() => setHamburgerOpen((prev) => !prev)}
          label="Show menu"
          size={18}
        />
      </div>
    </nav>
  );
}
