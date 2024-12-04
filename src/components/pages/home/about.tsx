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

// style={{ backgroundImage: `url(${aboutData.aboutFourBackground || About1.src})` }}
const About: React.FC<AboutProps> = ({ aboutData }) => {
    const pathname = usePathname()
    const lang = pathname.split('/')[1]
    return (
        <div className="">
            <div className="mx-auto md:h-[500px] lg:h-[600px] 2xl:h-[830px] md:mt-[-48px] lg:mt-[-74px] xl:mt-[-100px] relative" >
                <Image
                    src={aboutData.aboutOneBackground || About1}
                    fill
                    unoptimized
                    alt="bg"
                    className="absolute object-cover w-full left-0 right-0 h-full filter object-center hidden lg:block"
                />
                <div className="container mx-auto left-0 right-0 mt-[72px] mb-[60px] md:mb-0 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2">
                    <div className="max-w-full md:max-w-sm lg:max-w-md xl:max-w-2xl">
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
                <div className='w-full h-full'>
                    <Image
                        src={aboutData.aboutOneBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className=" w-full h-[340px] md:h-full filter object-cover object-center transition duration-200 hidden md:block lg:hidden"
                    />
                    <Image
                        src={aboutData.aboutMobile1 || AboutMobile}
                        alt=""
                        width={100}
                        height={100}
                        unoptimized
                        className=" w-full h-[20rem] md:h-auto filter object-center transition duration-200 block md:hidden"
                    />
                </div>
            </div>

            {/* our quality fresh food */}
            <div className='container py-[60px] mx-auto lg:h-[600px] 2xl:h-[830px] lg:flex lg:items-center'>
                <div className='mx-auto flex justify-between flex-col-reverse md:flex-row items-center gap-[32px] 2xl:gap-[147px]'>
                    <div className='md:flex-1'>
                        <Image
                            src={aboutData.aboutTwoBackground || AAbout2}
                            width={500}
                            height={500}
                            alt='two'
                            className="object-cover w-auto h-auto 2xl:w-[800px] 2xl:h-[680px] filter object-center transition duration-200"
                        />
                    </div>
                    <div className='md:flex-1'>
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
            <div className="bg-cover bg-center md:relative md:h-[700px] lg:h-[600px] 2xl:h-[830px]">
                <Image
                    src={aboutData.aboutThreeBackground || About4}
                    fill
                    unoptimized
                    alt="bg"
                    className="absolute object-cover filter object-center transition duration-200 hidden lg:block"
                />
                <div className="container mx-auto left-0 right-0 bg-c-footer-bg sm:bg-transparent md:absolute md:top-0 md:left-0 md:right-0 md:bottom-0 flex md:items-center">
                    <div className="pb-[60px] lg:mx-0 lg:w-1/2 max-w-full md:max-w-sm lg:max-w-md xl:max-w-2xl">
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
                <div className="w-full h-full">
                    <Image
                        src={aboutData.aboutThreeBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className="w-full h-[270px] md:h-full filter transition duration-200 hidden md:block lg:hidden"
                    />
                    <Image
                        src={aboutData.aboutMobile2 || AboutMobile2}
                        alt=""
                        width={100}
                        height={100}
                        unoptimized
                        className=" w-full h-[20rem] md:h-auto filter object-center transition duration-200 block md:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;