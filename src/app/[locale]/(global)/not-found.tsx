import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import("@/components/layout/not-found"));

export const metadata: Metadata = {
    title: 'Not Found Page',
    description: 'The page for not found route.',
};

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');
    return <div className='h-full flex items-center justify-center'>
        <LottieAnimation />
    </div>;
}