'use client'
import Image from 'next/image'
import freshMoeLogo from '../../../public/images/freshmoeLogo.png'
import {
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowDown
} from 'react-icons/md'
import { FaBars } from 'react-icons/fa6'
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react'
import { CiGlobe } from "react-icons/ci";
import { PiSpinner, PiTranslate } from "react-icons/pi";
import Flag from 'react-world-flags';
import { CCountrySelect } from '@/components/custom/c-country-select'
import { CLanguageSelect } from '@/components/custom/c-language-select'
import { getLanguageName, LanguageCodes } from '@/lib/utils'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { COUNTRY_OPTIONS } from '@/lib/constant'

interface NavbarProps {
    locale: string;
    navData: {
        home: string;
        aboutUs: string;
        ourServices: string;
        profile: string;
        contact: string;
        login: string;
        register: string;
        download: string
    };
}

const countryOptions = COUNTRY_OPTIONS

const Navbar: React.FC<NavbarProps> = ({ locale, navData }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [lang, setLang] = useState('')
    const [open, setOpen] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [upperMenu, setUpperMenu] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageCodes>(locale.split('_')[0] as LanguageCodes);
    const [currentCountry, setCurrentCountry] = useState<any>()
    const [currentLanguage] = useState<LanguageCodes>(locale.split('_')[0] as LanguageCodes)
    const [languageChanging, setLanguageChanging] = useState(false)

    const navList = [
        {
            name: navData['home'],
            url: '/'
        },
        {
            name: navData['aboutUs'],
            url: '/about-us'
        },
        {
            name: navData['ourServices'],
            url: '/our-services'
        },
        {
            name: navData['profile'],
            url: '/profile'
        },
        {
            name: navData['contact'],
            url: '/contact'
        },
        {
            name: navData['download'],
            url: '/download'
        },
    ]

    const isNavActive = (url: string) => {
        return pathname === url
    }

    const handleChangeCountry = (value: any) => {
        let countries: any[] = []
        countryOptions.map(each => {
            countries = [...countries, ...each.countries]
        })
        const country = countries.filter(country => country.value === value)[0]
        setSelectedCountry(country)
        setSelectedLanguage(country.languages[0])
    }

    const closeAllMenu = () => {
        setUpperMenu(false)
        setSidebar(false)
        document.body.style.overflow = 'auto'
    }

    // making the navbar transparent on scroll
    useEffect(() => {
        const lang = pathname.split('/')[1]
        setLang(lang)

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            const navbar = document.getElementById("navbar");
            const navbarItems = document.getElementsByClassName("nav");
            const profile_icon = document.getElementById("profile_icon");
            const btn_text = document.getElementById("btn_text");

            if (navbar) {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    if (profile_icon) {
                        profile_icon.style.backgroundColor = "transparent";
                    }

                    if (btn_text) {
                        btn_text.style.color = "#555";
                    }

                    for (let i = 0; i < navbarItems.length; i++) {
                        (navbarItems[i] as HTMLElement).style.color = "#555";
                    }
                } else {
                    navbar.style.backgroundColor = "bg-c-white"; // Reset background color
                    // arrowColor.style.backgroundColor = "#000";
                    for (let i = 0; i < navbarItems.length; i++) {
                        (navbarItems[i] as HTMLElement).style.color = "#000"; // Change text color to black
                    }

                    if (profile_icon) {
                        profile_icon.style.backgroundColor = "#EFF8ED";
                    }

                    if (btn_text) {
                        btn_text.style.color = "#000";
                    }
                }
            }
        }
        scrollFunction();
    }, [pathname])
    // end making the navbar transparent on scroll

    // set current country and selected country on page load
    useEffect(() => {
        countryOptions.map(continent => {
            continent.countries.map(country => {
                if (country.value === locale.split('_')[1]) {
                    setCurrentCountry(country)
                    setSelectedCountry(country)
                }
            })
        })[0]
    }, [])

    const handleToggle = () => {
        setSidebar(!sidebar)
        setUpperMenu(false)
        if (!sidebar) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    // handle language select modal
    const handleUpperMenuToggle = () => {
        setUpperMenu(!upperMenu)
        setSidebar(false)
        if (!upperMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }
    // end handle language select modal

    // language select modal open
    const handleOpen = () => {
        setOpen(!open)
    }
    // end language select modal open

    const handleConfirmChangeLanguage = () => {
        setLanguageChanging(true)
        let newPrefix: any = `${selectedLanguage}_${selectedCountry.value}`
        if (newPrefix !== locale) {
            router.replace(pathname, { locale: newPrefix })
        }
        console.log(newPrefix)
        setLanguageChanging(false)
    }

    return (
        <>
            <div className='fixed w-full top-0 z-[60]'>
                <div className="bg-c-primary w-full p-[20px] brand-line-green"></div>
                <div className="bg-c-white w-full p-[1px] brand-line-white"></div>
                <div className="bg-c-secondary w-full p-[3.95px] brand-line-red"></div>
                <nav className={`shadow-lg w-full flex lg:justify-between items-center transition ${(sidebar || upperMenu) ? '!bg-c-white' : ''}`} id="navbar">
                    <div className="container mx-auto flex lg:justify-between items-center py-[0.8rem]">
                        <ul className="xl:flex-1 font-bold hidden md:flex nav items-center gap-4" id="nav-item">
                            <li
                                className={`hover:text-c-primary font-bold cursor-pointer ${pathname === `/${lang}` ? 'text-c-secondary' : ''
                                    } `}
                            >
                                {!sidebar ? (
                                    <span
                                        className="mt-0"
                                        id="close-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <FaBars className="text-black md:w-[20px] md:h-[20px]" />
                                    </span>
                                ) : (
                                    <span
                                        className="mt-0"
                                        id="open-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <RxCross1 className="text-black md:w-[20px] md:h-[20px]" />
                                    </span>
                                )}
                            </li>
                            {
                                navList.map((each, index) => {
                                    if (index < 3) {
                                        return (
                                            <li
                                                key={each.url} className={`hover:text-c-primary font-semibold lg:text-base hidden lg:flex 
                  ${isNavActive(each.url) ? 'text-c-primary' : ''}
                  `}
                                            >
                                                <Link href={`${each.url}`} onClick={closeAllMenu} prefetch>{each.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        {!sidebar ? (
                            <span
                                className="block md:hidden mt-0 w-[16px]"
                                id="close-sidebar"
                                onClick={() => handleToggle()}
                            >
                                <FaBars className="text-black" />
                            </span>
                        ) : (
                            <span
                                className="block md:hidden mt-0 w-[16px]"
                                id="open-sidebar"
                                onClick={() => handleToggle()}
                            >
                                <RxCross1 className="text-black text-semibold" />
                            </span>
                        )}

                        <div
                            className={`lg:flex-1 flex justify-center ${(currentLanguage === 'mm') ?
                                'pl-[10px] md:pl-2'
                                :
                                'pl-[10px] md:pl-2'
                                }`}
                        >
                            <Link href="/" className="">
                                <Image
                                    src={freshMoeLogo}
                                    alt=""
                                    className=
                                    {`w-[70px] sm:w-[85px] md:w-[90px] lg:w-[140px] lg:h-[65px] h-auto lg:ml-0`}
                                />
                            </Link>
                        </div>
                        <div className='flex-1 flex justify-end ml-auto lg:ml-0 min-h-[26px]' onClick={() => { handleOpen }}>
                            {/* Desktop , tablet and mobile*/}
                            <button
                                className={`relative px-0 xl:pl-1 rounded-xl text-sm font-normal flex justify-between items-center`}
                                id="locale-button"
                                // onClick={handleOpen}
                                onClick={handleUpperMenuToggle}
                            >
                                <span className="flex items-center space-x-2">
                                    <div className='flex items-center space-x-2'>
                                        <div>
                                            {currentCountry?.value == 'global' ? (
                                                <CiGlobe
                                                    className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] ${currentCountry?.value == 'global' ?
                                                        'text-c-black' :
                                                        ''
                                                        }`}
                                                />
                                            ) : (
                                                <Flag code={currentCountry?.flag} className="w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" />
                                            )}
                                        </div>
                                        <span className={`lg:text-base font-normal max-w-[60px] md:max-w-none text-ellipsis overflow-hidden text-nowrap`}>
                                            {currentCountry?.label}
                                        </span>
                                    </div>
                                    <div className='border-r h-[21px] border-c-black'></div>
                                    <PiTranslate className="md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] h-auto rounded-3xl text-c-black" />
                                    <div className={`
                            flex items-center lg:text-base max-w-[60px] min-h-[28px] md:max-w-none text-ellipsis overflow-hidden text-nowrap`}>
                                        {getLanguageName(`${currentLanguage}`)}
                                    </div>
                                    <div>
                                        {upperMenu ? (
                                            <MdOutlineKeyboardArrowUp className="md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]" />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown className="md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]" />
                                        )}
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </nav >
            </div >
            {/* <!-- start mobile sidebar --> */}
            <div
                className={`z-50 fixed h-full w-full lg:w-[600px] bg-c-white top-[105px] md:top-[111px] xl:top-[119px] lg:top-[130px] flex flex-col transition-all duration-500 ${sidebar ? 'opacity-100 translate-x-[0px]' : 'opacity-0  translate-x-[-80px] invisible'}`}
                id="sidebar"
            >
                <div className="text-c-black space-y-[22px] pl-6 pt-12">
                    {
                        navList.map(each => {
                            return (
                                <div key={each.name} className="ml-4 mt-1">
                                    <Link href={`${each.url}`} prefetch
                                        className={`text-[14px] lg:text-base flex flex-start font-medium hover:text-c-secondary text-poppins 
                  ${isNavActive(each.url) ? 'text-c-secondary' : ''}
                  `}
                                        onClick={closeAllMenu}
                                    >
                                        {each.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <!-- end mobile sidebar --> */}

            {/* start language menu */}
            <div
                className={`z-50 fixed h-[100vh] w-full lg:w-[45%] bg-c-white right-0 flex flex-col transition-all duration-500 ${upperMenu ? 'opacity-100 translate-y-[0px]' : 'opacity-0  translate-y-[-80px] invisible'}`}
                id="upper-menu"
            >
                <div className="container pt-[100px] lg:pt-[150px] mx-auto flex flex-col gap-6 lg:flex-row w-full items-center py-[0.8rem] max-w-[1790px] px-[2rem] mt-10">
                    <div className="w-full lg:w-[50%]">
                        <label htmlFor="country" className="block lg:text-lg font-medium text-c-black mb-2">
                            Select Your Country
                        </label>
                        <CCountrySelect defaultValue='global' onValueChange={handleChangeCountry} continents={countryOptions} value={selectedCountry?.value ?? 'global'} placeholder="Select Your Country" />
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <label htmlFor="country" className="block lg:text-lg font-medium text-c-black mb-2">
                            Choose Language
                        </label>
                        <CLanguageSelect items={selectedCountry.languages} placeholder='Select Your Language' onValueChange={setSelectedLanguage} value={selectedLanguage} defaultValue='en' />
                    </div>
                </div>

                <div className="absolute bottom-[10%] lg:bottom-0 w-full py-4 flex justify-center items-center">
                    <button
                        disabled={languageChanging}
                        className={`text-white text-sm lg:text-base py-[0.8rem] rounded-[10px] w-full h-full lg:w-[500px] mx-6 flex justify-center items-center  ${languageChanging ? 'bg-c-contrast hover:bg-c-contrast' : 'bg-c-primary hover:bg-c-primary'}`}
                        onClick={handleConfirmChangeLanguage}
                    >
                        {languageChanging ? <PiSpinner className='w-[30px] h-[30px]' /> : "Confirm"}
                    </button>
                </div>
            </div>

            <div id='bg-wrapper' className={`w-[100vw] h-[100vh] z-40 bg-c-black transition-all duration-500 fixed ${(upperMenu || sidebar) ? 'opacity-50' : 'opacity-0 invisible'}`}>
            </div>
        </>
    )
}

export default Navbar;