'use client'

import Image from "next/image"
import { useState } from "react";
import playStoreIcon from '@/public/images/download/play_store.png'
import appStoreIcon from '@/public/images/download/app_store.png'
import huaweiStoreIcon from '@/public/images/download/huawei_store.png'
import smallDirectIcon from '@/public/images/download/small_download.png'
import { downloadApp } from '@/services/page/handle-download-app';

const DownloadHandler = ({ downloadApps }: { downloadApps: any }) => {
    const [downloadUrl, setDownloadUrl] = useState('')

    const handleDownloadChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setDownloadUrl(selectedValue)
    };

    const handleDownload = async (id: any) => {
        // alert(id)
        var downloadId = '';
        if (downloadUrl) {
            downloadId = downloadUrl
        } else {
            downloadId = id
        }
        // alert(downloadId)
        try {
            const response = await downloadApp(downloadId)
            if (response.data.status == 422) {
                alert("error")
            } else {
                setDownloadUrl(response.data.data.appUrl)
                const link = document.createElement('a');
                link.href = `${response.data.data.appUrl}`;
                link.setAttribute('download', 'retail.apk');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            {downloadApps?.length == 0 ?
                (
                    <div className="flex justify-center items-center h-auto my-10 text-[#5BBA47] font-semibold text-sm md:text-md lg:text-xl">Nothing...</div>
                )
                :
                (
                    <>
                        <div className="contact-section flex flex-col px-[2rem] md:px-[4rem] lg:px-[5rem] max-w-[110rem] mx-auto py-[3.5rem]">
                            <div className="hidden lg:flex justify-between font-bold mb-4">
                                <div className="w-full text-start  ">
                                    <h1 className='text-[0.75vw] lg:text-[1.3vw] xl:text-[1vw]'>Our Apps</h1>

                                </div>
                                <div className="w-full">
                                    <h1 className='text-[0.75vw] lg:text-[1.3vw] xl:text-[1vw] pl-[2px]'>Download Section</h1>

                                </div>

                                <div className="w-full">
                                    <h1 className='text-[0.75vw] lg:text-[1.3vw] xl:text-[1vw] pl-[4vw] xl:pl-[8vw]  2xl:pl-[11.7vw]'>Version</h1>

                                </div>
                            </div>
                            <div className="max-h-max-content overflow-hidden  rounded-2xl flex flex-col gap-6">
                                {downloadApps.map((app: any) => (

                                    <div className="flex flex-col lg:flex-row items-center justify-between p-4 bg-white" key={app.id}>

                                        <div className="flex flex-row font-bold text-xl w-full">
                                            <Image
                                                src={app.app_image}
                                                unoptimized
                                                alt="bg"
                                                className="w-[60px] h-auto object-cover filter object-center transition duration-200"
                                            />
                                            <div className="pl-4 pt-1 flex-grow text-base lg:text-sm xl:text-[16px]">
                                                <h1 className="font-bold">{app.app_name}</h1>
                                                <p className="text-slate-400">Size : {app.file_size}</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:hidden justify-start w-full my-5">
                                            <h1 className='font-semibold'>Download Section</h1>
                                        </div>
                                        <div className="self-center flex gap-x-3 w-full lg:my-0">
                                            <button className='max-w-max'>
                                                <Image
                                                    src={appStoreIcon}
                                                    unoptimized
                                                    alt="download icon"
                                                    className="w-auto lg:w-[120px] h-auto object-cover filter object-center transition duration-200"
                                                />
                                            </button>
                                            <button className='max-w-max'>
                                                <Image
                                                    src={playStoreIcon}
                                                    unoptimized
                                                    alt="download icon"
                                                    className="w-auto lg:w-[120px] h-auto object-cover filter object-center transition duration-200"
                                                />
                                            </button>
                                            <button className='max-w-max'>
                                                <Image
                                                    src={huaweiStoreIcon}
                                                    unoptimized
                                                    alt="download icon"
                                                    className="w-auto lg:w-[120px] h-auto object-cover filter object-center transition duration-200"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex lg:hidden justify-start w-full my-5">
                                            <h1 className='font-semibold'>Version</h1>
                                        </div>
                                        <div className="self-center flex flex-col lg:flex-row gap-x-3 w-full justify-start lg:justify-end">
                                            <div className="relative w-full md:w-[50%] lg:w-[120px] xl:w-[150px] mb-5 lg:mb-0">
                                                <select onChange={handleDownloadChange} className="block appearance-none w-full text-center lg:text-[12px] xl:text-[14px] font-semibold bg-white border border-gray-600 hover:border-gray-500 px-2 py-[0.8rem] lg:py-[0.5rem] xl:py-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    {app.older_versions.map((old: any, index: number) => (
                                                        <option key={index} value={old.id}>
                                                            {app.version_number === old?.version_number ? 'Latest' : old.version_number}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="self-start w-full md:w-[50%] lg:w-auto lg:self-center">
                                                <button type="button" onClick={() => handleDownload(app.key)} className='flex justify-center w-full lg:w-[93px] xl:w-[125px] bg-black text-white lg:py-[5px] lg:px-[16px] xl:px-[20px] py-[8px] rounded-lg'>
                                                    <div className="pr-[5px]">
                                                        <h3 className="flex flex-start text-[10px] lg:text-[6px] xl:text-[10px]">Direct</h3>
                                                        <h1 className="text-[12px] lg:text-[8px] xl:text-[12px]">Download</h1>
                                                    </div>
                                                    <div className="self-center">
                                                        <Image
                                                            src={smallDirectIcon}
                                                            unoptimized
                                                            alt="bg"
                                                            className="w-full h-auto object-cover filter object-center transition duration-200"
                                                        />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default DownloadHandler