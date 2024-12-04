import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// export const locales = ['mm_mm', 'en_mm', 'th_th', 'en_th', 'en_sg', 'en_us', 'en_global', 'es_global', 'cn_global', 'hi_global', 'en_en', 'en_ae', 'ar_ae', 'ar_global'];
export const locales = ['mm_mm', 'mm_global', 'en_mm', 'th_th', 'en_th', 'en_sg', 'en_us', 'en_global', 'es_global', 'cn_global', 'hi_global', 'th_global', 'en_en', 'en_ae', 'ar_ae', 'ar_global'];

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en_global'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);