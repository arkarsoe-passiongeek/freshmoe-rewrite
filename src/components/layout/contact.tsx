import Image from 'next/image'
import { IoMdMail, IoIosPhonePortrait } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { TiArrowRight } from 'react-icons/ti'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import freshMoeLogo from "@/public/images/freshmoeLogo.png"
import CBaseButton from '@/components/custom/c-base-button'
import styles from "./contact.module.css"
import ContactBg from "@/public/images/home/contact-bg.png"
import MobileContactBg from "@/public/images/layout/mobile-contact-bg.png"
import Link from 'next/link'

interface ContactProps {
    contactData: {
        phone: string;
        email: string;
        address: string;
        followUs: string;
        quickLinks: string;
        link1: string;
        link2: string;
        link3: string;
        link4: string;
        link5: string;
        link6: string;
        contactForm: string;
        name: string;
        emailInput: string;
        message: string;
        btn: string;

    };
    locale: string
}

const Contact: React.FC<ContactProps> = ({ contactData, locale }) => {
    return (
        <div className={`relative z-10 bg-cover bg-no-repeat ${styles.bgContact} text-c-contrast`}>
            <Image
                src={ContactBg}
                alt=""
                className="absolute top-[-10%] w-full h-[110%] hidden lg:block"
            />
            <Image
                src={MobileContactBg}
                alt=""
                priority
                className="absolute top-[-10%] w-full h-[110%] lg:hidden"
            />
            <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between pb-10 lg:py-10 h-auto">
                <div className="flex flex-col">
                    <Link href="/">
                        <Image
                            src={freshMoeLogo}
                            alt=""
                            className="w-[100px] lg:w-[10rem] 2xl:w-[200px] h-auto lg:h-[100px] mb-[20px] lg:mb-[32px]"
                        />
                    </Link>
                    <div className='space-y-[20px] lg:space-y-[15px] 2xl:space-y-[24px] mb-[50px]'>
                        <div className="flex space-x-4">
                            <div className="flex items-center text-base 2xl:text-lg">
                                <span className="mr-2 flex justify-center items-center bg-white p-[5px] w-[32px] shrink-0 h-[32px] rounded-full shadow">
                                    <IoMdMail className="text-[1rem] lg:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.email}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex items-center text-base 2xl:text-lg">
                                <span className="mr-2 flex justify-center items-center bg-white p-[5px] w-[32px] shrink-0 h-[32px] rounded-full shadow">
                                    <IoIosPhonePortrait className="text-[1rem] lg:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.phone}
                            </div>
                        </div>

                        <div className="flex space-x-4 w-auto sm:w-full md:w-[16.8rem] lg:w-[17rem] xl:w-[22rem]">
                            <div className="flex text-base 2xl:text-lg">
                                <span className="mr-2 flex justify-center items-center bg-white p-[5px] w-[32px] shrink-0 h-[32px] rounded-full shadow">
                                    <IoLocationSharp className="text-[1rem] lg:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.address}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-c-primary font-semibold text-lg 2xl:text-2xl mb-[20px]">
                            {contactData.followUs}
                        </h2>
                        <div className="flex gap-[27px] mt-4 text-c-secondary">
                            <a href="">
                                <FaFacebook size={23} />
                            </a>
                            <a href="">
                                <FaLinkedin size={23} />
                            </a>
                            <a href="">
                                <FaInstagram size={23} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 pt-11 md:pt-0 md:justify-self-end lg:justify-self-auto">
                    <h2 className="text-c-primary font-semibold text-lg 2xl:text-2xl">
                        {contactData.quickLinks}
                    </h2>

                    <div className="flex flex-col gap-5 2xl:gap-[40px] text-sm 2xl:text-lg">
                        <Link href={`/${locale}/about-us`} className='hover:text-c-secondary w-fit'>{contactData.link1}</Link>
                        <Link href={`/${locale}/our-services`} className='hover:text-c-secondary w-fit'>{contactData.link2}</Link>
                        <Link href={`/${locale}/profile`} className='hover:text-c-secondary w-fit'>{contactData.link3}</Link>
                        <Link href={`/${locale}/profile`} className='hover:text-c-secondary w-fit'>{contactData.link4}</Link>
                        <Link href={`/${locale}/profile`} className='hover:text-c-secondary w-fit'>{contactData.link5}</Link>
                        <Link href={`/${locale}/profile`} className='hover:text-c-secondary w-fit'>{contactData.link6}</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5 items-right pt-11 lg:pt-0 md:col-span-2 lg:col-span-1">
                    <h2 className="text-c-primary font-semibold text-lg 2xl:text-2xl">
                        {contactData.contactForm}
                    </h2>
                    <div className="flex flex-col gap-5 lg:gap-[24px] text-c-contrast text-base lg:text-md xl:text-lg lg:text-base">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.name}
                            className="p-3 lg:p-[15px] text-sm lg:text-base rounded-xl border border-c-border-stroke focus:outline-none"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.emailInput}
                            className="p-3 lg:p-[15px] text-sm lg:text-base rounded-xl border border-c-border-stroke focus:outline-none"
                        />

                        <textarea
                            name=""
                            id=""
                            cols={3}
                            rows={3}
                            className="p-3 lg:p-[15px] text-sm lg:text-base rounded-xl border border-c-border-stroke focus:outline-none"
                            placeholder={contactData.message}
                        ></textarea>
                        <div className="flex justify-start">
                            <CBaseButton
                                className="flex items-center justify-center button-rounded-xl md:leading-[20px] lg:leading-[25px] py-[9px] md:py-[10px] border-2 border-c-secondary text-white bg-c-secondary rounded-xl font-normal w-[160px] lg:w-[220px] h-[50px] lg:text-base lg:py-[13px] lg:px-[68px] lg:rounded-[10px] hover:!bg-c-hover"
                            >
                                <span className='text-sm lg:text-base'>
                                    {contactData.btn}
                                </span>
                                <TiArrowRight className="text-white inline-block !w-[20px] !h-[20px]" />
                            </CBaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;