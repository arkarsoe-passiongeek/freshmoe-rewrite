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


export default async function Contact({ params }: { params: { locale: string } }) {
    const t = await getTranslations('AboutUsPage')
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale);

    const { data: content }: any = await fetchOurServicesContent(formData)

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem] mt-[98px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader locale={locale} imageSrc={OurServicesBanner} text={content?.title_1 || t('service')} />
            <div className="contact-section flex flex-col gap-10 lg:gap-16 max-w-[110rem] px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto py-[3.5rem]">
                <div className="text-center text-gray-600">
                    <h1 className="text-xl lg:text-3xl xl:text-5xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full">
                        {content ? content.title_2 : t('title')}
                    </h1>
                    <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5 mx-auto`}>
                        {content && typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : t('description')}
                    </h2>
                    {/* <p className={`text-poppins ${lang == 'mm'?'leading-[30px] md:leading-[35px] lg:leading-[28px] xl:leading-[35px]':'leading-[25px]  lg:leading-[26px]'} text-[16px] md:text-[18px]  w-full mt-3 xl:mt-5 font-normal`}>
            {content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_2 ) : t('description')}
          </p> */}

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-[0.7rem] py-[1rem] text-gray-600">
                    <div className="p-5 bg-[#EFF8ED] rounded-lg w-full duration-500 transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-[#5BBA47] text-[1.3rem] lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                            {content ? content.title_3 : t('card-one-title')}
                        </h2>
                        <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5`}>
                            {content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('card-one-description')}
                        </h2>
                        <Image
                            src={content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : Service1}
                            unoptimized
                            width={100}
                            height={100}
                            alt=""
                            className="mt-[50px] object-cover w-full h-auto filter object-center transition duration-200 rounded-lg"
                        />
                    </div>
                    <div className="p-5 bg-[#EFF8ED] rounded-lg w-full duration-500 transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-[#5BBA47] text-[1.3rem] lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                            {content ? content.title_4 : t('card-two-title')}
                        </h2>
                        <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5`}>
                            {content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_4) : t('card-two-description')}
                        </h2>
                        <Image
                            src={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : Service2}
                            unoptimized
                            width={100}
                            height={100}
                            alt=""
                            className="mt-5 object-cover w-full h-auto filter object-center transition duration-200 rounded-lg"
                        />
                    </div>
                    <div className="p-5 bg-[#EFF8ED] rounded-lg w-full duration-500 transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-[#5BBA47] text-[1.3rem] lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                            {content ? content.title_5 : t('card-three-title')}
                        </h2>
                        <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5`}>
                            {content && typeof content?.content_5 === 'string' ? ReactHtmlParser(content.content_5) : t('card-three-description')}
                        </h2>
                        <Image
                            src={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : Service3}
                            unoptimized
                            width={100}
                            height={100}
                            alt=""
                            className="mt-10 object-cover w-full h-auto filter object-center transition duration-200 rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Our Application */}
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: "url('/images/our-services/about3-6.png')" }}
            >
                <div className="flex lg:flex-row flex-col items-center gap-[5rem] lg:gap-0 px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto pt-0 lg:pt-10  h-auto max-w-[110rem] relative">
                    <div className="lg:w-2/4 xl:w-2/5 w-full mt-[8rem] md:mt-[10rem] lg:mt-0">
                        <div className="p-2">
                            <div className="text-slate-600 text-left">
                                <h1 className="text-xl lg:text-3xl xl:text-5xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full">
                                    {content?.title_6 || t('about-four-title')}
                                </h1>
                                <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5`}>
                                    {content && typeof content?.content_6 === 'string' ? ReactHtmlParser(content.content_6) : (<>{t('about-four-description-1')}<br />{t('about-four-description-2')}</>)}
                                </h2>
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
            <div className="flex 2xl:py-[100px] flex-col-reverse lg:flex-row items-center max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem]  mx-auto my-10">
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
                    <h1 className="text-xl lg:text-3xl xl:text-5xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full">
                        {content?.title_7 || t('retail-title')}
                    </h1>
                    <h2 className={`text-xss lg:text-base xl:text-2xl w-full md:leading-4 lg:leading-6 xl:w-[90%] 2xl:w-[85%] xl:mt-5`}>
                        {content && typeof content?.content_7 === 'string' ? ReactHtmlParser(content?.content_7) : (<>{t('retail-des-1')}<br />{t('retail-des-2')}</>)}
                    </h2>
                </div>
            </div>
        </div>
    )
}