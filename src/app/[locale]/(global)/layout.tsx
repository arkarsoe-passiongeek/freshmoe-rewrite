import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Contact from '@/components/layout/contact';

export default async function GlobalLayout({
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
        <div className="bg-white-2 h-full w-full min-h-[100vh] flex flex-col justify-between">
            <div className='relative'>
                <Navbar locale={locale} navData={navData} />
                <div className='mt-[94px] md:mt-[114px] lg:mt-[142px]'>
                    {children}
                </div>
            </div>
            <div>
                <Contact locale={locale} contactData={contactData} />
                <Footer />
            </div>
        </div>
    );
}