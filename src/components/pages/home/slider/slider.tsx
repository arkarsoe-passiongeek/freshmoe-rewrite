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
import GreenMobile3 from '@/public/images/home/GreenMobile-3.png'
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
                                <div className="w-full  relative">
                                    <Image
                                        unoptimized
                                        src={Slider1 || image}
                                        alt={title}
                                        className="w-full min-h-[250px]"
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                </div>
                                <div className="w-full h-full absolute left-0 top-0 bg-green-100 opacity-10"></div>
                                <div className="absolute right-0 top-[5px] sm:top-[10%] xl:top-[20%] w-1/2 sm:w-[40%]">
                                    <div className="pr-5">
                                        <div className="mb-3">
                                            <ContentHeader className="text-sm">
                                                {title || 'Delivering In Four Hours'}
                                            </ContentHeader>
                                            {tagline && (
                                                <ContentDescription className="text-xss lg:text-sm">{tagline}</ContentDescription>
                                            )}
                                        </div>
                                        <ContentButton>More Info</ContentButton>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div suppressHydrationWarning={true} className='mt-[-200px] xl:mt-[-240px] 2xl:mt-[-270px] w-full lg:h-[900px] xl:h-[1100px] 2xl:h-[1240px] relative hidden lg:block text-poppins text-shadow z-10'>
                <Image
                    src={UnderSlider3}
                    alt="Green Background"
                    priority
                    className="absolute top-0 z-0 w-full h-full object-cover"
                />
                <div className='max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem] w-full h-300 absolute top-[24%] left-1/2 transform -translate-x-1/2'>
                    <div className="tile flex flex-col justify-center items-center lg:mb-[1.5rem] 2xl:mb-[0.5rem]">
                        <h1 className='text-white text-[50px] xl:text-[50px] mb-5' style={{ fontFamily: 'Sriracha' }}>{sliderData.chooseTitle}</h1>
                        <Image src={UnderlineBar} alt="underline" className='underline mb-6' width={210} height={30} priority />
                    </div>
                    <div className="grid grid-cols-12 items-center justify-center lg:mb-[1rem] xl:mb-[4rem] 2xl:mb-[4.5rem]">
                        <div className="col-span-1"></div>
                        <div className="col-span-4 w-full flex items-center justify-center ml-[-25px] xl:ml-[-40px]">
                            <div className='flex flex-col justify-end items-end ml-3 lg:mr-6'>
                                <p className='text-white text-[16px] 2xl:text-[23px] font-semibold mb-1'>{sliderData.chooseOneTitle}</p>
                                <div className='w-16  h-[2px] rounded-sm  bg-white mb-1'></div>
                                <p className='text-white text-[10px] 2xl:text-[15px]  tracking-tight'>{sliderData.chooseOneDes}</p>
                            </div>
                            <Image unoptimized src={sliderData.chooseImage1 || IconCheck} alt="underline" className='underline' width={90} height={92} />
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-4 w-full flex items-center justify-center ml-[25px] xl:ml-[40px]">
                            <Image unoptimized src={sliderData.chooseImage2 || IconHeart} alt="underline" className='underline' width={90} height={92} />
                            <div className='flex flex-col justify-start items-start ml-3 lg:ml-6'>
                                <p className='text-white text-[16px] 2xl:text-[23px] font-semibold mb-1'>{sliderData.chooseTwoTitle}</p>
                                <div className='w-16  h-[2px] rounded-sm  bg-white mb-1'></div>
                                <p className='text-white text-[10px] 2xl:text-[15px]   tracking-tight'>{sliderData.chooseTwoDes}</p>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12  items-center justify-center mb-[1rem] xl:mb-[4.1rem]  2xl:mb-[5rem]">
                        <div className="col-span-4 w-full flex items-center justify-center ml-0 lg:ml-[-35px] xl:ml-[-40px] ">
                            <div className='flex flex-col justify-end items-end ml-3 lg:mr-6'>
                                <p className='text-white text-[16px] 2xl:text-[23px] font-semibold mb-1 text-end'>{sliderData.chooseThreeTitle}</p>
                                <div className='w-16  h-[2px] rounded-sm bg-white mb-1'></div>
                                <p className='text-white text-[10px]  2xl:text-[15px]  tracking-tight'>{sliderData.chooseThreeDes}</p>
                            </div>
                            <Image unoptimized src={sliderData.chooseImage3 || IconCar} alt="underline" className='underline' width={90} height={92} />
                        </div>
                        <div className="col-span-4"></div>
                        <div className="col-span-4 w-full flex items-center justify-center  ml-0 lg:ml-[35px] xl:ml-[40px]">
                            <Image unoptimized src={sliderData.chooseImage4 || IconFruit} alt="underline" className='underline' width={90} height={92} />
                            <div className='flex flex-col justify-start items-start ml-3 lg:ml-6'>
                                <p className='text-white text-[16px] 2xl:text-[23px] font-semibold mb-1'>{sliderData.chooseFourTitle}</p>
                                <div className='w-16  h-[2px] rounded-sm bg-white mb-1'></div>
                                <p className='text-white text-[10px] 2xl:text-[15px]   tracking-tight'>{sliderData.chooseFourDes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-center">
                        <div className="col-span-4 w-full flex items-center justify-center ml-0 lg:ml-[-35px] xl:ml-[-40px] ">
                            <div className='flex flex-col justify-end items-end ml-3 lg:mr-6 text-end'>
                                <p className='text-white text-[16px]  2xl:text-[23px] font-semibold mb-1'>{sliderData.chooseFiveTitle}</p>
                                <div className='w-16  h-[2px] rounded-sm bg-white mb-1'></div>
                                <p className='text-white text-[10px]  2xl:text-[15px]  tracking-tight'>{sliderData.chooseFiveDes}</p>
                            </div>
                            <Image unoptimized src={sliderData.chooseImage5 || IconPhone} alt="underline" className='underline' width={90} height={92} />
                        </div>
                        <div className="col-span-4"></div>
                        <div className="col-span-4 w-full flex items-center justify-center  ml-0 lg:ml-[35px] xl:ml-[40px]">
                            <Image unoptimized src={sliderData.chooseImage6 || IconCart} alt="underline" className='underline' width={90} height={92} />
                            <div className='flex flex-col justify-start items-start ml-3 lg:ml-6'>
                                <p className='text-white text-[16px] 2xl:text-[23px] font-semibold mb-1'>{sliderData.chooseSixTitle}</p>
                                <div className='w-16 h-[2px] rounded-sm bg-white mb-1'></div>
                                <p className='text-white text-[10px]  2xl:text-[15px]  tracking-tight'>{sliderData.chooseSixDes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={FruitBasket} alt="Fruit Basket" className='absolute left-1/2 transform -translate-x-1/2 px-auto -bottom-3 xl:bottom-[-50px] w-[370px] h-[300px] md:w-[470] md:h-[400] lg:w-[370px] lg:h-[300px] xl:w-[520px] xl:h-[480px] 2xl:w-[600px] 2xl:h-[540px]' priority />
            </div >

            {/* mobile */}
            <div className="z-20 w-screen mt-[-50px] min-h-[900px] sm:min-h-[1000px] relative block lg:hidden" >
                <Image
                    src={GreenMobile3}
                    alt="Green Background"
                    priority
                    className="z-0 h-full w-full absolute top-0"
                />
                <div className="py-16 absolute top-0">
                    <div className="tile flex flex-col justify-center items-center">
                        <h1 className='text-white text-[22px] sm:text-[25px] md:text-[30px] mb-[2.5rem] md:mb-[3.5rem] md:mt-0' style={{ fontFamily: 'Sriracha' }}>{sliderData.chooseTitle}</h1>
                        <div className="grid grid-rows-6 gap-4 sm:gap-10">
                            <div className="flex justify-center items-center mx-6 sm:mx-[100px]">
                                <Image src={IconHeart} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseOneTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseOneDes}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mx-6 sm:mx-[100px]">
                                <Image src={IconCar} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseTwoTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseTwoDes}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mx-6 sm:mx-[100px]">
                                <Image src={IconFruit} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseThreeTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseThreeDes}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mx-6 sm:mx-[100px]">
                                <Image src={IconPhone} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseFourTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseFourDes}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mx-6 sm:mx-[100px]">
                                <Image src={IconCheck} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseFiveTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseFiveDes}</p>
                                </div>
                            </div>
                            <div className=" justify-center items-center mx-6 sm:mx-[100px] hidden lg:flex">
                                <Image src={IconCart} alt="icon" className='w-[60px] h-[62px] md:w-[90px] md:h-[92px]' priority />
                                <div className="px-4">
                                    <p className='text-white text-[13px] sm:text-[18px] font-semibold mb-1'>{sliderData.chooseSixTitle}</p>
                                    <div className='w-10 h-[2.5px] rounded-md bg-white mb-1'></div>
                                    <p className='text-white text-[10px] sm:text-[15px]  leading-4'>{sliderData.chooseSixDes}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Image
                    src={FruitBasket}
                    alt="Fruit Basket"
                    className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[260px] h-[240px] md:w-[300px] md:h-[250px]"
                    priority
                />
            </div>
        </>

    );
};



export default Slider;
