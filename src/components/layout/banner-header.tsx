import { INTL_PREFIX_BY_COUNTRY } from '@/lib/constant';
import Image, { StaticImageData } from 'next/image';
import pageBanner from "@/public/images/layout/page-banner.png"

interface BannerHeaderProps {
    imageSrc?: StaticImageData | string;
    text: string;
    locale: string
}

const BannerHeader: React.FC<BannerHeaderProps> = ({ text, imageSrc, locale }) => {
    return (
        <div className="bg-white h-auto relative z-100">
            <div className="bg-cover bg-center relative">
                <Image
                    src={imageSrc ?? pageBanner}
                    alt=""
                    priority
                    className="object-cover w-full h-auto filter object-center transition duration-200"
                />
                <h1 className={`container mx-auto w-full left-0 right-0 text-center absolute top-1/2 -translate-y-1/2 text-c-white text-[16px] md:text-xl lg:text-2xl xl:3xl 2xl:4xl font-semibold`}>
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default BannerHeader;

