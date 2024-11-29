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
        <div className="p-5 xl:p-[20px] bg-c-footer-bg rounded-[20px] w-full hover:scale-105 hover:shadow-xl">
            <Image
                src={imageSrc}
                unoptimized
                width={100}
                height={100}
                alt=""
                className="mb-[24px] object-cover w-full h-auto filter object-center transition duration-200 rounded-lg"
            />
            <div className='space-y-4'>
                <h3 className="text-lg font-semibold xl:text-3xl text-c-primary">
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
    formData.append('country', locale);

    const { data: content }: any = await fetchOurServicesContent(formData)

    return (
        <div className="bg-white h-auto relative mt-[98px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px]">
            <BannerHeader locale={locale} imageSrc={OurServicesBanner} text={content?.title_1 || t('service')} />
            <div className="flex flex-col gap-10 lg:gap-16 xl:gap-[120px] max-w-[110rem] px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto py-[3.5rem] xl:pb-[150px]">
                <div className="text-center text-gray-600 xl:max-w-[1000px] mx-auto">
                    <ContentHeader>
                        {content ? content.title_2 : t('title')}
                    </ContentHeader>
                    <ContentDescription>
                        {content && typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : t('description')}
                    </ContentDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-[0.7rem] py-[1rem] text-gray-600">
                    <Card imageSrc={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : Service1} title={content ? content.title_3 : t('card-one-title')} description={content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('card-one-description')} />
                    <Card imageSrc={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : Service2} title={content ? content.title_4 : t('card-two-title')} description={content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('card-two-description')} />
                    <Card imageSrc={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : Service3} title={content ? content.title_4 : t('card-three-title')} description={content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('card-three-description')} />
                </div>
            </div>

            {/* Our Application */}
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: "url('/images/our-services/about3-6.png')" }}
            >
                <div className="flex lg:flex-row flex-col items-center gap-[5rem] lg:gap-0 px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto pt-0 lg:pt-10  h-auto max-w-[110rem] relative">
                    <div className="lg:w-2/4 xl:w-[630px] w-full mt-[8rem] md:mt-[10rem] lg:mt-0">
                        <div className="p-2">
                            <div className="text-slate-600 text-left space-y-8 xl:space-y-[60px]">
                                <div>
                                    <ContentHeader>
                                        {content?.title_6 || t('about-four-title')}
                                    </ContentHeader>
                                    <ContentDescription>
                                        {content && typeof content?.content_6 === 'string' ? ReactHtmlParser(content.content_6) : (<>{t('about-four-description-1')}<br />{t('about-four-description-2')}</>)}
                                    </ContentDescription>
                                </div>
                                <div className="flex justify-center lg:justify-start gap-7 md:gap-3 mt-5 ">
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
                    <div className="w-full lg:w-2/4 xl:w-3/5 lg:block  lg:pt-[5rem] xl:pt-[6rem] lg:pl-[100px] xl:pl-[175px]">
                        <div className="h-full overflow-hidden flex justify-center lg:justify-end">
                            <Image
                                src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : AAAbout3}
                                unoptimized
                                width={100}
                                height={100}
                                alt=""

                                className="object-cover w-full md:w-[70%] lg:w-full xl:w-[90%] 2xl:w-[80%] h-auto filter object-center transition duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Retail Shop */}
            <div className="flex 2xl:py-[100px] flex-col-reverse lg:flex-row items-center max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto my-10 xl:h-[830px] xl:gap-[103px]">
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
                <div className="w-full lg:w-1/2 p-0 md:py-[3rem] lg:pl-[3rem] text-justify mb-8">
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