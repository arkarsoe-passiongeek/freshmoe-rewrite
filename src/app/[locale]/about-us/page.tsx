import Image from 'next/image'
import AboutUs1 from '@/public/images/about-us/aboutus-1.png'
import AboutUs2 from '@/public/images/about-us/aboutus-2.png'
import AboutUs3 from '@/public/images/about-us/aboutus-3.png'
import AboutUs4 from '@/public/images/about-us/aboutus-4.png'
import AboutUs5 from '@/public/images/about-us/aboutus-5.png'
import missionMM from '@/public/images/about-us/ourmissionmm.png'
import visionMM from '@/public/images/about-us/ourvisionmm.png'
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
    formData.append('country', locale);

    const { data: content }: any = await fetchAboutUsContent(formData)
    console.log(content)

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem] mt-[104px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader locale={locale} imageSrc={AboutUsBanner} text={content?.title_1 || t('about')} />
            <div className="flex flex-col gap-16 lg:gap-24 py-[3.5rem]">
                <div className="flex flex-col lg:flex-row gap-16 2xl:gap-[140px] items-center px-[2rem] md:px-[4rem] lg:px-[5rem] max-w-[110rem] mx-auto">
                    <div className="w-full lg:w-1/2 2xl:max-w-[1000px] p-0 text-c-contrast">
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

                <div className="flex flex-row justify-between gap-5 h-[500px] 2xl:h-[768px]">
                    <div className="relative w-[63%] h-auto">
                        <Image
                            src={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? missionMM : AboutUs2}
                            alt=""
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="relative w-[37%] h-auto">
                        <Image
                            src={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : AboutUs3}
                            alt=""
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-5 mt-[-48px] md:mt-[-44px] lg:mt-[-70px] h-[500px] xl:h-[768px]">
                    <div className="relative w-[37%] h-auto">
                        <Image
                            src={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : AboutUs5}
                            alt=""
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="relative w-[63%] h-auto">
                        <Image
                            src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : locale == INTL_PREFIX_BY_COUNTRY.myanmar ? visionMM : AboutUs4}
                            alt=""
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}