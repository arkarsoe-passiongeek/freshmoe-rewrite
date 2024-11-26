'use client'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import freshMoeLogo from '../../../public/images/freshmoeLogo.png'
import {
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowDown,
} from 'react-icons/md'
import { FaBars } from 'react-icons/fa6'
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CiGlobe } from "react-icons/ci";
import { PiTranslate } from "react-icons/pi";
import Flag from 'react-world-flags';
import ChooseLang from '../modals/choose-lang'
import { CCountrySelect } from '../custom/c-country-select'
import { CLanguageSelect } from '../custom/c-language-select'
import { getLanguageName, LanguageCodes } from '@/lib/utils'

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

const countryOptions = [
    {
        continent: 'global',
        countries: [
            { value: 'global', label: 'Global', flag: 'global', area: 'global', languages: ['en', 'mm', 'th', 'ae', 'cn'] },
        ]
    },
    {
        continent: 'asia pacific',
        countries: [
            { value: 'mm', label: 'Myanmar', flag: 'mm', area: 'asia pacific', languages: ['en', 'mm'] },
            { value: 'th', label: 'Thailand', flag: 'th', area: 'asia pacific', languages: ['en', 'th'] },
        ]
    },
    {
        continent: 'middle east',
        countries: [
            { value: 'ae', label: 'United Arab Emirates', flag: 'ae', area: 'middle east', languages: ['en', 'ae'] },
        ]
    }
]

const Navbar: React.FC<NavbarProps> = ({ locale, navData }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [lang, setLang] = useState('')
    const [open, setOpen] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const [upperMenu, setUpperMenu] = useState(true)
    const localActive = useLocale()
    const baseUrl = process.env.NEXT_PUBLIC_APP_REDIRECT_URL;
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageCodes>('en');
    const [currentCountry, setCurrentCountry] = useState<any>(locale.split('_')[0])
    const [currentLanguage, setCurrentLanguage] = useState<any>({})

    const handleChangeCountry = (value: any) => {
        let countries: any[] = []
        countryOptions.map(each => {
            countries = [...countries, ...each.countries]
        })
        let country = countries.filter(country => country.value === value)[0]
        setSelectedCountry(country)
        setSelectedLanguage(country.languages[0])
    }

    const closeAllMenu = () => {
        const sidebarElement = document.querySelector<HTMLDivElement>('#sidebar')
        const upperMenuElement = document.querySelector<HTMLDivElement>('#upper-menu')
        const upperMenuWrapper =
            document.querySelector<HTMLDivElement>('#upper-menu-wrapper')
        const globes = document.querySelectorAll<HTMLElement>('.globe');
        const localeButton = document.getElementById('locale-button')
        const navbar = document.getElementById("navbar");
        const sidebarWrapper = document.querySelector<HTMLDivElement>('#sidebar-wrapper')
        sidebarElement?.classList.add('-left-80')
        sidebarElement?.classList.remove('left-0')
        sidebarWrapper?.classList.add('invisible')
        sidebarWrapper?.classList.add('opacity-0')
        document.documentElement.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'
        setSidebar(true)
        document.documentElement.style.overflowY = 'visible'
        document.body.style.overflowY = 'visible'
        globes.forEach(globe => {
            globe.style.visibility = 'visible';
        });
        if (localeButton) {
            localeButton.style.visibility = 'visible';
        }
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            if (navbar) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }
        } else {
            if (navbar) {
                navbar.style.backgroundColor = '#fff';
            }
        }

        upperMenuElement?.classList.add('-top-[104px]')
        upperMenuElement?.classList.remove('top-0')
        upperMenuWrapper?.classList.add('invisible')
        upperMenuWrapper?.classList.add('opacity-0')
        document.documentElement.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'
        setUpperMenu(true)
        document.documentElement.style.overflowY = 'visible'
        document.body.style.overflowY = 'visible'


        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            if (navbar) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }
        } else {
            if (navbar) {
                navbar.style.backgroundColor = '#fff';
            }
        }
    }

    // making the navbar transparent on scroll
    useEffect(() => {
        const lang = pathname.split('/')[1]
        setLang(lang)

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            const navbar = document.getElementById("navbar");
            const navbarItems = document.getElementsByClassName("nav");
            const arrowColor = document.getElementById("arrow");
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
                    navbar.style.backgroundColor = "#fff"; // Reset background color
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

    const handleToggle = () => {
        const sidebarElement = document.querySelector<HTMLDivElement>('#sidebar')
        const upperMenuElement = document.querySelector<HTMLDivElement>('#upper-menu')
        const upperMenuWrapper =
            document.querySelector<HTMLDivElement>('#upper-menu-wrapper')
        const globes = document.querySelectorAll<HTMLElement>('.globe');
        const localeButton = document.getElementById('locale-button')
        const navbar = document.getElementById("navbar");
        const navbarElement = document.querySelector<HTMLDivElement>('#navbar')
        const sidebarWrapper =
            document.querySelector<HTMLDivElement>('#sidebar-wrapper')
        if (sidebarElement && sidebarWrapper) {
            if (sidebar == true) {
                const classesToRemove = ['bg-[#000]', 'bg-opacity-20'];
                const classesToRemoveWidth = ['w-full'];
                sidebarWrapper?.classList.add(...classesToRemove);
                sidebarWrapper?.classList.add(...classesToRemoveWidth);
                sidebarElement?.classList.remove('-left-80')
                sidebarElement?.classList.add('left-0')
                sidebarWrapper?.classList.remove('invisible')
                sidebarWrapper?.classList.remove('opacity-0')
                navbarElement?.classList.add('bg-white')
                setSidebar(false)
                document.documentElement.style.overflowY = 'hidden'
                // document.body.style.overflowY = 'hidden' 
                //close upper menu when sidebar is open
                upperMenuElement?.classList.add('-top-[104px]')
                upperMenuElement?.classList.remove('top-0')
                upperMenuWrapper?.classList.add('invisible')
                upperMenuWrapper?.classList.add('opacity-0')
                document.documentElement.style.overflowY = 'hidden'
                setUpperMenu(true)
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    if (navbar) {
                        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    }
                } else {
                    if (navbar) {
                        navbar.style.backgroundColor = '#fff';
                    }
                }
                //
            } else {
                const classesToRemove = ['bg-[#000]', 'bg-opacity-20'];
                const classesToRemoveWidth = ['w-full'];
                const classesToAddWidth = ['w-[50%]'];
                upperMenuWrapper?.classList.add(...classesToRemove);
                upperMenuWrapper?.classList.remove(...classesToAddWidth);
                upperMenuWrapper?.classList.add(...classesToRemoveWidth);

                sidebarElement?.classList.add('-left-80')
                sidebarElement?.classList.remove('left-0')
                sidebarWrapper?.classList.add('invisible')
                sidebarWrapper?.classList.add('opacity-0')
                document.documentElement.style.overflowY = 'visible'
                document.body.style.overflowY = 'visible'
                setSidebar(true)

                document.documentElement.style.overflowY = 'visible'
            }
        }
    }

    // handle language select modal
    const handleUpperMenuToggle = () => {
        // if(localActive !== 'en_global'){
        // alert("Sidebar "+sidebar+" Upper "+upperMenu)
        const sidebarElement = document.querySelector<HTMLDivElement>('#sidebar')
        const upperMenuElement = document.querySelector<HTMLDivElement>('#upper-menu')
        const localeButton = document.getElementById('locale-button')
        const navbar = document.getElementById("navbar");
        const navbarElement = document.querySelector<HTMLDivElement>('#navbar')
        const upperMenuWrapper =
            document.querySelector<HTMLDivElement>('#upper-menu-wrapper')
        const sidebarWrapper =
            document.querySelector<HTMLDivElement>('#sidebar-wrapper')
        if (upperMenuElement && upperMenuWrapper) {
            // if(!sidebar){
            const classesToRemove = ['bg-[#000]', 'bg-opacity-20'];
            const classesToRemoveWidth = ['w-full'];
            upperMenuWrapper.classList.remove(...classesToRemove);
            upperMenuWrapper.classList.remove(...classesToRemoveWidth);
            if (upperMenu == true) {
                upperMenuElement?.classList.remove('-top-[104px]')
                upperMenuElement?.classList.add('top-0')
                upperMenuWrapper?.classList.remove('invisible')
                upperMenuWrapper?.classList.remove('opacity-0')
                upperMenuElement?.classList.add('animate-dropdown'); // Trigger dropdown animation
                const classesToRemove = ['bg-[#000]', 'bg-opacity-20'];
                const classesToRemoveWidth = ['w-full'];
                const classesToAddWidth = ['w-[50%]'];
                upperMenuWrapper?.classList.add(...classesToRemove);
                upperMenuWrapper?.classList.remove(...classesToAddWidth);
                upperMenuWrapper?.classList.add(...classesToRemoveWidth);

                sidebarElement?.classList.add('-left-80')
                sidebarElement?.classList.remove('left-0')
                sidebarWrapper?.classList.add('invisible')
                sidebarWrapper?.classList.add('opacity-0')
                setSidebar(true)
                if (navbar) {
                    navbar.style.backgroundColor = '#fff';
                }
                navbarElement?.classList.add('bg-white')
                setUpperMenu(false)
                document.documentElement.style.overflowY = 'hidden'
                // document.body.style.overflowY = 'hidden' 
            } else {
                upperMenuElement?.classList.add('-top-[104px]')
                upperMenuElement?.classList.remove('top-0')
                upperMenuWrapper?.classList.add('invisible')
                upperMenuWrapper?.classList.add('opacity-0')
                document.body.style.overflowY = 'visible'
                setUpperMenu(true)
                document.documentElement.style.overflowY = 'visible'
            }
        }
    }
    // end handle language select modal

    // language select modal open
    const handleOpen = () => {
        setOpen(!open)
    }
    // end language select modal open

    const handleConfirmChangeLanguage = () => {
        let newPrefix = `${selectedLanguage}_${selectedCountry.value}`
        let newPath = pathname.replace(locale, newPrefix)
        // return console.log(newPath)
        router.replace(newPath)
    }

    return (
        <>
            <div className='fixed w-full top-0'>
                <div className="bg-c-primary w-full p-[20px] brand-line-green"></div>
                <div className="bg-[#fff] w-full p-[1px] brand-line-white"></div>
                <div className="bg-c-secondary w-full p-[3.95px] brand-line-red"></div>
                <nav className="shadow-lg w-full flex lg:justify-between items-center z-40" id='navbar'>
                    {open ? <ChooseLang onClickParent={() => setOpen(false)} /> : ''}
                    <div className="container mx-auto flex lg:justify-between items-center py-[0.8rem] max-w-[1790px] px-[2rem] md:px-[4rem] lg:px-[5rem]">
                        <ul className="poppins font-bold hidden md:flex nav  items-center" id="nav-item">
                            <li
                                className={`hover:text-[#ED1C24] font-bold ${lang == 'en' ? 'px-3' : 'px-2'} py-3 text-[0.75vw]  ${pathname === `/${lang}` ? 'text-[#ED1C24]' : ''
                                    } `}
                            >
                                {sidebar ? (
                                    <span
                                        className="mt-0"
                                        id="close-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <FaBars className="text-black sm:text-[2.6vw] md:text-[2.1vw] lg:text-[1.7vw] xl:text-[1.5vw]" />
                                    </span>
                                ) : (
                                    <span
                                        className="mt-0"
                                        id="open-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <RxCross1 className="text-black sm:text-[2.6vw] md:text-[2.1vw] lg:text-[1.7vw] xl:text-[1.5vw]" />
                                    </span>
                                )}
                            </li>
                            <li
                                className={`hover:text-[#ED1C24] font-bold ${lang == 'en' ? 'px-3' : 'px-2'} py-3 text-[0.75vw] lg:text-[1vw] xl:text-[0.75vw] hidden lg:flex 
              ${(pathname === '/' && localActive === 'en_global') || (pathname === `/${lang}` && localActive !== 'en_global') || (pathname === `/${lang}` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}

              `}
                                onClick={closeAllMenu}
                            >
                                <Link href={`${localActive === 'en_global' ? '/' : `/${lang}`}`} prefetch>{navData.home}</Link>
                            </li>
                            <li
                                className={`hover:text-[#ED1C24] font-bold ${lang == 'en' ? 'px-3' : 'px-2'}  py-3 text-[0.75vw] lg:text-[1vw] xl:text-[0.75vw] hidden lg:flex 
              ${(pathname === '/aboutus' && localActive === 'en_global') || (pathname === `/${lang}/aboutus` && localActive !== 'en_global') || (pathname === `/${lang}/aboutus` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}
               `}
                            >
                                <Link href={`${localActive === 'en_global' ? '/aboutus' : `/${lang}/aboutus`}`} prefetch>{navData.aboutUs}</Link>
                            </li>
                            <li
                                className={`hover:text-[#ED1C24] font-bold ${lang == 'en' ? 'px-3' : 'px-2'} py-3 text-[0.75vw] lg:text-[1vw] xl:text-[0.75vw] hidden lg:flex 
              ${(pathname === '/ourservices' && localActive === 'en_global') || (pathname === `/${lang}/ourservices` && localActive !== 'en_global') || (pathname === `/${lang}/ourservices` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}
               `}
                            >
                                <Link href={`${localActive === 'en_global' ? '/ourservices' : `/${lang}/ourservices`}`} prefetch>{navData.ourServices}</Link>
                            </li>
                        </ul>


                        {sidebar ? (
                            <span
                                className="block md:hidden mt-0 w-[4vw]"
                                id="close-sidebar"
                                onClick={() => handleToggle()}
                            >
                                <FaBars className="text-black" />
                            </span>
                        ) : (
                            <span
                                className="block md:hidden mt-0 w-[6.3vw]  sm:w-[4vw]"
                                id="open-sidebar"
                                onClick={() => handleToggle()}
                            >
                                <RxCross1 className="text-[#000] text-semibold" />
                            </span>
                        )}

                        <div
                            className={`${(currentLanguage?.value === 'mm') ?
                                'pl-[2vw] md:pl-0'
                                :
                                'pl-[2vw]'
                                }`}
                        >
                            <a href="/" className="">
                                <Image
                                    src={freshMoeLogo}
                                    alt=""
                                    className=
                                    {`w-[100px] sm:w-[85px] md:w-[90px] lg:w-[8vw] xl:w-[6.5vw] h-auto md:ml-0`}
                                />
                            </a>
                        </div>
                        <div className='ml-auto lg:ml-0' onClick={() => { handleOpen }}>
                            {/* Desktop , tablet and mobile*/}
                            <button
                                className={`relative px-0 xl:pl-1 rounded-xl text-sm font-normal flex justify-between items-center`}
                                id="locale-button"
                                // onClick={handleOpen}
                                onClick={handleUpperMenuToggle}
                            >
                                <span className="flex items-center space-x-2">
                                    <div>
                                        {currentCountry?.value !== 'global' ? (
                                            <CiGlobe
                                                className={`${currentCountry?.value === 'global' ?
                                                    'w-[4vw] lg:w-[25px] h-auto lg:left-[-20px] xl:left-[-15px] mt-[1px] md:mt-0 rounded-3xl globe text-[#5B5B5B]' :
                                                    'w-[25px] h-auto mt-[1px] md:mt-0 rounded-3xl globe text-[#5B5B5B]'
                                                    }`}
                                            />
                                        ) : (
                                            <Flag code={selectedCountry?.flag} className="w-[25px] lg:w-[22px] h-auto globe text-[#5B5B5B]" />

                                        )}
                                    </div>
                                    <span className={`'text-[1vw] xl:text-[0.8vw] nav-mm pt-1 hidden lg:block`}>
                                        {selectedCountry?.label}
                                    </span>

                                    <span className={`${(currentCountry?.label === 'Myanmar') ?
                                        'lg:pl-[13px] xl:pl-[8px] 2xl:pl-[25px]' :
                                        (currentCountry?.label === 'Thailand') ?
                                            'lg:pl-[10px] xl:pl-[15px]' :
                                            'p-0'} 
                             hidden lg:block`}>|</span>
                                    <PiTranslate className="w-[22px] h-auto rounded-3xl globe text-[#5B5B5B] hidden lg:block" />

                                    <span className={`
                            text-base nav-mm pt-1`}>
                                        {getLanguageName(`${selectedLanguage}`)}
                                    </span>
                                    {!upperMenu ? (
                                        <MdOutlineKeyboardArrowUp className="md:w-[30px] lg:w-[25px] h-auto lg:pt-[4px] xl:pt-[2px] " />
                                    ) : (
                                        <MdOutlineKeyboardArrowDown className="md:w-[30px] lg:w-[25px] h-auto lg:pt-[4px] xl:pt-[2px] " />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- start mobile sidebar --> */}
            <div
                className="z-30 fixed h-full left-0 top-[105px] md:top-[111px] lg:top-[115px] xl:top-[119px] 2xl:top-[130px]  invisible transition-all duration-500 bg-[#000] bg-opacity-20"
                id="sidebar-wrapper"
            >
                <div
                    className="fixed h-full w-full lg:w-[600px] bg-[#fff] top-[105px] md:top-[111px] lg:top-[115px] xl:top-[119px] 2xl:top-[130px] -left-80 flex flex-col transition-all duration-500"
                    id="sidebar"
                >
                    <div className="text-[#000] pl-6 pt-12">
                        <div className="ml-4 mt-1">
                            <Link href={`${localActive === 'en_global' ? '/' : `/${lang}`}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
                  ${(pathname === '/' && localActive === 'en_global') || (pathname === `/${lang}` && localActive !== 'en_global') || (pathname === `/${lang}` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}
                  `}
                                onClick={closeAllMenu}
                            >
                                {navData.home}
                            </Link>
                        </div>
                        <div className="ml-4 mt-8">
                            <Link href={`${localActive === 'en_global' ? '/aboutus' : `/${lang}/aboutus`}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
                ${(pathname === '/aboutus' && localActive === 'en_global') || (pathname === `/${lang}/aboutus` && localActive !== 'en_global') || (pathname === `/${lang}/aboutus` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}                    `}
                            >
                                {navData.aboutUs}
                            </Link>
                        </div>
                        <div className="ml-4 mt-8">
                            <Link href={`${localActive === 'en_global' ? '/ourservices' : `/${lang}/ourservices`}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
                    ${(pathname === '/ourservices' && localActive === 'en_global') || (pathname === `/${lang}/ourservices` && localActive !== 'en_global') || (pathname === `/${lang}/ourservices` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}
                  `}
                            >
                                {navData.ourServices}
                            </Link>
                        </div>
                        <div className="ml-4 mt-8">
                            <Link href={`${localActive === 'en_global' ? '/profile' : `/${lang}/profile`}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
                ${(pathname === '/profile' && localActive === 'en_global') || (pathname === `/${lang}/profile` && localActive !== 'en_global') || (pathname === `/${lang}/profile` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}                  `}
                            >
                                {navData.profile}
                            </Link>
                        </div>
                        <div className="ml-4 mt-8">
                            <Link href={`${localActive === 'en_global' ? '/contact' : `/${lang}/contact`}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
              ${(pathname === '/contact' && localActive === 'en_global') || (pathname === `/${lang}/contact` && localActive !== 'en_global') || (pathname === `/${lang}/contact` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}                  `}
                            >
                                {navData.contact}
                            </Link>
                        </div>
                        <div className="ml-4 mt-8">
                            <Link href={`${baseUrl}`} prefetch
                                className={`flex flex-start font-bold text-lg hover:text-[#ed1c24] text-poppins 
                ${(pathname === '/download' && localActive === 'en_global') || (pathname === `/${lang}/download` && localActive !== 'en_global') || (pathname === `/${lang}/download` && localActive === 'en_global') ? 'text-[#ED1C24]' : ''}                  `}
                            >
                                {navData.download}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end mobile sidebar --> */}
            {/* start language menu */}
            <div
                className="z-30 fixed  h-full left-0 top-[138px] lg:top-[115px] xl:top-[120px] 2xl:top-[130px] invisible  transition-all duration-500 bg-[#000] bg-opacity-20"
                id="upper-menu-wrapper"
            >
                <div
                    className="z-30 fixed h-[88dvh] lg:h-[88dvh] w-full lg:w-[600px] bg-[#fff] top-[100px] md:top-[106px] xl:top-[111px] 2xl:top-[130px] right-0 flex flex-col transition-all duration-500"
                    id="upper-menu"
                >
                    <div className="container mx-auto flex flex-col gap-6 lg:gap-0 lg:flex-row w-full items-center py-[0.8rem] max-w-[1790px] px-[2rem] mt-10">
                        <div className="pl-[1rem] w-full lg:w-[50%]">
                            <label htmlFor="country" className="block text-lg font-semibold text-[#000] mb-2">
                                Select Your Country
                            </label>
                            <CCountrySelect defaultValue='global' onValueChange={handleChangeCountry} continents={countryOptions} placeholder="Select Your Country" />
                        </div>

                        <div className="pl-[1rem] w-full lg:w-[50%]">
                            <label htmlFor="country" className="block text-lg font-semibold text-[#000] mb-2">
                                Choose Language
                            </label>
                            <CLanguageSelect items={selectedCountry.languages} placeholder='Select Your Language' onValueChange={setSelectedLanguage} defaultValue='en' />
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full pl-[16px] md:pl-0 py-4 flex justify-center items-center">
                        <button
                            className=" bg-[#5BBA47] text-white text-sm py-[0.8rem] px-8 md:px-16 lg:px-36 rounded-xl w-[85%] md:w-auto flex justify-center items-center hover:bg-[#54b342] focus:bg-[#54b342] mb-6"
                            onClick={handleConfirmChangeLanguage}
                        >
                            Confirm
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;