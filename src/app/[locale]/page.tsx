import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';


export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({ params }: { params: Promise<{ locale: string }>; }) {
//     const { locale } = await params
//     const t = await getTranslations({ locale, namespace: 'Metadata' });

//     return {
//         title: t('title'),
//         description: t('description')
//     };
// }


const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div>
        </div>
    );
}

export default Home