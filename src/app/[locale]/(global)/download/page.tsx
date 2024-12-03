import { getTranslations } from 'next-intl/server';
import { fetchContactContent } from '@/services/page/fetch-contact-content';
import BannerHeader from '@/components/layout/banner-header';
// import { fetchDownloadApps } from '@/services/page/fetch-download-content';
// import DownloadHandler from '@/components/pages/download/download-handler';


export default async function Download({ params }: { params: Promise<{ locale: string }> }) {
    const t = await getTranslations('ContactPage')
    const { locale } = await params;


    const formData = new FormData()
    formData.append('country', locale.split('_')[0]);

    const { data: content }: any = await fetchContactContent(formData)

    // const { data: downloadApps } = await fetchDownloadApps()

    return (
        <div className="bg-white h-auto relative pb-[7rem] md:pb-[9rem]  mt-[98px]  sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
            <BannerHeader text={content?.title_1 || t('contact')} locale={locale} />
            <div className='container mx-auto'>
                <div className="bg-[#F6F6F6] h-auto relative pb-[7rem] md:pb-[9rem]  mt-[108px]  sm:mt-[110px] md:mt-[115px] lg:mt-[100px] xl:mt-[110px] 2xl:mt-[120px]">
                    {/* <DownloadHandler downloadApps={downloadApps} /> */}
                </div>
            </div>
        </div>
    )
}