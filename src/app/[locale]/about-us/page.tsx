import Image from 'next/image'
import AboutUs1 from '@/public/images/about-us/aboutus-1.png'
import AboutUs2 from '@/public/images/about-us/aboutus-2-2.png'
import AboutUs3 from '@/public/images/about-us/aboutus-3.png'
import AboutUs4 from '@/public/images/about-us/aboutus-4-4.png'
import AboutUs5 from '@/public/images/about-us/aboutus-5.png'
// import missionMM from '@/public/images/about-us/ourmissionmm.png'
// import visionMM from '@/public/images/about-us/ourvisionmm.png'
import { fetchAboutUsContent } from '@/services/page/fetch-about-us-content'
import BannerHeader from '@/components/layout/banner-header'
import AboutUsBanner from "../../../../public/images/about-us/br-contact-us-header-1.png"
import { getTranslations } from 'next-intl/server'
import ReactHtmlParser from 'html-react-parser'
import ContentHeader from '@/components/custom/content/content-header'
import ContentDescription from '@/components/custom/content/content-description'
import { INTL_PREFIX_BY_COUNTRY } from '@/lib/constant'

export default async function AboutUs({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('AboutUsPage')
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale.split('_')[0]);

    const { data: content }: any = await fetchAboutUsContent(formData)
    console.log(content)

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem] mt-[104px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader locale={locale} imageSrc={AboutUsBanner} text={content?.title_1 || t('about')} />
            <div className="flex flex-col gap-12 lg:gap-24 py-[3.5rem]">
                <div className="container mx-auto flex flex-col lg:flex-row gap-10 2xl:gap-[140px] items-center">
                    <div className="w-full text-center lg:text-start lg:w-1/2 2xl:max-w-[1000px] p-0 text-c-contrast">
                        <ContentHeader>
                            {content ? (content.title_2) : t('title')}
                        </ContentHeader>
                        <ContentDescription>
                            {typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : (<>{t('description1')}<br />{t('description2')}</>)}
                        </ContentDescription>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={content?.image_2 ? `${IMAGE_URL}/${content.image_2}` : AboutUs1}
                            alt="about1"
                            width={800}
                            height={500}
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-5 mb-5 lg:h-[500px] xl:h-[768px]" >
                    <div className="relative w-full lg:w-[63%] min-h-[300px] bg-cover bg-center bg-no-repeat lg:rounded-tr-[20px] lg:rounded-br-[20px]" style={{ backgroundImage: `url(${AboutUs2.src})` }}>
                        {/* <Image
                            // src={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? missionMM : AboutUs2}
                            src={AboutUs2}
                            alt=""
                            width={800}
                            height={500}
                            className="w-full object-cover object-center lg:rounded-br-[20px] lg:rounded-tr-[20px]"
                        /> */}
                        <div className='mx-auto lg:ml-[16%] bg-c-primary bg-opacity-60 text-center p-2 lg:p-8 xl:p-14 max-w-[300px] lg:max-w-[60%] xl:max-w-[630px] min-h-[80%]'>
                            <div className='mb-2 lg:mb-8'>
                                <h3 className='text-c-white text-lg lg:text-2xl font-semibold mb-1 lg:mb-4'>Our Mission</h3>
                                <div className='w-[200px] h-[2px] lg:h-[3px] rounded-sm  bg-white mb-1 mx-auto'></div>
                            </div>
                            <p className='text-c-white text-sm lg:text-lg xl:text-xl'>FreshMoe strives to be the supplier of choice, delivering excellent customer service, producing quality sanitized and processed Fruits & Vegetables, executing business ethically, continue to be a leader in innovation and services in the fresh produce supply industry.</p>
                        </div>
                    </div>
                    <div className="relative w-[37%] h-full hidden lg:block">
                        <Image
                            src={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : AboutUs3}
                            alt=""
                            width={800}
                            height={500}
                            className="object-cover h-full object-center lg:rounded-bl-[20px] lg:rounded-tl-[20px]"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-5 mt-[-48px] md:mt-[-44px] lg:mt-[-70px] lg:h-[500px] xl:h-[768px]">
                    <div className="relative w-[37%] h-auto hidden lg:block">
                        <Image
                            src={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : AboutUs5}
                            alt=""
                            priority
                            width={800}
                            height={500}
                            className="h-full object-cover object-center lg:rounded-br-[20px] lg:rounded-tr-[20px]"
                        />
                    </div>
                    <div className="relative w-full lg:w-[63%] min-h-[300px] bg-cover bg-center bg-no-repeat lg:rounded-tl-[20px] lg:rounded-bl-[20px]" style={{ backgroundImage: `url(${AboutUs4.src})` }}>
                        {/* <Image
                            // src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? visionMM : AboutUs4}
                            src={AboutUs4}
                            alt=""
                            width={800}
                            height={500}
                            className="w-full h-full object-cover object-center lg:rounded-bl-[20px] lg:rounded-tl-[20px]"
                        /> */}
                        <div className='mx-auto lg:ml-[8%] bg-c-primary bg-opacity-60 text-center p-2 lg:p-8 xl:p-16 max-w-[300px] lg:max-w-[60%] xl:max-w-[630px] min-h-[80%]'>
                            <div className='mb-2 lg:mb-8'>
                                <h3 className='text-c-white text-lg lg:text-2xl font-semibold mb-1 lg:mb-4'>Our Vision</h3>
                                <div className='w-[200px] h-[3px] rounded-sm  bg-white mb-1 mx-auto'></div>
                            </div>
                            <p className='text-c-white text-sm lg:text-lg xl:text-xl'>FreshMoe strives to be the supplier of choice, delivering excellent customer service, producing quality sanitized and processed Fruits & Vegetables, executing business ethically, continue to be a leader in innovation and services in the fresh produce supply industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}