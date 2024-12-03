import freshMoeLogo from '@/public/images/freshmoeLogo.png'
import underconstructionGif from '@/public/images/under_construction.gif'
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Maintain Page',
    description: 'The page for maintain page.',
};

const MaintainPage = () => {
    return (
        <div className="container h-[100vh] w-full mx-auto">
            <div className='flex justify-center flex-col items-center h-full'>
                <Image src={freshMoeLogo} alt="logo" className="w-[200px]" />
                <Image src={underconstructionGif} alt="maintenance" className="responsive-img-2" />
                <div className="container-fluid text-center" id="maintenance_footer">
                    <div className="footer_texts">
                        <p className="font-semibold text-xl uppercase">Our website is under maintenance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintainPage