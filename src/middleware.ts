import createMiddleware from 'next-intl/middleware';
import { routing, locales } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', `/(mm_mm|mm_global|en_mm|th_th|en_th|en_sg|en_us|en_global|es_global|cn_global|hi_global|en_en|en_ae|ar_ae|ar_global)/:path*`]
};