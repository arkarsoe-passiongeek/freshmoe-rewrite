import Image from 'next/image'
import AboutUs1 from '@/public/images/about-us/aboutus-1.png'
import AboutUs2 from '@/public/images/about-us/aboutus-2-2.png'
import AboutUs3 from '@/public/images/about-us/aboutus-3.png'
import AboutUs4 from '@/public/images/about-us/aboutus-4-4.png'
import AboutUs5 from '@/public/images/about-us/aboutus-5.png'
import { fetchAboutUsContent } from '@/services/page/fetch-about-us-content'
import BannerHeader from '@/components/layout/banner-header'
import AboutUsBanner from "@/public/images/about-us/br-contact-us-header-1.png"
import { getTranslations } from 'next-intl/server'
import ReactHtmlParser from 'html-react-parser'
import ContentHeader from '@/components/custom/content/content-header'
import ContentDescription from '@/components/custom/content/content-description'

const Content = ({ title, des }: any) => {
    return (
        <div className='mx-auto lg:ml-[16%] bg-c-primary bg-opacity-60 text-center p-2 md:p-8 xl:p-14 max-w-[300px] lg:max-w-[60%] xl:max-w-[630px] min-h-[80%]'>
            <div className='mb-2 md:mb-3 lg:mb-8'>
                <h3 className='text-c-white text-lg md:text-xl lg:text-2xl font-semibold mb-1 lg:mb-4'>{title}</h3>
                <div className='w-[200px] h-[2px] md:h-[3px] rounded-sm bg-white mb-1 mx-auto'></div>
            </div>
            <p className='text-c-white text-sm md:text-[14px] lg:text-lg xl:text-xl'>{des}</p>
        </div>
    )
}

export default async function AboutUs({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('AboutUsPage')
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale.split('_')[0]);

    const { data: content }: any = await fetchAboutUsContent(formData)

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem] mt-[104px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader locale={locale} imageSrc={AboutUsBanner} text={content?.title_1 || t('about')} />
            <div className="container mx-auto my-10 flex flex-col md:flex-row gap-10 2xl:gap-[140px] items-center">
                <div className="w-full text-center md:text-start md:w-1/2 2xl:max-w-[1000px] p-0 text-c-contrast">
                    <ContentHeader>
                        {content ? (content.title_2) : t('title')}
                    </ContentHeader>
                    <ContentDescription>
                        {typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : (<>{t('description1')}<br />{t('description2')}</>)}
                    </ContentDescription>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src={content?.image_2 ? `${IMAGE_URL}/${content.image_2}` : AboutUs1}
                        alt="about1"
                        width={800}
                        height={500}
                        className="object-cover object-center rounded-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[10px] py-[3.5rem]">
                <div className="flex flex-row justify-between gap-[10px] h-[210px] md:h-[300px] lg:h-[500px] xl:h-[768px]" >
                    <div className="relative w-full md:w-[63%] bg-cover bg-center bg-no-repeat md:rounded-tr-[20px] md:rounded-br-[20px]" style={{ backgroundImage: `url(${AboutUs2.src})` }}>
                        {/* <Image
                            // src={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? missionMM : AboutUs2}
                            src={AboutUs2}
                            alt=""
                            width={800}
                            height={500}
                            className="w-full object-cover object-center md:rounded-br-[20px] md:rounded-tr-[20px]"
                        /> */}
                        <Content title='Our Mission' des="FreshMoe strives to be the supplier of choice, delivering excellent customer service, producing quality sanitized and processed Fruits & Vegetables, executing business ethically, continue to be a leader in innovation and services in the fresh produce supply industry." />
                    </div>
                    <div className="relative w-[37%] h-full hidden md:block">
                        <Image
                            src={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : AboutUs3}
                            alt=""
                            width={800}
                            height={500}
                            className="object-cover w-full h-full object-center md:rounded-bl-[20px] md:rounded-tl-[20px]"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-[10px] h-[210px] md:h-[300px] lg:h-[500px] xl:h-[768px]">
                    <div className="relative w-[37%] h-auto hidden md:block">
                        <Image
                            src={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : AboutUs5}
                            alt=""
                            width={800}
                            height={500}
                            className="h-full object-cover object-center md:rounded-br-[20px] md:rounded-tr-[20px]"
                        />
                    </div>
                    <div className="relative w-full md:w-[63%] bg-cover bg-center bg-no-repeat md:rounded-tl-[20px] md:rounded-bl-[20px]" style={{ backgroundImage: `url(${AboutUs4.src})` }}>
                        {/* <Image
                            // src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? visionMM : AboutUs4}
                            src={AboutUs4}
                            alt=""
                            width={800}
                            height={500}
                            className="w-full h-full object-cover object-center md:rounded-bl-[20px] md:rounded-tl-[20px]"
                        /> */}
                        <Content title='Our Vision' des="FreshMoe strives to be the supplier of choice, delivering excellent customer service, producing quality sanitized and processed Fruits & Vegetables, executing business ethically, continue to be a leader in innovation and services in the fresh produce supply industry." />
                    </div>
                </div>
            </div>
        </div>
    )
}