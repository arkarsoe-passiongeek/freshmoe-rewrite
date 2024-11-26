import Image from 'next/image'
import { IoMdMail, IoIosPhonePortrait } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { TiArrowRight } from 'react-icons/ti'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { freshMoeLogo } from '@/lib/file-provider/images'
import CBaseButton from '@/components/custom/c-base-button'
import styles from "./contact.module.css"

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
        <div className={`relative mt-[-7rem] md:mt-[-6rem] lg:mt-[-2rem] xl:mt-[-3rem] 2xl:mt-[-3.5rem] z-10 pt-[8rem] md:pt-[7rem] lg:pt-[8rem] xl:pt-[8rem] 2xl:pt-[10rem] bg-cover bg-no-repeat ${styles.bgContact}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between px-[2rem] md:px-[4rem] lg:px-[5rem] md:pt-0 pb-12 max-w-[110rem] mx-auto h-auto">
                <div className="flex flex-col gap-5">
                    <a href="#" className="">
                        <Image
                            src={freshMoeLogo}
                            alt=""
                            className="w-[100px] lg:w-[10rem] h-auto ml-3 md:ml-0"
                        />
                    </a>

                    <div className="flex space-x-4">
                        <div className="flex items-center text-base lg:text-md xl:text-lg 2xl:text-xl text-slate-500">
                            <span className="mr-2 bg-white p-[5px] rounded-full">
                                <IoMdMail className="text-[1rem] text-[#ED1C24]" />
                            </span>
                            {/* {contactData.email} */}
                            {/* <Typography variant='subtitle2'> */}
                            {contactData.email}
                            {/* </Typography> */}
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="flex items-center text-base lg:text-md xl:text-lg 2xl:text-xl text-slate-500">
                            <span className="mr-2 bg-white p-[5px] rounded-full">
                                <IoIosPhonePortrait className="text-[1rem] text-[#ED1C24]" />
                            </span>
                            {/* <Typography variant='subtitle2'> */}
                            {contactData.phone}
                            {/* </Typography> */}
                        </div>
                    </div>

                    <div className="flex space-x-4 w-auto sm:w-full md:w-[16.8rem] lg:w-[17rem] xl:w-[22rem]">
                        <div className="flex text-base lg:text-md xl:text-lg 2xl:text-xl text-slate-500 ">
                            <span className="mr-2 bg-white p-[5px] h-[26px] rounded-full">
                                <IoLocationSharp className="text-[1rem] text-[#ED1C24]" />
                            </span>
                            {/* <Typography variant='subtitle2'> */}
                            {contactData.address}
                            {/* </Typography> */}
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-[#418432] font-semibold text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                            {contactData.followUs}
                        </h2>
                        <div className="flex gap-2 mt-4 text-[#ED1C24]">
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
                        <h2 className="text-[#418432] font-bold text-xl lg:text-2xl 2xl:text-3xl">
                            {contactData.quickLinks}
                        </h2>
                    </a>

                    <div className="flex flex-col gap-5 text-slate-500 text-base lg:text-md xl:text-lg 2xl:text-xl">
                        <a href={`/${locale}/aboutus`} className='hover:text-[#ED1C24]'>{contactData.link1}</a>
                        <a href={`/${locale}/ourservices`} className='hover:text-[#ED1C24]'>{contactData.link2}</a>
                        <a href={`/${locale}/profile`} className='hover:text-[#ED1C24]'>{contactData.link3}</a>
                        <a href={`/${locale}/profile`} className='hover:text-[#ED1C24]'>{contactData.link4}</a>
                        <a href={`/${locale}/profile`} className='hover:text-[#ED1C24]'>{contactData.link5}</a>
                        <a href={`/${locale}/profile`} className='hover:text-[#ED1C24]'>{contactData.link6}</a>
                    </div>
                </div>
                <div className="flex flex-col gap-7 items-right pt-11  lg:pt-0">
                    <a href="#" className="">
                        <h2 className="text-[#418432] font-bold text-xl lg:text-2xl 2xl:text-3xl">
                            {contactData.contactForm}
                        </h2>
                    </a>
                    <div className="flex flex-col gap-5 text-slate-500 text-base lg:text-md xl:text-lg 2xl:text-xl">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.name}
                            className="p-3 text-md rounded-xl border border-1 border-slate-300 focus:outline-none"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={contactData.emailInput}
                            className="p-3 text-md rounded-xl border border-1 border-slate-300 focus:outline-none"
                        />

                        <textarea
                            name=""
                            id=""
                            cols={3}
                            rows={3}
                            className="p-3 text-md rounded-xl border border-1 border-slate-300 focus:outline-none"
                            placeholder={contactData.message}
                        ></textarea>
                        <div className="flex justify-end">
                            <CBaseButton
                                className="flex items-center justify-center button-rounded-xl md:leading-[20px] lg:leading-[25px] py-[9px] md:py-[10px] lg:py-[8px] 2xl:py-[9px] border-2 border-[#ED1C24] text-white bg-[#ED1C24] rounded-xl font-normal w-[30%] sm:w-[25%] md:w-[30%] xl:w-1/4 group"
                            >
                                <span className='text-[2.8vw] sm:text-[2vw] md:text-[1.4vw] lg:text-[0.9vw] xl:text-[1vw] 2xl:text-[0.85vw] text-poppins'>
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