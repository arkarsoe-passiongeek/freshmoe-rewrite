import React from 'react'
import Image from 'next/image'
import Profile1 from '@/public/images/profile/profile1.png'
import Profile2 from '@/public/images/profile/profile2.png'
import Profile3 from '@/public/images/profile/profile3.png'
import Profile4 from '@/public/images/profile/profile4.png'
import Profile5 from '@/public/images/profile/warehouse.png'
import Logo1 from '@/public/images/profile/Logo1.png'
import Logo2 from '@/public/images/profile/Logo2.png'
import Logo3 from '@/public/images/profile/Logo3.png'
import Logo4 from '@/public/images/profile/Logo4.png'
import Logo5 from '@/public/images/profile/Logo5.png'
import Thailand from '@/public/images/profile/thailand1.png'
import Malaysia from '@/public/images/profile/malaysia1.png'
import Singapore from '@/public/images/profile/singapore1.png'
import Fruit1 from '@/public/images/profile/fruit1.png'
import Fruit2 from '@/public/images/profile/fruit2.png'
import Mobile1 from '@/public/images/profile/profile_mobile1.png'
import Mobile3 from '@/public/images/profile/profile_mobile3.png'
import Mobile4 from '@/public/images/profile/profile_mobile4.png'
import Mobile5 from '@/public/images/profile/profile_mobile_bg.png'
import ReactHtmlParser from 'html-react-parser';
import { getTranslations } from 'next-intl/server'
import { fetchProfileContent } from '@/services/page/fetch-profile-content'
import BannerHeader from '@/components/layout/banner-header'
import ProfileBanner from "@/public/images/profile/br-profile-header-1.png"
import ContentHeader from '@/components/custom/content/content-header'
import ContentDescription from '@/components/custom/content/content-description'

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('ProfilePage')
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale);

    const { data: content }: any = await fetchProfileContent(formData)

    return (
        <div className="mt-[98px] sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader locale={locale} imageSrc={ProfileBanner} text={content?.title_1 || t('profile')} />
            {/* Client And Future Plan */}
            <div className="flex flex-col-reverse lg:flex-row items-center max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem]  mx-auto my-10">
                <div className="w-full lg:w-1/2">
                    <Image
                        src={content?.image_2 ? `${IMAGE_URL}/${content.image_2}` : Profile1}
                        unoptimized
                        width={100}
                        height={100}
                        alt=""
                        className="object-cover w-full h-auto filter object-center rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 p-0 md:py-[3rem] lg:pl-[3rem] mb-8">
                    <ContentHeader>{content?.title_2 || t('client-title')}</ContentHeader>
                    <ContentDescription>
                        {content && typeof content?.content_2 === 'string' ? ReactHtmlParser(content?.content_2) : (<>{t('client-des-1')}<br />{t('client-des-2')}</>)}
                    </ContentDescription>
                </div>
            </div>

            {/* Our Target Market */}
            <div className="object-cover w-full min-h-auto py-[10px] md:py-[50px] filter bg-right-top transition duration-200" style={{ backgroundImage: `url('/images/profile/profile_bg.png')` }}>
                <div className="flex flex-col justify-center items-center  max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem]  mx-auto  mb-10">
                    <div className="text-center">
                        <ContentHeader>
                            {content?.title_3 || t('market-title')}
                        </ContentHeader>
                        <ContentDescription>
                            {content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content?.content_3) : t('market-des')}
                        </ContentDescription>
                    </div>
                    <div className="w-full h-auto 2xl:h-[400px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-[20px] lg:rounded-[30px] shadow mt-6 lg:mt-12">
                        <div className='w-full md:w-8/12 flex justify-center p-2 md:p-4 xl:p-6 ml-0 lg:ml-4 mt-5 md:mt-0'>
                            <Image
                                src={content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : Thailand}
                                unoptimized
                                width={100}
                                height={100}
                                alt="Thailand"
                                className="w-[150px] md:w-[250px] lg:w-[300px] object-cover h-auto filter object-center transition duration-200"
                            />
                        </div>

                        <div className="w-full lg:w-auto flex flex-col justify-center p-3 md:p-4 lg:p-8 leading-normal">
                            <ContentHeader>
                                {content?.title_4 || t('country-one-title')}
                            </ContentHeader>
                            <ContentDescription>
                                {content && typeof content?.content_4 === 'string' ? ReactHtmlParser(content?.content_4) : t('country-one-des')}
                            </ContentDescription>
                        </div>
                    </div>
                    <div className="w-full h-auto 2xl:h-[400px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-[20px] lg:rounded-[30px] shadow mt-6 lg:mt-12">
                        <div className='w-full md:w-8/12 flex justify-center p-2 md:p-4 xl:p-6 ml-0 lg:ml-4 mt-5 md:mt-0'>
                            <Image
                                src={content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : Malaysia}
                                unoptimized
                                width={100}
                                height={100}
                                alt="malaysia"
                                className="w-[150px] md:w-[250px] lg:w-[300px] object-cover h-auto filter object-center transition duration-200"
                            />
                        </div>

                        <div className="w-full lg:w-auto flex flex-col justify-center p-3 md:p-4 lg:p-8 leading-normal">
                            <ContentHeader>
                                {content?.title_5 || t('country-two-title')}
                            </ContentHeader>
                            <ContentDescription>
                                {content && typeof content?.content_5 === 'string' ? ReactHtmlParser(content?.content_5) : t('country-two-des')}
                            </ContentDescription>
                        </div>
                    </div>
                    <div className="w-full h-auto 2xl:h-[400px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-[20px] lg:rounded-[30px] shadow mt-6 lg:mt-12">
                        <div className='w-full md:w-8/12 flex justify-center p-2 md:p-4 xl:p-6 ml-0 lg:ml-4 mt-5 md:mt-0'>
                            <Image
                                src={content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : Singapore}
                                unoptimized
                                width={100}
                                height={100}
                                alt="singapore"
                                className="w-[150px] md:w-[250px] lg:w-[300px] object-cover h-auto filter object-center transition duration-200"
                            />
                        </div>

                        <div className="w-full lg:w-auto flex flex-col justify-center p-3 md:p-4 lg:p-8 leading-normal">
                            <ContentHeader>
                                {content?.title_6 || t('country-three-title')}
                            </ContentHeader>
                            <ContentDescription>
                                {content && typeof content?.content_6 === 'string' ? ReactHtmlParser(content?.content_6) : t('country-three-des')}
                            </ContentDescription>
                        </div>
                    </div>

                </div>
            </div>

            {/*About Our Partnership */}
            <div className="bg-cover bg-center lg:relative">
                <Image
                    src={content?.image_7 ? `${IMAGE_URL}/${content.image_7}` : Profile2}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />
                <div className='max-w-[1790px] mx-auto'>
                    <div className="bg-[#8ECD82] lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem]  mx-auto max-w-[110rem] py-20 lg:py-0">
                        <div className="max-w-full lg:max-w-[29rem] xl:max-w-[35rem] 2xl:max-w-[42rem]">
                            <div className="text-slate-600">
                                <ContentHeader>
                                    {content?.title_7 || t('partner-title')}
                                </ContentHeader>
                                <ContentDescription>
                                    {content && typeof content?.content_7 === 'string' ? ReactHtmlParser(content?.content_7) : (<>{t('partner-des-1')}<br />{t('partner-des-2')}</>)}
                                </ContentDescription>
                            </div>
                        </div>
                    </div>
                </div>

                <Image
                    src={content?.image_m_1 ? `${IMAGE_URL}/${content.image_m_1}` : Mobile1}
                    // src={Mobile1}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-[100vw] h-auto filter object-center transition duration-200 block lg:hidden"
                />
            </div>

            {/* Our Deals */}
            <div className='bg-white flex flex-col justify-center items-center py-[50px] md:p-[50px] xl:p-[100px] relative'>
                <div className='max-w-[1790px] px-[2rem] mx-auto'>
                    <h3 className="text-sriracha text-[30px] xs:text-[32px] md:text-[40px] lg:text-[28px] xl:text-[48px]  text-[#418432] font-semibold text-shadow text-center mb-16 xl:mb-20">
                        {content?.title_8 || 'Our Deals'}
                    </h3>
                    <div className='w-full grid sm:grid-cols-5 grid-cols-12 gap-6 mb-0 sm:mb-[80px]'>
                        <div className="col-span-6 sm:col-span-1">
                            <Image
                                src={content?.image_8 ? `${IMAGE_URL}/${content.image_8}` : Logo1}
                                unoptimized
                                width={100}
                                height={100}
                                alt="logo1"
                                className="object-cover w-[180px] sm:w-full h-auto filter object-center transition duration-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-1">
                            <Image
                                src={content?.image_9 ? `${IMAGE_URL}/${content.image_9}` : Logo2}
                                unoptimized
                                width={100}
                                height={100}
                                alt="logo2"
                                className="object-cover  w-[180px] sm:w-full h-auto filter object-center transition duration-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-1">
                            <Image
                                src={content?.image_10 ? `${IMAGE_URL}/${content.image_10}` : Logo3}
                                unoptimized
                                width={100}
                                height={100}
                                alt="logo3"
                                className="object-cover w-[180px] sm:w-full h-auto filter object-center transition duration-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-1">
                            <Image
                                src={content?.image_11 ? `${IMAGE_URL}/${content.image_11}` : Logo4}
                                unoptimized
                                width={100}
                                height={100}
                                alt="logo4"
                                className="object-cover w-[180px] sm:w-full h-auto filter object-center transition duration-200"
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-1 mx-auto">
                            <Image
                                src={content?.image_12 ? `${IMAGE_URL}/${content.image_12}` : Logo5}
                                unoptimized
                                width={100}
                                height={100}
                                alt="logo5"
                                className="object-cover w-[180px] sm:w-full h-auto filter object-center transition duration-200 px-2 sm:px-0"
                            />
                        </div>
                    </div>
                </div>


                <Image
                    // src={content?.image_13 ? `${IMAGE_URL}/${content.image_13}` : Fruit1}
                    src={Fruit1}
                    unoptimized
                    width={100}
                    height={100}
                    alt="fruit1"
                    className="absolute bottom-[-13%] xl:bottom-[-14%] left-0 object-cover w-[250px] lg:w-[350px] xl:w-[450px] h-auto filter object-center transition duration-200 z-10 hidden sm:flex"
                    style={{ zIndex: 20 }}
                />
                <Image
                    // src={content?.image_14 ? `${IMAGE_URL}/${content.image_14}` : Fruit2}
                    src={Fruit2}
                    unoptimized
                    width={100}
                    height={100}
                    alt="fruit2"
                    className="absolute bottom-[-16%] xl:bottom-[-18%] right-0 object-cover w-[220px] lg:w-[320px] xl:w-[400px] h-auto filter object-center transition duration-200 z-10 hidden sm:flex"
                    style={{ zIndex: 20 }}
                />
            </div>

            {/* Our cold chain */}
            <div className="bg-cover bg-center relative">
                <Image
                    src={content?.image_13 ? `${IMAGE_URL}/${content.image_13}` : Profile4}
                    // src={Profile4}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />

                <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:justify-end lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto max-w-[110rem] py-20">
                    <Image
                        src={Mobile5}

                        unoptimized
                        width={100}
                        height={100}
                        alt=""
                        className="absolute top-0 left-0 object-cover w-full h-full sm:h-auto filter object-center transition duration-200 flex lg:hidden -z-10"
                    />
                    <div className="max-w-full lg:max-w-[45rem] xl:max-w-[50rem]">
                        <div className="text-slate-600 lg:pl-[270px] xl:pl-[290px] 2xl:pl-[199px]">
                            <ContentHeader>
                                {content?.title_9 || t('cold-title')}
                            </ContentHeader>
                            <ContentDescription>
                                {content && typeof content?.content_9 === 'string' ? ReactHtmlParser(content?.content_9) : (<>{t('cold-des-1')}<br />{t('cold-des-2')}</>)}
                            </ContentDescription>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={content?.image_m_2 ? `${IMAGE_URL}/${content.image_m_2}` : Mobile5}
                        // src={Mobile2}
                        unoptimized
                        width={100}
                        height={100}
                        alt=""
                        className="object-cover w-[100vw] h-auto filter object-center transition duration-200 block lg:hidden"
                    />
                </div>
            </div>

            {/* Transportation */}
            <div className="bg-cover bg-center lg:relative">
                <Image
                    src={content?.image_14 ? `${IMAGE_URL}/${content.image_14}` : Profile3}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />
                <div className='max-w-[1790px] mx-auto'>
                    <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto max-w-[110rem] py-20 lg:py-0">
                        <div className="max-w-full lg:max-w-[29rem] xl:max-w-[35rem] 2xl:max-w-[42rem]">
                            <div className="text-slate-600">
                                <ContentHeader>
                                    {content?.title_10 || t('trans-title')}
                                </ContentHeader>
                                <ContentDescription>
                                    {content && typeof content?.content_10 === 'string' ? ReactHtmlParser(content?.content_10) : (<>{t('trans-des-1')}<br />{t('trans-des-2')}</>)}
                                </ContentDescription>
                            </div>
                        </div>
                    </div>
                </div>

                <Image
                    src={content?.image_m_3 ? `${IMAGE_URL}/${content.image_m_3}` : Mobile3}
                    // src={Mobile3}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-[100vw] h-auto filter object-center transition duration-200 block lg:hidden"
                />
            </div>
            <div className="bg-cover bg-center lg:relative">
                <Image
                    src={content?.image_15 ? `${IMAGE_URL}/${content.image_15}` : Profile5}
                    unoptimized
                    width={100}
                    height={100}
                    alt=""
                    className="object-cover w-full h-auto filter object-center transition duration-200 hidden lg:block"
                />

                <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex lg:justify-end lg:items-center px-[2rem] md:px-[4rem] lg:px-[5rem] mx-auto max-w-[110rem] py-20  lg:mt-[-2rem] xl:mt-[-4rem]">
                    <div className="max-w-full lg:max-w-[45rem] xl:max-w-[50rem]">
                        <div className="text-slate-600 lg:pl-[270px] xl:pl-[290px] 2xl:pl-[199px]">
                            <ContentHeader>
                                {content?.title_11 || t('warehouse-title')}
                            </ContentHeader>
                            <ContentDescription>
                                {content && typeof content?.content_11 === 'string' ? ReactHtmlParser(content?.content_11) : (<>{t('warehouse-des-1')}<br />{t('warehouse-des-2')}</>)}
                            </ContentDescription>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={content?.image_m_4 ? `${IMAGE_URL}/${content.image_m_4}` : Mobile4}
                        // src={Mobile4}
                        unoptimized
                        width={100}
                        height={100}
                        alt=""
                        className="object-cover w-[100vw] h-auto filter object-center transition duration-200 block lg:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

