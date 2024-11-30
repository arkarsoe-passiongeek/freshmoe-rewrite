'use client'
import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slider1 from '@/public/images/home/slider1.jpg'
import FruitBasket from '@/public/images/home/fruitbasket.png'
import IconHeart from '@/public/images/home/icon_heart.png'
import IconCar from '@/public/images/home/icon_car.png'
import IconCart from '@/public/images/home/icon_cart.png'
import IconCheck from '@/public/images/home/icon_check.png'
import IconPhone from '@/public/images/home/icon_phone.png'
import IconFruit from '@/public/images/home/icon_fruit.png'
import UnderSlider3 from '@/public/images/home/under-slider-3.png'
import GreenMobile3 from "@/public/images/layout/mobile-green-bg.png"
import UnderlineBar from "@/public/images/home/underline.png"
import 'swiper/css';
import 'swiper/css/pagination';
import ContentButton from "@/components/custom/content/content-button";
import ContentDescription from "@/components/custom/content/content-description";
import ContentHeader from "@/components/custom/content/content-header";

interface Slide {
    id: number;
    title: string;
    tagline: any;
    image: any;
    buttons: any;
}

interface ButtonProps {
    id: number;
    text: string;
    link: string;
    type: string;
}

const ChooseUsContent = ({ title, des, imageSrc, alt, layout }: { title: any, des: any, alt: any, imageSrc: any, layout?: any }) => {
    return (
        <>
            <div className={`flex flex-col ${layout === 'reverse' ? 'items-start' : 'items-end'}`}>
                <p className='text-c-white text-[16px] 2xl:text-xl font-medium mb-1'>{title}</p>
                <div className='w-16  h-[2px] rounded-sm  bg-white mb-1'></div>
                <p className='text-c-white text-[10px] 2xl:text-base font-normal tracking-tight'>{des}</p>
            </div>
            <Image width={60} height={70} src={imageSrc} alt={alt} className='underline w-[60px] h-[70px] 2xl:w-[70px] 2xl:h-[72px]' />
        </>
    )
}

const ChooseUsContentMobile = ({ title, des, imageSrc, alt }: { title: any, des: any, alt?: any, imageSrc: any, layout?: any }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center mx-auto w-[270px]">
            <Image src={imageSrc} alt={alt} className='w-[60px] h-[62px] md:w-[90px] md:h-[92px] mb-[15px]' priority />
            <div className="px-4 flex flex-col items-center">
                <p className='text-c-white text-base font-semibold mb-1'>{title}</p>
                <div className='w-10 h-[2.5px] rounded-md bg-white mb-[10px]'></div>
                <p className='text-c-white text-sm font-normal'>{des}</p>
            </div>
        </div>
    )
}

interface SliderProps {
    data: Slide[];
    sliderData: {
        sliderTitle: any;
        sliderButton: any;
        sliderDescription: any;
        chooseTitle: any;
        chooseOneTitle: any;
        chooseTwoTitle: any;
        chooseThreeTitle: any;
        chooseFourTitle: any;
        chooseFiveTitle: any;
        chooseSixTitle: any;
        chooseOneDes: any;
        chooseTwoDes: any;
        chooseThreeDes: any;
        chooseFourDes: any;
        chooseFiveDes: any;
        chooseSixDes: any;
        sliderImage: any;
        chooseImage1: any;
        chooseImage2: any;
        chooseImage3: any;
        chooseImage4: any;
        chooseImage5: any;
        chooseImage6: any;
    };
}

const Slider: React.FC<SliderProps> = ({ data, sliderData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        handleSwiperInit
    }, [])

    const handleSwiperInit = (swiper: any) => {
        // Start an animation for the swiper container
        // console.log("swiper is initalized!")
    };

    return (
        <>
            <section suppressHydrationWarning={true} className="w-full max-h-screen relative mt-[107px] md:mt-[115px] lg:mt-[105px] 2xl:mt-[117px]">
                <div className="swiper-container">
                    <Swiper
                        onInit={handleSwiperInit}
                        pagination={{ type: "bullets", clickable: true }}
                        autoplay={false}
                        slidesPerView={1}
                        loop={false}
                        modules={[Autoplay, Pagination]}
                    >
                        {data?.map(({ id, image, tagline, title, buttons }) => (
                            <SwiperSlide key={id} virtualIndex={id} className="">
                                <div className="min-h-[280px] relative">
                                    <Image
                                        unoptimized
                                        src={Slider1 || image}
                                        alt={title}
                                        className="w-full min-h-[280px]"
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                    <div className="w-full h-full absolute left-0 top-0 bg-green-100 opacity-10"></div>
                                    <div className="container left-0 right-0 mx-auto absolute flex justify-end top-[10%] lg:top-[20%] 2xl:top-1/2 2xl:-translate-y-1/2">
                                        <div className="w-full text-center lg:text-start lg:w-[40%] 2xl:w-[661px] h-full">
                                            <div className="mb-[10px] lg:mb-[32px] 2xl:space-y-[16px] 2xl:mb-[48px]">
                                                <ContentHeader className="text-base sm:text-base xl:text-5xl">
                                                    {title || 'Delivering In Four Hours'}
                                                </ContentHeader>
                                                {tagline && (
                                                    <ContentDescription className="text-xss sm:text-sm 2xl:text-2xl text-c-contrast">{tagline}</ContentDescription>
                                                )}
                                            </div>
                                            <ContentButton>More Info</ContentButton>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div suppressHydrationWarning={true} className='mt-[-200px] lg:mt-[-150px] xl:mt-[-240px] 2xl:mt-[-270px] w-full lg:h-[670px] xl:h-[1100px] 2xl:h-[1100px] relative hidden lg:block text-poppins text-shadow z-10'>
                <Image
                    src={UnderSlider3}
                    alt="Green Background"
                    priority
                    className="absolute top-0 z-0 w-full h-full object-center transform scale-x-[-1]"
                />
                <div className='max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem] w-full h-300 absolute top-[24%] left-1/2 transform -translate-x-1/2'>
                    <div className="tile flex flex-col justify-center items-center lg:mb-[1.5rem] 2xl:mb-[61px]">
                        <h1 className='text-c-white text-[50px] xl:text-[50px] lg:text-4xl lg:font-bold mb-5 lg:mb-[10px]'>{sliderData.chooseTitle}</h1>
                        <Image src={UnderlineBar} alt="underline" className='underline w-[210px] h-[30px]' priority />
                    </div>
                    <div className="grid grid-cols-12 items-center justify-center lg:mb-[1rem] xl:mb-[4rem] 2xl:mb-[70px]">
                        <div className="col-span-1"></div>
                        <div className="col-span-4 w-full flex items-center justify-center ml-[-25px] xl:ml-[-40px] 2xl:gap-[32px]">
                            <ChooseUsContent title={sliderData.chooseOneTitle} des={sliderData.chooseOneDes} alt="recycle logo" imageSrc={sliderData.chooseImage1 || IconCheck} />
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-4 w-full flex flex-row-reverse items-center justify-center ml-[25px] xl:ml-[40px] 2xl:gap-[32px]">
                            <ChooseUsContent layout="reverse" title={sliderData.chooseTwoTitle} des={sliderData.chooseTwoDes} alt="recycle logo" imageSrc={sliderData.chooseImage2 || IconHeart} />
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="grid grid-cols-12  items-center justify-center mb-[1rem] xl:mb-[4.1rem]  2xl:mb-[5rem]">
                        <div className="col-span-4 w-full flex items-center justify-center ml-0 lg:ml-[-35px] xl:ml-[-40px] 2xl:gap-[32px]">
                            <ChooseUsContent title={sliderData.chooseThreeTitle} des={sliderData.chooseThreeDes} alt="recycle logo" imageSrc={sliderData.chooseImage3 || IconCar} />
                        </div>
                        <div className="col-span-4"></div>
                        <div className="col-span-4 w-full flex flex-row-reverse items-center justify-center  ml-0 lg:ml-[35px] xl:ml-[40px] 2xl:gap-[32px]">
                            <ChooseUsContent layout="reverse" title={sliderData.chooseFourTitle} des={sliderData.chooseFourDes} alt="recycle logo" imageSrc={sliderData.chooseImage4 || IconFruit} />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-center">
                        <div className="col-span-4 w-full flex items-center justify-center ml-0 lg:ml-[-35px] xl:ml-[-40px] 2xl:gap-[32px]">
                            <ChooseUsContent title={sliderData.chooseFiveTitle} des={sliderData.chooseFiveDes} alt="recycle logo" imageSrc={sliderData.chooseImage5 || IconPhone} />
                        </div>
                        <div className="col-span-4"></div>
                        <div className="col-span-4 w-full flex flex-row-reverse items-center justify-center  ml-0 lg:ml-[35px] xl:ml-[40px] 2xl:gap-[32px]">
                            <ChooseUsContent layout="reverse" title={sliderData.chooseSixTitle} des={sliderData.chooseSixDes} alt="recycle logo" imageSrc={sliderData.chooseImage6 || IconCart} />
                        </div>
                    </div>
                </div>
                <Image src={FruitBasket} alt="Fruit Basket" className='absolute left-1/2 transform -translate-x-1/2 px-auto -bottom-5 w-[370px] h-[300px] md:w-[470] md:h-[400] lg:w-[370px] lg:h-[300px] xl:w-[520px] xl:h-[480px] 2xl:w-[604px] 2xl:h-[454px]' priority />
            </div>

            {/* mobile */}
            <div className="z-20 w-screen mt-[-75px] min-h-[1900px] relative block lg:hidden" >
                <Image
                    src={GreenMobile3}
                    alt="Green Background"
                    priority
                    className="z-0 h-full w-full absolute top-0"
                />
                <div className="pt-28 absolute top-0 w-full">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center mb-[20px]">
                            <h1 className='text-c-white text-base font-bold mb-[10px]'>{sliderData.chooseTitle}</h1>
                            <Image src={UnderlineBar} alt="underline" className='underline w-[120px] h-[17px]' priority />
                        </div>
                        <div className="grid grid-rows-6 gap-4 sm:gap-10">
                            <ChooseUsContentMobile alt="icon" imageSrc={IconHeart} title={sliderData.chooseOneTitle} des={sliderData.chooseOneDes} />
                            <ChooseUsContentMobile alt="icon" imageSrc={IconCar} title={sliderData.chooseTwoTitle} des={sliderData.chooseTwoDes} />
                            <ChooseUsContentMobile alt="icon" imageSrc={IconFruit} title={sliderData.chooseThreeTitle} des={sliderData.chooseThreeDes} />
                            <ChooseUsContentMobile alt="icon" imageSrc={IconPhone} title={sliderData.chooseFourTitle} des={sliderData.chooseFourDes} />
                            <ChooseUsContentMobile alt="icon" imageSrc={IconCheck} title={sliderData.chooseFiveTitle} des={sliderData.chooseFiveDes} />
                            <ChooseUsContentMobile alt="icon" imageSrc={IconCart} title={sliderData.chooseSixTitle} des={sliderData.chooseSixDes} />
                        </div>
                    </div>
                </div>
                <Image
                    src={FruitBasket}
                    alt="Fruit Basket"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[230px] h-[180px]"
                    priority
                />
            </div>
        </>

    );
};

export default Slider;
