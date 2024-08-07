import {usePathname} from "next/navigation";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import {MegaMenuInterface} from "@/src/app/[locale]/components/interfaces";
import {TopicDisplay} from "@/src/app/[locale]/components/util";
import {useTranslations} from "next-intl";

export const MegaMenuAnalytics = ({ name, isMobile }: MegaMenuInterface) => {
    const t = useTranslations('Navigation')
    const links = [
        {href: '/performance-indicators', label: `${t('Performance_Indicators')}`},
        {href: '/regional-trends', label: `${t('Regional_Trends')}`},
        {href: '/training', label: `${t('Training')}`},
        {href: '/governance', label: `${t('Governance')}`},
    ]
    const pathname = usePathname()
    return (
        <>
            <Menu>
                <MenuButton className="data-[active]:bg-blue-200 focus:outline-none">
                    <span className={'flex gap-1 items-center cursor-pointer'}>
                        {name}
                        {isMobile? <IoIosArrowForward width={10}/>:<IoIosArrowDown width={10}/>}
                    </span>
                </MenuButton>
                <MenuItems anchor="bottom" className="w-full mt-6 flex justify-center items-center">
                    <div className="menu-background shadow-xl flex container mx-auto p-10">
                        <div className={`flex gap-4 justify-between`}>
                            <div className={`w-6/12 flex justify-between`}>
                                <p className={`font-bold color-1`}>{t('Explore_TF_Analytics')}</p>
                                <div className={`flex flex-col border-r-gray-200 gap-7`}>
                                    {links.map((link) => (
                                        <MenuItem key={link.href} >
                                            <a className="flex data-[focus]:bg-blue-100" href={link.href}>{link.label}</a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </div>

                            <div className={`border-x border-x-gray-200 px-5 w-4/12`}>
                                <TopicDisplay
                                    image={'/nav/image1.png'}
                                    topic={'Search: UN Global Survey on Digital and Sustainable Trade Facilitation 2021'}
                                    text={'Use the search feature to get filtered data on relevant topics.'}
                                    buttonText={t('Explore_Knowledge_Database')}/>
                            </div>
                            <div className={`w-4/12 px-5`}>
                                <TopicDisplay
                                    image={'/nav/image2.png'}
                                    topic={'Take the MM Self-Assessment Questionnaire'}
                                    text={'Fill in the quick self assessment form and receive an instant report and action plan.'}
                                    buttonText={t('Take_Questionnaire')}/>
                            </div>


                        </div>

                    </div>
                </MenuItems>
            </Menu>
        </>
    )

}

export const MegaMenuAnalyticsMobile = ({ setIsAnalytics }: any) => {
    const t = useTranslations('Navigation')
    const links = [
        {href: '/performance-indicators', label: `${t('Performance_Indicators')}`},
        {href: '/regional-trends', label: `${t('Regional_Trends')}`},
        {href: '/training', label: `${t('Training')}`},
        {href: '/governance', label: `${t('Governance')}`},
    ]
    const pathname = usePathname()
    return (
        <>
            <Menu>
                <div className={`flex gap-2 justify-start items-center self-start mb-8`}>
                    <IoArrowBack className={`text-gray-600 text-lg`} onClick={()=>setIsAnalytics(false)}/>
                    <p className={`font-bold color-1`}>Explore Trade Facilitation Analytics</p>
                </div>
                <div className="w-full mb-8 color-1 flex justify-center items-center">
                    <div className={`flex flex-col gap-4 justify-between`}>
                        <div className={`flex flex-col border-r-gray-200 gap-7`}>
                            {links.map((link) => (
                                <MenuItem key={link.href} >
                                    <a className="flex data-[focus]:bg-blue-100" href={link.href}>{link.label}</a>
                                </MenuItem>
                            ))}
                        </div>

                        <TopicDisplay
                            image={'/nav/image1.png'}
                            topic={'Search: UN Global Survey on Digital and Sustainable Trade Facilitation 2021'}
                            text={'Use the search feature to get filtered data on relevant topics.'}
                            buttonText={'Explore Knowledge Database'}/>
                    </div>
                </div>

            </Menu>
        </>
    )

}

export const MegaMenuCountries = ({ name, isMobile }: MegaMenuInterface) => {
    const t = useTranslations('')
    const links = [
        {href: '/benin', label: `${t('Benin')}`, code: 'BJ', flag: '/flags/BJ.png'},
        {href: '/burkina-faso', label: `${t('Burkina_Faso')}`, code: 'BF', flag: '/flags/BF.png'},
        {href: '/cabo-verde', label: `${t('Cape_Verde')}`, code: 'CV', flag: '/flags/CV.png'},
        {href: '/cote-d-ivoire', label: `${t('Ivory_Coast')}`, code: 'CI', flag: '/flags/CI.png'},
        {href: '/gambia', label: `${t('Gambia')}`, code: 'GM', flag: '/flags/GM.png'},
        {href: '/ghana', label: `${t('Ghana')}`, code: 'GH', flag: '/flags/GH.png'},
        {href: '/guinea', label: `${t('Guinea')}`, code: 'GN', flag: '/flags/GN.png'},
        {href: '/guinea-bissau', label: `${t('Guinea_Bissau')}`, code: 'GW', flag: '/flags/GW.png'},
        {href: '/liberia', label: `${t('Liberia')}`, code: 'LR', flag: '/flags/LR.png'},
        {href: '/mali', label: `${t('Mali')}`, code: 'ML', flag: '/flags/ML.png'},
        {href: '/niger', label: `${t('Niger')}`, code: 'NE', flag: '/flags/NE.png'},
        {href: '/nigeria', label: `${t('Nigeria')}`, code: 'NG', flag: '/flags/NG.png'},
        {href: '/senegal', label: `${t('Senegal')}`, code: 'SN', flag: '/flags/SN.png'},
        {href: '/sierra-leone', label: `${t('Sierra_Leone')}`, code: 'SL', flag: '/flags/SL.png'},
        {href: '/togo', label: `${t('Togo')}`, code: 'TG', flag: '/flags/TG.png'}
    ]

    return (
        <>
            <Menu>
                <MenuButton className="data-[active]:bg-blue-200 focus:outline-none">
                    <span className={'flex gap-1 items-center cursor-pointer'}>
                        {name}
                        {isMobile? <IoIosArrowForward width={10}/>:<IoIosArrowDown width={10}/>}
                    </span>
                </MenuButton>
                <MenuItems anchor="bottom" className="w-full mt-6 flex justify-center items-center">
                    <div className="menu-background shadow-xl flex container mx-auto p-10">
                        <div className={`flex gap-4 justify-evenly`}>
                            <div className={`w-8/12 flex px-5`}>
                                <p className={`font-bold color-1 whitespace-nowrap mr-7`}>{t('Explore')}</p>
                                <div className={`w-full flex flex-row justify-evenly border-r-gray-500`}>
                                    <div className="flex flex-col gap-7">
                                        {links.slice(0, 5).map((link) => (
                                            <MenuItem key={link.href} >
                                                <a href={link.href} className={`gap-3 data-[focus]:bg-blue-100 flex items-center truncate my-1 whitespace-nowrap`}>
                                                    <Image src={link.flag} alt={link.label} width={20} height={10} className={`self-center`}/>
                                                    {link.label}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                    <div className="flex flex-col border-x border-x-gray-100 px-5 gap-7">
                                        {links.slice(5, 10).map((link) => (
                                            <MenuItem key={link.href} >
                                                <a href={link.href} className={`gap-3 data-[focus]:bg-blue-100 flex items-center truncate my-1 whitespace-nowrap`}>
                                                    <Image src={link.flag} alt={link.label} width={20} height={10} className={`self-center`}/>
                                                    {link.label}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                    <div className="flex flex-col border-r border-r-gray-100 px-5 gap-7">
                                        {links.slice(10, 15).map((link) => (
                                            <MenuItem key={link.href} >
                                                <a href={link.href} className={`gap-3 data-[focus]:bg-blue-100 flex items-center truncate my-1 whitespace-nowrap`}>
                                                    <Image src={link.flag} alt={link.label} width={20} height={10} className={`self-center`}/>
                                                    {link.label}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={`w-4/12`}>
                                <TopicDisplay
                                    image={'/nav/image1.png'}
                                    topic={'Search: UN Global Survey on Digital and Sustainable Trade Facilitation 2021'}
                                    text={'Use the search feature to get filtered data on relevant topics.'}
                                    buttonText={'Explore Knowledge Database'}/>
                            </div>
                        </div>

                    </div>
                </MenuItems>
            </Menu>
        </>
    )

}
export const MegaMenuCountriesMobile = ({setIsCountries}:any) => {
    const links = [
        {href: '/benin', label: 'Benin', code: 'BJ', flag: '/flags/BJ.png'},
        {href: '/burkina-faso', label: 'Burkina Faso', code: 'BF', flag: '/flags/BF.png'},
        {href: '/cabo-verde', label: 'Cabo Verde', code: 'CV', flag: '/flags/CV.png'},
        {href: '/cote-d-ivoire', label: 'Cote Divoire', code: 'CI', flag: '/flags/CI.png'},
        {href: '/gambia', label: 'Gambia', code: 'GM', flag: '/flags/GM.png'},
        {href: '/ghana', label: 'Ghana', code: 'GH', flag: '/flags/GH.png'},
        {href: '/guinea', label: 'Guinea', code: 'GN', flag: '/flags/GN.png'},
        {href: '/guinea-bissau', label: 'Guinea-Bissau', code: 'GW', flag: '/flags/GW.png'},
        {href: '/liberia', label: 'Liberia', code: 'LR', flag: '/flags/LR.png'},
        {href: '/mali', label: 'Mali', code: 'ML', flag: '/flags/ML.png'},
        {href: '/niger', label: 'Niger', code: 'NE', flag: '/flags/NE.png'},
        {href: '/nigeria', label: 'Nigeria', code: 'NG', flag: '/flags/NG.png'},
        {href: '/senegal', label: 'Senegal', code: 'SN', flag: '/flags/SN.png'},
        {href: '/sierra-leone', label: 'Sierra-Leone', code: 'SL', flag: '/flags/SL.png'},
        {href: '/togo', label: 'Togo', code: 'TG', flag: '/flags/TG.png'}
    ]

    return (
        <>
            <Menu >
            <div className={`flex gap-2 justify-start items-center self-start mb-8`}>
                <IoArrowBack className={`text-gray-600 text-lg`} onClick={()=>setIsCountries(false)}/>
                <p className={`font-bold color-1 whitespace-nowrap mr-7`}>Explore Country Pages</p>
            </div>
            <div className={`w-full color-1 flex flex-row justify-evenly mb-8`}>
                <div className="flex flex-col gap-7">
                    {links.slice(0, 8).map((link) => (
                        <MenuItem key={link.href} >
                            <a href={link.href} className={`gap-3 data-[focus]:bg-blue-100 flex items-center truncate my-1 whitespace-nowrap`}>
                                <Image src={link.flag} alt={link.label} width={20} height={10} className={`self-center`}/>
                                {link.label}
                            </a>
                        </MenuItem>
                    ))}
                </div>
                <div className="flex flex-col px-5 gap-7">
                    {links.slice(8, 15).map((link) => (
                        <MenuItem key={link.href} >
                            <a href={link.href} className={`gap-3 data-[focus]:bg-blue-100 flex items-center truncate my-1 whitespace-nowrap`}>
                                <Image src={link.flag} alt={link.label} width={20} height={10} className={`self-center`}/>
                                {link.label}
                            </a>
                        </MenuItem>
                    ))}
                </div>
            </div>
            </Menu>
        </>
    )

}
