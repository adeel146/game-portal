import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { routerLinks } from '@game-portal/constants';
import { Button } from '../Button';
import './Navbar.css';

type NavBarProps = {
  logo: any;
  logoPosition: string;
  navigation: { label: string; url: string }[];
  handleLogout?: () => void;
  authenticated:boolean
};

export const NavBar: React.FC<NavBarProps> = ({
  logo,
  logoPosition = 'left',
  navigation,
  handleLogout,
  authenticated
}) => {

  return (
    <nav className={`navbar navbar--${logoPosition}`}>
      <div className="navbar__logo">
        <Link href={routerLinks.home}>
          <Image
            width={30}
            height={30}
            src={logo}
            alt="Brand Logo"
            className="navbar__logo-img"
          />
        </Link>
      </div>
      <ul className="navbar__nav">
        {navigation.map((item) => (
          <li key={item.label} className="navbar__nav-item">
            <a href={item.url} className="navbar__nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar__logout">
        <Button onClick={handleLogout} color="secondary">
          {authenticated ? 'LogOut' : 'LogIn'}
        </Button>
      </div>
    </nav>
  );
};
