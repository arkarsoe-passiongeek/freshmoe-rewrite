import React, { useState, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface ChildProps {
    onClickParent: () => void;

}

const ChooseLang: React.FC<ChildProps> = ({ onClickParent }) => {

    const pathname = usePathname()
    const router = useRouter()
    const [lang, setLang] = useState<string>('mm')
    const [ipLanguage, setIpLanguage] = useState('')
    const [custPathName, setCustPathname] = useState('')

    // useEffect(() => {
    //   const lang = pathname.split('/')[1]
    //   setLang(lang)
    //   if (document.body.style.overflowY === '' || document.body.style.overflowY === 'auto' ||  document.body.style.overflowY === 'visible') {

    //     document.documentElement.style.overflowY = 'hidden'; 
    //     // document.body.style.overflowY = 'hidden'; 
    //   }

    //   setCustPathname(pathname.split('/')[1])


    // },[pathname])

    useEffect(() => {
        const lang = pathname.split('/')[1];
        setLang(lang);

        if (
            document.body.style.overflowY === '' ||
            document.body.style.overflowY === 'auto' ||
            document.body.style.overflowY === 'visible'
        ) {
            document.documentElement.style.overflowY = 'hidden';

            // Prevent scrolling by disabling touchmove
            const preventScroll = (e: any) => e.preventDefault();
            document.body.addEventListener('touchmove', preventScroll, { passive: false });
            setCustPathname(pathname.split('/')[1]);
            return () => {
                document.body.removeEventListener('touchmove', preventScroll);
                document.documentElement.style.overflowY = ''; // Reset style on cleanup
            };
        }

        setCustPathname(pathname.split('/')[1]);

    }, [pathname]);


    const handleClickChild = () => {
        console.log('Clicked child!');
        document.documentElement.style.overflowY = 'visible';
        document.body.style.overflowY = 'visible';
        onClickParent();
    }

    //   const handleChangeLanguage = async (value: string) => {

    //     console.log("Path Name of lang = "+pathname.length)
    //     alert(value+lang+pathname.length)
    //     if (pathname.length !== 3) {
    //       alert("dfdfdfd")
    //       let newPathName = pathname;
    //       console.log("New PathName : "+newPathName)
    //       alert(newPathName+"--"+lang);
    //       if (lang === 'en') {
    //         // alert("ddd")
    //         switch (pathname) {
    //           case 'mm':
    //             newPathName = pathname.replace('/en/', '/mm/');
    //             break;
    //           case 'th':
    //             newPathName = pathname.replace('/en/', '/th/');
    //             break;
    //             case 'en':
    //               newPathName = pathname.replace('/mm/', '/en/');
    //               break;
    //           default:
    //             newPathName = pathname.replace('/en/', '/mm/');
    //             break;
    //         }
    //       } else if (lang === 'mm') {
    //         console.log("New PathName MM : "+newPathName)
    //         newPathName = pathname.replace('/mm/', '/en/');
    //       } else if (lang === 'th') {
    //         console.log("New PathName TH : "+newPathName)
    //         newPathName = pathname.replace('/th/', '/en/');
    //       }
    //       router.push(newPathName);
    //     } else {
    // alert("ooo")
    //       let newPath = '/en';
    //       if (lang === 'mm') {
    //         switch (value) {
    //           case 'mm':
    //             newPath = '/mm';
    //             break;
    //             case 'en':
    //             newPath = '/en';
    //             break;
    //           case 'th':
    //             newPath = '/th';
    //             break;
    //           default:
    //             newPath = '/sg';
    //             break;
    //         }
    //       }else if(lang == 'en'){
    //         switch (value) {
    //           case 'mm':
    //             newPath = '/mm';
    //             break;
    //             case 'en':
    //             newPath = '/en';
    //             break;
    //           case 'th':
    //             newPath = '/th';
    //             break;
    //           default:
    //             newPath = '/sg';
    //             break;
    //         }
    //       }
    //       handleClickChild
    //       router.push(newPath);
    //       // alert(newPath)
    //     }
    //   };


    const handleChangeLanguage = async (value: string) => {
        console.log("Path Name of lang = " + pathname.length)
        // if (pathname.length !== 3) {
        //   alert("ooo")
        //   let newPathName = pathname;
        //   console.log("New PathName : "+newPathName)
        //   if (lang === 'en') {
        //     switch (ipLanguage) {
        //       case 'mm':
        //         newPathName = pathname.replace('/en/', '/mm/');
        //         break;
        //       case 'th':
        //         newPathName = pathname.replace('/en/', '/th/');
        //         break;
        //       default:
        //         newPathName = pathname.replace('/en/', '/sg/');
        //         break;
        //     }
        //   } else if (lang === 'mm') {
        //     console.log("New PathName MM : "+newPathName)
        //     newPathName = pathname.replace('/mm/', '/en/');
        //   } else if (lang === 'th') {
        //     console.log("New PathName TH : "+newPathName)
        //     newPathName = pathname.replace('/th/', '/en/');
        //   }
        //   router.push(newPathName);
        // } else {

        let newPath = value;
        // alert(value)
        if (custPathName === 'en_mm') {
            switch (value) {
                case 'mm_mm':
                    newPath = '/mm_mm';
                    break;
                case 'en_mm':
                    newPath = '/en_mm';
                    break;
                default:
                    newPath = '/sg';
                    break;
            }
        }
        // alert(newPath)
        router.push(newPath);
        // }
    };
    return (
        <div className='fixed inset-0  flex justify-center items-center z-50 bg-[#000] bg-opacity-[0.2] overflow-y-hidden'>
            <div className="bg-white w-full max-w-[21.7rem] md:max-w-md lg:max-w-lg pb-7 pt-4 px-7 rounded-lg shadow-lg relative z-10 ">
                <div className="w-full">
                    <h1 className='font-bold text-center mb-6 text-lg'>Choose Language</h1>
                    <RxCross2 size={20} className='absolute top-5 right-7 cursor-pointer' onClick={handleClickChild} />
                    <div className="flex justify-between gap-4 w-full font-semibold text-[14px] ">
                        <button className={`border border-gray-300 rounded-lg w-full h-auto py-2 hover:bg-gray-200 ${custPathName == 'mm_mm' ? 'bg-gray-200' : ''}`} onClick={() => handleChangeLanguage('mm_mm')}>
                            မြန်မာ
                        </button>
                        <button className={`border border-gray-300 rounded-lg w-full h-auto py-2 hover:bg-gray-200 ${custPathName == 'en_mm' ? 'bg-gray-200' : ''}`} onClick={() => handleChangeLanguage('en_mm')}>
                            English
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChooseLang
