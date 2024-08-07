import Image from "next/image";
import logo from '@/public/img/nav/logo.png';
import logo_w from '@/public/img/nav/logo-w.png';
import {
    ColorCardInterface,
    CustomButtonInterface, FooterLinkInterface, GraphCardInterface,
    LanguageInterface,
    LogoInterface, NavLinkInterface,
    SearchInterface
} from "../components/interfaces";
import React, {Fragment, useEffect, useState} from "react";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {GoArrowRight} from "react-icons/go";
import {Listbox, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {FiUserPlus} from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import {usePathname, useSelectedLayoutSegments} from "next/navigation";
import {useRouter} from "next/navigation";
import { useTheme } from 'next-themes'

export const LogoImage = ({alt, light}: LogoInterface) => {
    const { setTheme, resolvedTheme, themes, theme } = useTheme()
    return (
        <>
            {light ? <Image src={logo_w} alt={alt}/> : theme =='light' ? <Image src={logo_w} alt={alt}/> : !light ?<Image src={logo} alt={alt}/>:''}
        </>
    );
}

export const CustomSearch = ({placeholder, onClick}: SearchInterface) => {
    return (
        <form className="flex items-center h-8 bg-gray-200 rounded-full">
            <div className="relative w-full">
                <input type="text" id="simple-search"
                       className="bg-gray-200 text-gray-900 h-8 text-sm rounded-full block w-full p-2.5"
                       placeholder={placeholder}/>
            </div>
            <button type="submit" className="p-2.5 text-sm font-medium text-black">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </form>
    )
}

export const CustomButton = ({icon, text, onClick, reverse, border}: CustomButtonInterface) => {
    return (
        <button onClick={onClick}
                className={`flex self-start items-center h-8 
                ${border ? 'border-2 border-color-1 bg-opacity-0 color-1 hover:bg-color-1 hover:text-white' : 'button-color text-white hover:bg-white hover:text-color-1 hover:border-color-1  border-2 border-color-1'}  
                gap-2 rounded-full px-5 text-sm ${reverse ? 'flex-row-reverse' : ''}`}>
            {icon}
            <span className={`whitespace-nowrap`}>
                {text}
            </span>
        </button>
    );
}
export const CustomButton2 = ({icon, text, onClick, reverse, border}: CustomButtonInterface) => {
    return (
        <button onClick={onClick}
                className={`flex w-full justify-center items-center h-8 
                ${border ? 'border-2 border-color-1 bg-opacity-0 color-1 hover:bg-color-1 hover:text-white' : 'button-color text-white hover:bg-white hover:text-color-1 hover:border-color-1  border-2 border-color-1'}  
                gap-2 rounded-full px-5 text-sm ${reverse ? 'flex-row-reverse' : ''}`}>
            {icon}
            <span className={`whitespace-nowrap`}>
                {text}
            </span>
        </button>
    );
}

export const CustomButton3 = ({icon, text, onClick, reverse, border}: CustomButtonInterface) => {
    return (
        <button onClick={onClick}
                className={`flex self-start items-center h-10 backdrop-filter backdrop-blur-sm bg-white border border-color-1 bg-opacity-0 color-1 hover:bg-color-1 hover:text-white 
                gap-2 rounded-full px-5 ${reverse ? 'flex-row-reverse' : ''}`}>
            {icon}
            <span className={`whitespace-nowrap`}>
                {text}
            </span>
        </button>
    );
}

export const LoginButton = ({isMobile}:any) =>{
    return(
        <>
            {isMobile ?
                <CustomButton2 icon={<FiUserPlus width={`26px`} />} text={'Log in'} reverse={false} onClick={''} />
                :
                <CustomButton icon={<FiUserPlus width={`26px`} />} text={'Log in'} reverse={false} onClick={''} />
            }
        </>
    )
}



export const TopicDisplay = ({image, topic, text, buttonText}: any) => {
    return (
        <div className={`flex flex-col gap-2`}>
            <div className={`h-36 w-full rounded-xl`} style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`
            }}></div>
            <p className={`font-bold color-1`}>{topic}</p>
            <p className={`text-xs`}>{text}</p>
            <CustomButton text={buttonText} border={true} icon={<GoArrowRight width={10}/>} reverse={true}/>
        </div>
    )
}


export const Language = ({isMobile}:any) => {
    const languages: LanguageInterface[] = [
        { country: 'English', code: 'en', flag: '/flags/uk.png'},
        { country: 'Français', code: 'fr', flag: '/flags/france.png'},
        { country: 'Português', code: 'pt', flag: '/flags/portugal.png'},
    ];
    const pathname = usePathname()
    const urlSegments = useSelectedLayoutSegments()
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageInterface>(languages[0]);
    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            const parsedLanguage = JSON.parse(savedLanguage);
            setSelectedLanguage(parsedLanguage);
        }
    }, []);

    const handleLanguageChange = async (language: LanguageInterface) => {
        setSelectedLanguage(language);
        localStorage.setItem('selectedLanguage', JSON.stringify(language));
        window.location.href = `/${language.code}/${urlSegments.join('/')}`;
    };

    return (
        <div className={`flex ${isMobile && 'w-full'}`}>
            <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
                <div className="relative mt-1 w-full">
                    <Listbox.Button
                        className="relative w-full flex justify-between items-center cursor-pointer rounded-full bg-button py-2 pl-3 pr-3 text-left focus:outline-none text-sm">
                    <span className="block truncate">
                        <span className={`flex gap-3 text-gray-600`}>
                            <Image src={selectedLanguage.flag} alt={selectedLanguage.country} width={20} height={20}/>
                            {!isMobile && selectedLanguage.country}
                        </span>
                    </span>
                        {isMobile && selectedLanguage.country}

                        <span className="pointer-events-none items-center pl-2 text-gray-600">
                            {isMobile? <IoIosArrowForward width={10}/>:<IoIosArrowDown width={10}/>}
                        </span>
                    </Listbox.Button>
                    <Listbox.Options
                        className="absolute mt-1 w-full py-1 overflow-auto bg-gray-200 rounded-xl shadow-lg max-h-60 focus:outline-none text-sm">
                        {languages.map((language) => (
                            <Listbox.Option
                                    key={language.code}
                                    value={language}
                                    className={({active}) =>
                                        `cursor-default select-none relative py-2 px-4 ${
                                            active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'
                                        }`
                                    }
                                >
                                    {({selected}) => (
                                        <>
                                            <span
                                                className={`block ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}

                                            >
                                        <span className={`flex gap-3`}>
                                            <Image src={language.flag} alt={language.code} width={20} height={20} className={`self-start`}/>
                                            {language.country}

                                        </span>
                                            </span>

                                        </>
                                    )}
                                </Listbox.Option>

                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
};


export const Line = () => {
    return(
        <div className="multi-color-line flex w-full">
            <div className="yellow w-2/12"></div>
            <div className="orange w-4/12"></div>
            <div className="green w-6/12"></div>
        </div>
    )
}


export const NavLink = ({ name, link, isMobile, external, isFooter, icon }: NavLinkInterface) => {
    const router = useRouter();
    const pathname = usePathname();

    // Extract the locale from the pathname (assuming the locale is the first part of the path)
    const locale = pathname.split('/')[1] || 'en'; // Default to 'en' if no locale is found


    const href = `/${locale}${link}`;

    return (
        <Link href={href} target={external ? "_blank" : ""}>
            <div className={`flex items-center gap-2 text-opacity-70 hover:text-opacity-100 ${isFooter?'text-stone-50':'link-color'} `}>
                {icon}
                {name}
            </div>
        </Link>
    );
};


export const FooterLink = ({ name, links, isMobile }: FooterLinkInterface) => {
    return(
        <div className={`flex flex-col gap-3 md:gap-7`}>
            <p className={`text-xl`}>{name}</p>
            {links.map((item) => {
                return (
                    <div
                        key={item.name}
                        className={`flex cursor-pointer relative hover:text-main`}
                    >
                        <NavLink icon={item.icon} name={item.name} link={item.href} isMobile={isMobile} external={item.external} isFooter={true}/>
                    </div>
                );
            })}
        </div>
    )
}

export const ColorCards = ({color, text, icon, number1, number2, textColor}: ColorCardInterface) => {
    return(
        <div className={`flex flex-col w-full justify-between items-center ${color}  gap-2  rounded-2xl`} style={{color:`#${textColor}`}}>
            <div>
                <div className={`flex text-5xl md:text-6xl px-3 pt-3 md:pt-6 self-start`}>
                    <p className={`font-bold`}>{number1}</p>
                    <p>{number2}</p>
                </div>
                <p className={`text-sm px-3 pt-3`}>{text}</p>
            </div>
            <div className={`flex justify-end w-full `}>
                <Image src={icon} alt={number1} width={120} height={120}/>
            </div>
        </div>
    )
}

export const GraphCard = ({mainText, graph}: GraphCardInterface) => {
    return(
        <div className={`flex flex-col w-full bg-gray-200 px-2 md:px-5  py-3 rounded-2xl`} >
            <div className={`flex justify-between text-gray-700 pb-2`}>
                <p className={`font-bold `}>{mainText}</p>
                <BsThreeDotsVertical className={`text-xl cursor-pointer`}/>
            </div>
            <div className={`flex overflow-auto justify-end w-full text-9xl p-5 bg-white rounded-2xl`}>
                {graph}
            </div>
        </div>
    )
}
