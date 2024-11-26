import Slider from '@/components/pages/home/slider/slider';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ReactHtmlParser from 'html-react-parser';
import { fetchHomeContent } from '@/services/page/fetch-home-content';
import About from '@/components/pages/home/about';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({ params }: { params: Promise<{ locale: string }>; }) {
//     const { locale } = await params
//     const t = await getTranslations({ locale, namespace: 'Metadata' });

//     return {
//         title: t('title'),
//         description: t('description')
//     };
// }

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    const t = await getTranslations('LandingPage')
    const { locale } = await params

    const formData = new FormData()
    formData.append('country', locale);

    const { data: content }: any = await fetchHomeContent(formData)

    const dataSlider = [
        {
            id: 1,
            title: content?.slider_title_1 || t('slider-title'),
            tagline: content && typeof content?.slider_content_1 === 'string' ? ReactHtmlParser(content?.slider_content_1) : t('slider-description'),
            image: content?.slider_image_1 ? `${IMAGE_URL}/${content.slider_image_1}` : '',
            buttons: t('slider-button')
        },
        {
            id: 2,
            title: content?.slider_title_2 || t('slider-title'),
            tagline: content && typeof content?.slider_content_2 === 'string' ? ReactHtmlParser(content?.slider_content_2) : t('slider-description'),
            image: content?.slider_image_2 ? `${IMAGE_URL}/${content.slider_image_2}` : '',
            buttons: t('slider-button')
        },
        {
            id: 3,
            title: content?.slider_title_3 || t('slider-title'),
            tagline: content && typeof content?.slider_content_3 === 'string' ? ReactHtmlParser(content?.slider_content_3) : t('slider-description'),
            image: content?.slider_image_3 ? `${IMAGE_URL}/${content.slider_image_3}` : '',
            buttons: t('slider-button')
        },
        {
            id: 4,
            title: content?.slider_title_4 || t('slider-title'),
            tagline: content && typeof content?.slider_content_4 === 'string' ? ReactHtmlParser(content?.slider_content_4) : t('slider-description'),
            image: content?.slider_image_4 ? `${IMAGE_URL}/${content.slider_image_4}` : '',
            buttons: t('slider-button')
        },
        {
            id: 5,
            title: content?.slider_title_5 || t('slider-title'),
            tagline: content && typeof content?.slider_content_5 === 'string' ? ReactHtmlParser(content?.slider_content_5) : t('slider-description'),
            image: content?.slider_image_5 ? `${IMAGE_URL}/${content.slider_image_5}` : '',
            buttons: t('slider-button')
        },
    ]

    const sliderData = {
        sliderTitle: content.title_1 || t('slider-title'),
        sliderDescription: content && typeof content?.content_1 === 'string' ? ReactHtmlParser(content?.content_1) : t('slider-description'),
        chooseTitle: content?.title_2 || t('choose-title'),
        chooseOneTitle: content.title_3 || t('choose-one-title'),
        chooseTwoTitle: content.title_4 || t('choose-two-title'),
        chooseThreeTitle: content.title_5 || t('choose-three-title'),
        chooseFourTitle: content.title_6 || t('choose-four-title'),
        chooseFiveTitle: content.title_7 || t('choose-five-title'),
        chooseSixTitle: content.title_8 || t('choose-six-title'),
        sliderButton: t('slider-button'),
        chooseOneDes: content && typeof content?.content_3 === 'string' ? ReactHtmlParser(content?.content_3) : t('choose-one-des'),
        chooseTwoDes: content && typeof content?.content_4 === 'string' ? ReactHtmlParser(content?.content_4) : t('choose-two-des'),
        chooseThreeDes: content && typeof content?.content_5 === 'string' ? ReactHtmlParser(content?.content_5) : t('choose-three-des'),
        chooseFourDes: content && typeof content?.content_6 === 'string' ? ReactHtmlParser(content?.content_6) : t('choose-four-des'),
        chooseFiveDes: content && typeof content?.content_7 === 'string' ? ReactHtmlParser(content?.content_7) : t('choose-five-des'),
        chooseSixDes: content && typeof content?.content_8 === 'string' ? ReactHtmlParser(content?.content_8) : t('choose-six-des'),

        sliderImage: content?.image_1 ? `${IMAGE_URL}/${content.image_1}` : "",
        chooseImage1: content?.image_3 ? `${IMAGE_URL}/${content.image_3}` : "",
        chooseImage2: content?.image_4 ? `${IMAGE_URL}/${content.image_4}` : "",
        chooseImage3: content?.image_5 ? `${IMAGE_URL}/${content.image_5}` : "",
        chooseImage4: content?.image_6 ? `${IMAGE_URL}/${content.image_6}` : "",
        chooseImage5: content?.image_7 ? `${IMAGE_URL}/${content.image_7}` : "",
        chooseImage6: content?.image_8 ? `${IMAGE_URL}/${content.image_8}` : "",
    };

    const aboutData = {
        aboutOneTitle: content?.title_9 || t('about-one-title'),
        aboutOneDescription1: typeof content?.content_9 === 'string' ? ReactHtmlParser(content?.content_9) : (<>{t('about-one-description-1')}<br />{t('about-one-description-2')}</>),
        aboutOneBackground: content?.image_9 ? `${IMAGE_URL}/${content.image_9}` : "",
        aboutOneDescription2: 'about-one-description-2',
        aboutTwoTitle: content?.title_10 || t('about-two-title'),
        aboutTwoDescription1: typeof content?.content_10 === 'string' ? ReactHtmlParser(content?.content_10) : (<>{t('about-two-description-1')}<br />{t('about-two-description-2')}</>),
        aboutTwoDescription2: 'about-two-description-2',
        aboutTwoBackground: content?.image_10 ? `${IMAGE_URL}/${content.image_10}` : "",
        aboutThreeTitle: content?.title_11 || t('about-three-title'),
        aboutThreeDescription1: typeof content?.content_11 === 'string' ? ReactHtmlParser(content?.content_11) : (<>{t('about-three-description-1')}<br />{t('about-three-description-2')}</>),
        aboutThreeDescription2: 'about-three-description-2',
        aboutThreeBackground: content?.image_11 ? `${IMAGE_URL}/${content.image_11}` : "",
        aboutFourTitle: content?.title_11 || t('about-four-title'),
        aboutFourDescription1: typeof content?.content_11 === 'string' ? ReactHtmlParser(content?.content_11) : (<>{t('about-four-description-1')}<br />{t('about-four-description-2')}</>),
        aboutFourDescription2: 'about-three-description-2',
        aboutFourBackground: content?.image_12 ? `${IMAGE_URL}/${content.image_12}` : "",
        aboutImage1: content?.image_13 ? `${IMAGE_URL}/${content.image_13}` : "",
        aboutImage2: content?.image_14 ? `${IMAGE_URL}/${content.image_14}` : "",
        aboutImage3: content?.image_15 ? `${IMAGE_URL}/${content.image_15}` : "",
        aboutMobile1: content?.image_m_1 ? `${IMAGE_URL}/${content.image_m_1}` : "",
        aboutMobile2: content?.image_m_2 ? `${IMAGE_URL}/${content.image_m_2}` : "",
        aboutMobile3: content?.image_m_3 ? `${IMAGE_URL}/${content.image_m_3}` : "",
    };


    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div>
            <Slider data={dataSlider} sliderData={sliderData} />
            <About aboutData={aboutData} />

        </div>
    );
}

export default Home