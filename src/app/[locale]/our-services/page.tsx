import Image from 'next/image'
import Service1 from "@/public/images/our-services/ourservices-1.png"
import Service2 from '@/public/images/our-services/ourservices-2.png'
import Service3 from '@/public/images/our-services/ourservices-3.png'
import ReactHtmlParser from 'html-react-parser';
import Android from '@/public/images/our-services/about3-1.png'
import AAAbout3 from '@/public/images/our-services/about3-5.png'
import Apple from '@/public/images/our-services/about3-2.png'
import RetailShop from '@/public/images/our-services/RetailShop.png'
import { getTranslations } from 'next-intl/server'
import { fetchOurServicesContent } from '@/services/page/fetch-our-services-content'
import BannerHeader from '@/components/layout/banner-header'
import OurServicesBanner from "@/public/images/our-services/br-our-services-header-1.png"
import ContentHeader from '@/components/custom/content/content-header';
import ContentDescription from '@/components/custom/content/content-description';

const Card = ({ imageSrc, title, description }: { imageSrc: any, title: any, description: any }) => {
    return (
        <div className="p-4 xl:p-[20px] bg-c-footer-bg rounded-[20px] w-full hover:scale-105 hover:shadow-xl">
            <Image
                src={imageSrc}
                unoptimized
                width={100}
                height={100}
                alt=""
                className="mb-4 lg:mb-[24px] object-cover w-full h-auto filter object-center transition duration-200 rounded-[10px]"
            />
            <div className='space-y-2 lg:space-y-4'>
                <h3 className="text-lg capitalize font-semibold xl:text-3xl text-c-primary">
                    {title}
                </h3>
                <p className='text-c-contrast text-sm lg:text-lg'>
                    {description}
                </p>
            </div>
        </div>
    )
}


export default async function OurService({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('OurServicePage')
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale.split('_')[0]);

    const { data: content }: any = await fetchOurServicesContent(formData)

    return (
        <div className="bg-white h-auto relative mt-[98px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px]">
            <BannerHeader locale={locale} imageSrc={OurServicesBanner} text={content?.title_1 || t('service')} />
            <div className="container mx-auto flex flex-col gap-10 lg:gap-16 xl:gap-[120px] py-10 md:pb-20 xl:pb-[150px]">
                <div className="text-center text-c-contrast md:max-w-lg xl:max-w-[1000px] mx-auto">
                    <ContentHeader>
                        {content ? content.title_2 : t('title')}
                    </ContentHeader>
                    <ContentDescription>
                        {content && typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : t('description')}
                    </ContentDescription>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto md:max-w-md lg:max-w-full gap-5 text-[0.7rem] text-gray-600">
                    <Card imageSrc={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : Service1} title={content ? content.title_3 : t('card-one-title')} description={content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('card-one-description')} />
                    <Card imageSrc={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : Service2} title={content ? content.title_4 : t('card-two-title')} description={content && typeof content?.content_4 === 'string' ? ReactHtmlParser(content.content_4) : t('card-two-description')} />
                    <Card imageSrc={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : Service3} title={content ? content.title_5 : t('card-three-title')} description={content && typeof content?.content_5 === 'string' ? ReactHtmlParser(content.content_5) : t('card-three-description')} />
                </div>
            </div>

            {/* Our Application */}
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: "url('/images/our-services/about3-6.png')" }}
            >
                <div className="container mx-auto flex md:flex-row flex-col items-center py-10 gap-14 md:gap-10 lg:gap-[100px] 2xl:gap-[150px] h-auto relative">
                    <div className="lg:w-2/4 xl:w-[630px] w-full">
                        <div className="p-2">
                            <div className="text-c-contrast text-center md:text-start">
                                <div className='space-y-5'>
                                    <ContentHeader>
                                        {content?.title_6 || t('about-four-title')}
                                    </ContentHeader>
                                    <ContentDescription>
                                        {content && typeof content?.content_6 === 'string' ? ReactHtmlParser(content.content_6) : (<>{t('about-four-description-1')}<br />{t('about-four-description-2')}</>)}
                                    </ContentDescription>
                                </div>
                                <div className="flex justify-center lg:justify-start gap-6 md:gap-3 mt-5 ">
                                    <div className="">
                                        <Image
                                            src={Android}
                                            alt=""
                                            className="object-cover w-[12rem] md:w-[10rem] h-auto filter object-center transition duration-200"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={Apple}
                                            alt=""
                                            className="object-cover w-[12rem] md:w-[10rem] h-auto filter object-center transition duration-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 xl:w-3/5 lg:block">
                        <div className="h-full overflow-hidden flex justify-center lg:justify-end">
                            <Image
                                // src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : AAAbout3}
                                src={AAAbout3}
                                unoptimized
                                width={100}
                                height={100}
                                alt=""

                                className="object-cover w-full md:w-[350px] lg:w-full xl:w-[90%] 2xl:w-[80%] h-auto filter object-center transition duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Retail Shop */}
            <div className="container mx-auto flex 2xl:py-[100px] flex-col-reverse md:flex-row items-center mt-10 mb-28 lg:mb-10 xl:h-[830px] gap-10 lg:gap-[100px]">
                <div className="w-full lg:w-1/2">
                    <Image
                        src={content?.image_7 ? `${IMAGE_URL}/${content.image_7}` : RetailShop}
                        unoptimized
                        width={100}
                        height={100}
                        alt=""
                        className="object-cover w-full h-auto filter object-center rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-5 text-center md:text-justify">
                    <ContentHeader>
                        {content?.title_7 || t('retail-title')}
                    </ContentHeader>
                    <ContentDescription>
                        {content && typeof content?.content_7 === 'string' ? ReactHtmlParser(content?.content_7) : (<>{t('retail-des-1')}<br />{t('retail-des-2')}</>)}
                    </ContentDescription>
                </div>
            </div>
        </div>
    )
}