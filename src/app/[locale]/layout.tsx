import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import "../globals.css"
import { Outfit } from 'next/font/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | FreshMoe - Fruit & Vegetables',
        default: 'FreshMoe - Fruit & Vegetables',
    },
    description: 'FreshMoe website',
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

    const getLang = (locale: string) => {
        return `${locale.split('_')[0]}-${locale.split('_')[1].toUpperCase()}`
    }

    return (
        <html lang={getLang(locale)}>
            <body className={outfit.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html >
    );
}