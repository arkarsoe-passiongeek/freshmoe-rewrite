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

    const handleChangeLanguage = async (value: string) => {

        let newPath = value;
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
        router.push(newPath);
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
