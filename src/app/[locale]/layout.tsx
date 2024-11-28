import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import "./globals.css"
import { Outfit } from 'next/font/google'
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Contact from '@/components/layout/contact';

type LangMap = {
    [key: string]: string; // or more specifically, you can define known locales like 'en', 'my', etc.
};

const outfit = Outfit({
    weight: ['400', '500', '600', '700'],
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

    const contactData = {
        phone: t('contact-phone'),
        email: t('contact-email'),
        address: t('contact-address'),
        followUs: t('follow-us'),
        quickLinks: t('quick-links'),
        link1: t('link1'),
        link2: t('link2'),
        link3: t('link3'),
        link4: t('link4'),
        link5: t('link5'),
        link6: t('link6'),
        contactForm: t('contact-form'),
        name: t('name-input'),
        emailInput: t('email-input'),
        message: t('message-input'),
        btn: t('submit-button'),
    }

    return (
        <html lang={lang[locale]}>
            <body className={outfit.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="bg-white-2 h-full w-full">
                        <div>
                            <Navbar locale={locale} navData={navData} />
                            <div className='mt-[94px] md:mt-[114px]'>
                                {children}
                            </div>
                        </div>
                        <Contact locale={locale} contactData={contactData} />
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html >
    );
}