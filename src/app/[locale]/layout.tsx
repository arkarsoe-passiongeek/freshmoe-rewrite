import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import "./globals.css"
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

type LangMap = {
    [key: string]: string; // or more specifically, you can define known locales like 'en', 'my', etc.
};

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const lang: LangMap = {
        'mm': 'my-MM'
    }

    const t = await getTranslations('LandingPage')

    const navData = {
        home: t('home'),
        aboutUs: t('about-us'),
        ourServices: t('our-services'),
        profile: t('profile'),
        contact: t('contact'),
        login: t('login'),
        register: t('register'),
        download: t('download')
    }

    return (
        <html lang={lang[locale]}>
            <body className={poppins.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="bg-white-2 h-full w-full">
                        <div>
                            <Navbar locale={locale} navData={navData} />
                            <div className='mt-[94px] md:mt-[114px]'>
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html >
    );
}