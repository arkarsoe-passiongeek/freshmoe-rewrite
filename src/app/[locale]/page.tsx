import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';


export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }>; }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}


const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params

    // Enable static rendering
    setRequestLocale(locale);

    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = await getTranslations('Register');

    return (
        <div>
            <h1>{t('title')}</h1>
            <Link href="/about">{t('about')}</Link>
        </div>
    );
}

export default Home