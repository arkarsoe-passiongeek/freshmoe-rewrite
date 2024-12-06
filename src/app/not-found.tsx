import LottieAnimation from '@/components/layout/not-found';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Not Found Page',
    description: 'The page for not found route.',
};

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LottieAnimation />
                </div>;
            </body>
        </html>
    );
}