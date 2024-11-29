import Image from 'next/image'
import { IoMdMail, IoIosPhonePortrait } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { TiArrowRight } from 'react-icons/ti'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import freshMoeLogo from "@/public/images/freshmoeLogo.png"
import CBaseButton from '@/components/custom/c-base-button'
import styles from "./contact.module.css"
import ContactBg from "@/public/images/home/contact-bg.png"

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
                className="absolute top-[-10%] w-full h-[110%]"
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between px-[2rem] md:px-[4rem] lg:px-[5rem] py-12 max-w-[110rem] mx-auto h-auto">
                <div className="flex flex-col">
                    <a href="#" className="">
                        <Image
                            src={freshMoeLogo}
                            alt=""
                            className="w-[100px] lg:w-[10rem] 2xl:w-[200px] h-auto 2xl:h-[100px] ml-3 md:ml-0 2xl:mb-[32px]"
                        />
                    </a>

                    <div className='2xl:space-y-[24px] mb-[50px]'>
                        <div className="flex space-x-4">
                            <div className="flex items-center text-base lg:text-md xl:text-lg 2xl:text-lg">
                                <span className="mr-2 bg-white p-[5px] 2xl:w-[32px] 2xl:h-[32px] rounded-full shadow">
                                    <IoMdMail className="text-[1rem] 2xl:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.email}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex items-center text-base lg:text-md xl:text-lg 2xl:text-lg">
                                <span className="mr-2 bg-white p-[5px] 2xl:w-[32px] 2xl:h-[32px] rounded-full shadow">
                                    <IoIosPhonePortrait className="text-[1rem] 2xl:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.phone}
                            </div>
                        </div>

                        <div className="flex space-x-4 w-auto sm:w-full md:w-[16.8rem] lg:w-[17rem] xl:w-[22rem]">
                            <div className="flex text-base lg:text-md xl:text-lg 2xl:text-lg">
                                <span className="mr-2 bg-white p-[5px] 2xl:w-[32px] 2xl:h-[32px] rounded-full shadow">
                                    <IoLocationSharp className="text-[1rem] 2xl:text-lg text-c-secondary font-normal" />
                                </span>
                                {contactData.address}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-c-primary font-semibold text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 2xl:mb-[16px]">
                            {contactData.followUs}
                        </h2>
                        <div className="flex gap-2 2xl:gap-[27px] mt-4 text-c-secondary">
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

                <div className="flex flex-col gap-7 pt-11 md:pt-0">
                    <a href="#" className="">
                        <h2 className="text-c-primary font-bold text-xl lg:text-2xl 2xl:text-2xl">
                            {contactData.quickLinks}
                        </h2>
                    </a>

                    <div className="flex flex-col gap-5 2xl:gap-[40px] text-base lg:text-md xl:text-lg 2xl:text-lg">
                        <a href={`/${locale}/aboutus`} className='hover:text-c-secondary'>{contactData.link1}</a>
                        <a href={`/${locale}/ourservices`} className='hover:text-c-secondary'>{contactData.link2}</a>
                        <a href={`/${locale}/profile`} className='hover:text-c-secondary'>{contactData.link3}</a>
                        <a href={`/${locale}/profile`} className='hover:text-c-secondary'>{contactData.link4}</a>
                        <a href={`/${locale}/profile`} className='hover:text-c-secondary'>{contactData.link5}</a>
                        <a href={`/${locale}/profile`} className='hover:text-c-secondary'>{contactData.link6}</a>
                    </div>
                </div>

                <div className="flex flex-col gap-7 items-right pt-11  lg:pt-0">
                    <a href="#" className="">
                        <h2 className="text-c-primary font-bold text-xl lg:text-2xl 2xl:text-2xl">
                            {contactData.contactForm}
                        </h2>
                    </a>
                    <div className="flex flex-col gap-5 2xl:gap-[24px] text-c-contrast text-base lg:text-md xl:text-lg 2xl:text-base">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.name}
                            className="p-3 2xl:p-[15px] text-md rounded-xl border border-1 border-c-border-stroke focus:outline-none"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.emailInput}
                            className="p-3 2xl:p-[15px] text-md rounded-xl border border-1 border-c-border-stroke focus:outline-none"
                        />

                        <textarea
                            name=""
                            id=""
                            cols={3}
                            rows={3}
                            className="p-3 2xl:p-[15px] text-md rounded-xl border border-1 border-c-border-stroke focus:outline-none"
                            placeholder={contactData.message}
                        ></textarea>
                        <div className="flex justify-start">
                            <CBaseButton
                                className="flex items-center justify-center button-rounded-xl md:leading-[20px] lg:leading-[25px] py-[9px] md:py-[10px] lg:py-[8px] border-2 border-c-secondary text-white bg-c-secondary rounded-xl font-normal w-[30%] sm:w-[25%] md:w-[30%] xl:w-1/4 group 2xl:text-base 2xl:py-[13px] 2xl:px-[68px] 2xl:rounded-[10px]"
                            >
                                <span className='text-sm 2xl:text-base'>
                                    {contactData.btn}
                                </span>
                                <TiArrowRight size={24} className="text-white" />
                            </CBaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;