import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import("@/components/layout/not-found"), { ssr: false });

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