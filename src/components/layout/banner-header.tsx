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
                <h1 className={`text-poppins absolute top-[40%] left-[49%] md:left-[51%] ${locale == INTL_PREFIX_BY_COUNTRY.myanmar ? ' left-[47vw] sm:left-[48%] md:left-[51%] lg:left-[50%] 2xl:left-[51%] text-md ' : 'left-[47%] md:left-[51%] xl:left-1/2 text-xl '}  transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[3vw] md:text-2xl
        lg:text-3xl xl:text-[2.2vw] 2xl:text-[2.5vw]`}>
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default BannerHeader;

