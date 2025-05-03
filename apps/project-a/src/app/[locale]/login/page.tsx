'use client';
import React, { useState } from 'react';
import { Button } from '@game-portal/ui';
import { routerLinks, NEXT_AUTH_PROVIDER_ID } from '@game-portal/constants';
import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn(NEXT_AUTH_PROVIDER_ID, {
      redirect: false,
      username,
      password,
    });
    if (res?.ok) {
      router.push(routerLinks.products);
    } else {
      setError(t('login.invalidCredentials'));
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">{t('login.login')}</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-600"
                    placeholder={t('login.username')}
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    {t('login.username')}
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-600"
                    placeholder={t('login.password')}
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    {t('login.password')}
                  </label>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="relative">
                  <Button type="submit" color="secondary">
                    {t('login.submit')}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
