import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center text-white p-8 bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{t('welcome.title')}</h1>
        <p className="text-lg mb-6">{t('welcome.description')}</p>
      </div>
    </div>
  );
}
