import ReactHtmlParser from 'html-react-parser';
import { getTranslations } from 'next-intl/server';
import { fetchContactContent } from '@/services/page/fetch-contact-content';
import BannerHeader from '@/components/layout/banner-header';
import ContentDescription from '@/components/custom/content/content-description';

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('ContactPage')
    const { locale } = await params;

    const formData = new FormData()
    formData.append('country', locale.split('_')[0]);

    const { data: content }: any = await fetchContactContent(formData)

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem]  mt-[98px]  sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader text={content?.title_1 || t('contact')} locale={locale} />
            <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center gap-10 xl:gap-12 py-[3.5rem]">
                <div className="lg:w-1/2 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61084.63980994982!2d96.15043175548654!3d16.886280282796363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193b44e8b67b3%3A0xb50d88d2ceee17e7!2sNorth%20Dagon%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1712593261850!5m2!1sen!2smm"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        // allowfullscreen
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                        className="rounded-[10px] h-[220px] md:h-[470px] lg:h-[500px] object-cover w-full filter object-center transition duration-200"
                    ></iframe>
                </div>
                <div className="lg:w-1/2 w-full text-poppins leading-[23px] lg:leading-[23px] md:text-[16px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] flex flex-col gap-4 lg:gap-8 xl:pl-[3rem] lg:p-[2rem] xl:p-[2rem] 2xl:pl-[2rem] 2xl:p-[1.7rem]">
                    <h5 className='text-c-primary text-base xl:text-lg 2xl:text-xl lg:leading-8'>
                        {content && content.content_1 && typeof content?.content_1 === 'string' ? ReactHtmlParser(content.content_1) : t('contact-des')}
                    </h5>
                    <div className="">
                        <h5 className='text-c-primary text-base xl:text-lg 2xl:text-xl mb-1 lg:mb-2'>
                            {content && content.title_2 ? content.title_2 : t('head-title')}
                        </h5>
                        <ContentDescription>
                            {content && typeof content?.content_2 === 'string' ? ReactHtmlParser(content.content_2) : t('head-val')}
                        </ContentDescription>
                    </div>
                    <div className="">
                        <h5 className='text-c-primary text-base xl:text-lg 2xl:text-xl mb-1 lg:mb-2'>
                            {content ? content.title_3 : t('phone')}
                        </h5>
                        <ContentDescription>
                            {content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content.content_3) : t('phone-val')}
                        </ContentDescription>
                    </div>
                    <div className="">
                        <h5 className='text-c-primary text-base xl:text-lg 2xl:text-xl mb-1 lg:mb-2'>
                            {content ? content.title_4 : t('email')}
                        </h5>
                        <ContentDescription>
                            {content && typeof content?.content_4 === 'string' ? ReactHtmlParser(content.content_4) : t('email-val')}
                        </ContentDescription>
                    </div>
                </div>
            </div>
        </div>
    )
}