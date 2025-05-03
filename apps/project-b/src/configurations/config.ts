import logo from '../assets/icons/logo.svg'
import { routerLinks } from '@game-portal/constants';

export const navconfigurations = {
  logo: logo,
  logoPosition: 'right',
  navigation: [
    { label: 'Home', url: routerLinks.home },
    { label: 'Products', url: routerLinks.products },
  ],
};
