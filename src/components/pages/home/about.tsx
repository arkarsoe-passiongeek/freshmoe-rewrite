'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import About1 from '@/public/images/home/about1.png'
import AboutMobile from '@/public/images/home/aboutMobile.png'
import AboutMobile2 from '@/public/images/home/aboutMobile2.png'
import AAbout2 from '@/public/images/home/about2-1.png'
import About4 from '@/public/images/home/about44.png'
import ContentHeader from '@/components/custom/content/content-header'
import ContentDescription from '@/components/custom/content/content-description'

interface AboutProps {
    aboutData: {
        aboutOneTitle: any;
        aboutOneDescription1: any;
        aboutOneDescription2: any;
        aboutOneBackground: any;

        aboutTwoTitle: any;
        aboutTwoDescription1: any;
        aboutTwoDescription2: any;
        aboutTwoBackground: any;

        aboutThreeTitle: any;
        aboutThreeDescription1: any;
        aboutThreeDescription2: any;
        aboutThreeBackground: any;

        aboutFourTitle: any;
        aboutFourDescription1: any;
        aboutFourDescription2: any;
        aboutFourBackground: any;

        aboutImage1: any;
        aboutImage2: any;
        aboutImage3: any;
        aboutMobile1: any;
        aboutMobile2: any;
        aboutMobile3: any;

    };
}
const About: React.FC<AboutProps> = ({ aboutData }) => {
    const pathname = usePathname()
    const lang = pathname.split('/')[1]
    return (
        <div className="">
            <div className="lg:h-[600px] 2xl:h-[830px] lg:mt-[-74px] xl:mt-[-100px] relative">
                <Image
                    src={aboutData.aboutOneBackground || About1}
                    width={100}
                    height={100}
                    unoptimized
                    alt="bg"
                    className="object-cover w-full h-full filter object-center hidden lg:block"
                />
                <div className="container mx-auto mt-[72px] mb-[60px] lg:mb-0 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 2xl:px-[190px]">
                    <div className="max-w-full lg:max-w-[29rem] xl:max-w-[35rem] 2xl:max-w-[42rem]">
                        <div className="text-c-contrast">
                            <ContentHeader className="text-lg sm:text-lg font-semibold">
                                {aboutData.aboutOneTitle}
                            </ContentHeader>
                            <ContentDescription className="text-sm sm:text-sm">
                                {aboutData.aboutOneDescription1}
                            </ContentDescription>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={aboutData.aboutOneBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className=" w-full h-[340px] md:h-auto filter object-cover object-right transition duration-200 hidden sm:block lg:hidden"
                    />
                    <Image
                        src={aboutData.aboutMobile1 || AboutMobile}
                        alt=""
                        width={100}
                        height={100}
                        unoptimized
                        className=" w-full h-[20rem] md:h-auto filter object-center transition duration-200 block sm:hidden"
                    />
                </div>
            </div>

            {/* our quality fresh food */}
            <div className='container py-[60px] mx-auto lg:h-[600px] 2xl:h-[830px] lg:flex lg:items-center'>
                <div className='mx-auto flex justify-between flex-col-reverse lg:flex-row items-center gap-[32px] 2xl:gap-[147px]'>
                    <div className='lg:flex-1'>
                        <Image
                            src={aboutData.aboutTwoBackground || AAbout2}
                            width={500}
                            height={500}
                            alt='two'
                            className="object-cover 2xl:w-[800px] 2xl:h-[680px] filter object-center transition duration-200"
                        />
                    </div>
                    <div className='lg:flex-1'>
                        <ContentHeader className="text-lg sm:text-lg font-semibold">
                            {aboutData.aboutTwoTitle}
                        </ContentHeader>
                        <ContentDescription className="text-sm sm:text-sm">
                            {aboutData.aboutTwoDescription1}
                        </ContentDescription>
                    </div>
                </div>
            </div>

            {/* Our Organic Farm */}
            <div className="bg-cover bg-center lg:relative lg:h-[600px] 2xl:h-[830px]">
                <Image
                    src={aboutData.aboutThreeBackground || About4}
                    fill
                    unoptimized
                    alt="bg"
                    className="object-cover filter object-center transition duration-200 hidden lg:block"
                />
                <div className="bg-c-footer-bg sm:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:items-center mx-auto">
                    <div className="container mx-auto py-[60px] lg:mx-0 lg:w-1/2 2xl:px-[190px]">
                        <div className="text-gray-600">
                            <ContentHeader className="text-lg sm:text-lg font-semibold">
                                {aboutData.aboutThreeTitle}
                            </ContentHeader>
                            <ContentDescription className="text-sm sm:text-sm">
                                {aboutData.aboutThreeDescription1}
                            </ContentDescription>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={aboutData.aboutThreeBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className="w-full h-[270px] md:h-auto filter object-right object-cover transition duration-200 hidden sm:block lg:hidden"
                    />
                    <Image
                        src={aboutData.aboutMobile2 || AboutMobile2}
                        alt=""
                        width={100}
                        height={100}
                        unoptimized
                        className=" w-full h-[20rem] md:h-auto filter object-center transition duration-200 block sm:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;