import NotFound from '@/components/layout/not-found';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');
    return <div className='h-[500px] flex items-center justify-center'>
        <NotFound />
    </div>;
}