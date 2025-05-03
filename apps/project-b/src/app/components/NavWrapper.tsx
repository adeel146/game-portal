'use client';
import { useSession ,signOut } from 'next-auth/react';
import { NavBar } from '@game-portal/ui';
import { navconfigurations } from '../../configurations/config';
import { useRouter } from 'next/navigation';
import { routerLinks } from '@game-portal/constants';

export default function NavWrapper() {
  const { data: session } = useSession();
  const router =useRouter()
  const isLoggedIn = !!session;
    const handleLogout = () => {
    if (isLoggedIn) {
      signOut({ callbackUrl: routerLinks.home });
    } else {
      router.push(routerLinks.login);
    }
  };

  return <NavBar {...navconfigurations} handleLogout={handleLogout}  authenticated={isLoggedIn} />;
}
