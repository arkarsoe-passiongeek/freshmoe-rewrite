'use client'
import Image from 'next/image'
import freshMoeLogo from '../../../public/images/freshmoeLogo.png'
import {
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowDown,
} from 'react-icons/md'
import { FaBars } from 'react-icons/fa6'
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react'
import { CiGlobe } from "react-icons/ci";
import { PiTranslate } from "react-icons/pi";
import Flag from 'react-world-flags';
import ChooseLang from '../modals/choose-lang'
import { CCountrySelect } from '../custom/c-country-select'
import { CLanguageSelect } from '../custom/c-language-select'
import { getLanguageName, LanguageCodes } from '@/lib/utils'
import { Link, usePathname, useRouter } from '@/i18n/routing'

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
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageCodes>(locale.split('_')[0] as LanguageCodes);
    const [currentCountry] = useState<any>(locale.split('_')[1])
    const [currentLanguage] = useState<any>({})

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

    useEffect(() => {
        console.log(locale)
        countryOptions.map(continent => {
            continent.countries.map(country => {
                if (country.value === locale.split('_')[1]) setSelectedCountry(country)
            })
        })[0]
    }, [])

    const handleToggle = () => {
        const sidebarElement = document.querySelector<HTMLDivElement>('#sidebar')
        const upperMenuElement = document.querySelector<HTMLDivElement>('#upper-menu')
        const upperMenuWrapper =
            document.querySelector<HTMLDivElement>('#upper-menu-wrapper')
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
                if (navbar) navbar.style.backgroundColor = '#fff';

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

                if (navbar && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
        let newPrefix: any = `${selectedLanguage}_${selectedCountry.value}`
        console.log(pathname)
        console.log(newPrefix)
        router.replace(pathname, { locale: newPrefix })
    }

    return (
        <>
            <div className='fixed w-full top-0 z-40'>
                <div className="bg-c-primary w-full p-[20px] brand-line-green"></div>
                <div className="bg-c-white w-full p-[1px] brand-line-white"></div>
                <div className="bg-c-secondary w-full p-[3.95px] brand-line-red"></div>
                <nav className="shadow-lg w-full flex lg:justify-between items-center transition" id="navbar">
                    {open ? <ChooseLang onClickParent={() => setOpen(false)} /> : ''}
                    <div className="container mx-auto flex lg:justify-between items-center py-[0.8rem]">
                        <ul className="font-bold hidden md:flex nav items-center" id="nav-item">
                            <li
                                className={`hover:text-c-primary font-bold cursor-pointer ${lang == 'en' ? 'px-3' : 'px-2'} py-3 text-[0.75vw]  ${pathname === `/${lang}` ? 'text-c-secondary' : ''
                                    } `}
                            >
                                {sidebar ? (
                                    <span
                                        className="mt-0"
                                        id="close-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <FaBars className="text-black lg:w-[25px] lg:h-[20px]" />
                                    </span>
                                ) : (
                                    <span
                                        className="mt-0"
                                        id="open-sidebar"
                                        onClick={() => handleToggle()}
                                    >
                                        <RxCross1 className="text-black lg:w-[25px] lg:h-[20px]" />
                                    </span>
                                )}
                            </li>
                            {
                                navList.map((each, index) => {
                                    if (index < 3) {
                                        return (
                                            <li
                                                key={each.url} className={`hover:text-c-primary font-semibold lg:text-base px-2 py-3 hidden lg:flex 
                  ${isNavActive(each.url) ? 'text-c-primary' : ''}
                  `}
                                            >
                                                <Link href={`${each.url}`} prefetch>{each.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        {sidebar ? (
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
                            className={`lg:flex-1 flex justify-center ${(currentLanguage?.value === 'mm') ?
                                'pl-[2vw] md:pl-0'
                                :
                                'pl-[2vw]'
                                }`}
                        >
                            <Link href="/" className="">
                                <Image
                                    src={freshMoeLogo}
                                    alt=""
                                    className=
                                    {`w-[70px] sm:w-[85px] md:w-[90px] lg:w-[140px] lg:h-[65px] h-auto md:ml-0`}
                                />
                            </Link>
                        </div>
                        <div className='flex-1 flex justify-end ml-auto lg:ml-0' onClick={() => { handleOpen }}>
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
                                            {selectedCountry.value == 'global' ? (
                                                <CiGlobe
                                                    className={`w-[15px] h-[15px] md:w-[30px] md:h-[30px] lg:w-[24px] lg:h-[24px] ${currentCountry == 'global' ?
                                                        'text-c-black' :
                                                        ''
                                                        }`}
                                                />
                                            ) : (
                                                <Flag code={selectedCountry?.flag} className="w-[25px] md:h-[30px] lg:w-[40px] lg:h-[40px]" />
                                            )}
                                        </div>
                                        <span className={`lg:text-base font-normal max-w-[60px] md:max-w-none text-ellipsis overflow-hidden text-nowrap`}>
                                            {selectedCountry?.label}
                                        </span>
                                    </div>
                                    <span className={`${(currentCountry == 'mm') ?
                                        'xl:pl-[8px] lg:pl-[25px]' :
                                        (currentCountry == 'th') ?
                                            'lg:pl-[10px] xl:pl-[15px]' :
                                            'p-0'} 
                            `}>|</span>
                                    <PiTranslate className="lg:w-[24px] lg:h-[24px] h-auto rounded-3xl globe text-c-black" />
                                    <span className={`
                            lg:text-base max-w-[60px] md:max-w-none text-ellipsis overflow-hidden text-nowrap`}>
                                        {getLanguageName(`${selectedLanguage}`)}
                                    </span>
                                    <div>
                                        {!upperMenu ? (
                                            <MdOutlineKeyboardArrowUp className="md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]" />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown className="md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]" />
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
                className="z-30 fixed h-full left-0 top-[105px] md:top-[111px] xl:top-[119px] lg:top-[130px]  invisible transition-all duration-500 bg-[#000] bg-opacity-20"
                id="sidebar-wrapper"
            >
                <div
                    className="fixed h-full w-full lg:w-[600px] bg-c-white top-[105px] md:top-[111px] xl:top-[119px] lg:top-[130px] -left-80 flex flex-col transition-all duration-500"
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
            </div>
            {/* <!-- end mobile sidebar --> */}

            {/* start language menu */}
            <div
                className="z-30 fixed top-0 h-full left-0 invisible transition-all duration-500 bg-[#000] bg-opacity-20"
                id="upper-menu-wrapper"
            >
                <div
                    className="z-30 fixed h-[100vh] w-full lg:w-[600px] bg-[#fff] right-0 flex flex-col transition-all duration-500"
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

                    <div className="absolute bottom-0 w-full py-4 flex justify-center items-center">
                        <button
                            className=" bg-c-primary text-white text-sm py-[0.8rem] rounded-[10px] w-[85%] lg:w-[500px] flex justify-center items-center hover:bg-c-primary focus:bg-c-primary mb-6"
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