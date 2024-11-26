'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import About1 from '../../../../public/images/home/about1.png'
import AboutMobile from '../../../../public/images/home/aboutMobile.png'
import AboutMobile2 from '../../../../public/images/home/aboutMobile2.png'
import AAbout2 from '../../../../public/images/home/about2-1.png'
import About4 from '../../../../public/images/home/about44.png'

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
        <div className="mt-[-20px] md:mt-[-30px] lg:mt-[-265px] xl:mt-[-356px] 2xl:mt-[-380px] ">
            <div className="bg-cover bg-center lg:relative">
                <Image
                    src={aboutData.aboutOneBackground || About1}
                    width={100}
                    height={100}
                    unoptimized
                    alt="bg"
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />
                <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto max-w-[110rem] py-10 lg:py-0 ">
                    <div className="max-w-full lg:max-w-[29rem] xl:max-w-[35rem] 2xl:max-w-[42rem]">
                        <div className="text-gray-600">
                            <h1 className="text-xl lg:text-3xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full">
                                {aboutData.aboutOneTitle}
                            </h1>
                            <h2 className={`text-xss lg:text-sm w-full md:leading-4 lg:leading-6`}>
                                {aboutData.aboutOneDescription1}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={aboutData.aboutOneBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className=" w-full h-[30rem] md:h-auto filter object-center transition duration-200 hidden sm:block lg:hidden"
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

            {/* Our Quality */}
            <div className="flex flex-col-reverse lg:flex-row gap-[5rem] lg:gap-0 px-[2rem] md:px-[4rem] lg:px-[5rem] h-auto mx-auto pt-20 lg:py-20 max-w-[110rem]">
                <div className="w-full lg:w-2/4 about2-img lg:top-[7rem] lg:left-[2rem] xl:top-[8rem] xl:left-[4rem] 2xl:top-[7rem] 2xl:left-[5rem] bottom-0 hidden lg:block">
                    <div className="h-full overflow-hidden ">
                        <Image
                            src={aboutData.aboutTwoBackground || AAbout2}
                            width={100}
                            height={100}
                            unoptimized
                            alt='two'
                            className="object-cover w-full  h-auto filter object-center transition duration-200"
                        />
                    </div>
                </div>
                <div className="w-full xl:w-2/4 about2-img  block lg:hidden">
                    <div className="h-full overflow-hidden">
                        <Image
                            src={aboutData.aboutTwoBackground || AAbout2}
                            width={100}
                            height={100}
                            unoptimized
                            alt=''
                            className="object-cover w-full lg:w-[50%] xl:w-full 2xl:w-[80%] h-auto filter object-center transition duration-200"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-2/4 paragraph lg:pl-[50px] pt-[25px] xl:pl-[120px]  2xl:pl-[130px] mb-0 xl:mb-[3rem]">
                    <div className="w-full">
                        <div className="text-gray-600">
                            <h1 className="text-xl lg:text-3xl text-c-primary-2 text-shadow font-c-primary mb-3 font-bold">
                                {aboutData.aboutTwoTitle}
                            </h1>
                            <h2 className={`text-xss lg:text-sm md:leading-4 lg:leading-6`}>
                                {aboutData.aboutTwoDescription1}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center lg:relative">
                <Image
                    src={aboutData.aboutOneBackground || About4}
                    width={100}
                    height={100}
                    unoptimized
                    alt="bg"
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />
                <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto max-w-[110rem] py-20 lg:py-0 ">
                    <div className="max-w-full lg:max-w-[45rem] xl:max-w-[50rem]">
                        <div className="text-gray-600">
                            <h1 className="text-xl lg:text-3xl text-c-primary-2 text-shadow font-c-primary mb-3 font-bold">
                                {aboutData.aboutThreeTitle}
                            </h1>
                            <h2 className={`text-poppins text-xss lg:text-sm md:leading-4 lg:leading-6  lg:w-[65%] xl:w-[80%]  w-full mt-3 xl:mt-5`}>
                                {aboutData.aboutThreeDescription1}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={aboutData.aboutOneBackground || About1}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                        className=" w-full h-[30rem] md:h-auto filter object-center transition duration-200 hidden sm:block lg:hidden"
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