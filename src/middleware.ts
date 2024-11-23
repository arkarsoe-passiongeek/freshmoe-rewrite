import createMiddleware from 'next-intl/middleware';
import { routing, locales } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', `/(${locales.join('|')})/:path*`]
};