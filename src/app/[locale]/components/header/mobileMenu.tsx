import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {CustomButton, CustomButton2, CustomSearch, Language, LoginButton} from "../../components/util";
import {
    MegaMenuAnalytics,
    MegaMenuAnalyticsMobile,
    MegaMenuCountries,
    MegaMenuCountriesMobile
} from "../../components/header/MegaMenus";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FiUserPlus} from "react-icons/fi";
import {MobileMenuInterface} from "../../components/interfaces";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";

const MobileMenu = ({setIsMobile, isMobile, navigation}:MobileMenuInterface) => {
    const [isCountries, setIsCountries] = React.useState(false);
    const [isAnalytics, setIsAnalytics] = React.useState(false);

    return (
        <div className={` backdrop-filter backdrop-blur-xl fixed transition-all duration-300 ease-in-out w-full rounded-b-xl border-b border-gray-200`}>
            <div className={`flex flex-col px-3 justify-between items-center`}>
                <div className={`w-full flex justify-end p-4`}>
                    {isMobile?
                        <AiOutlineClose
                            className={`cursor-pointer hamburger-menu text-gray-600 text-2xl text-sub`}
                            onClick={() => setIsMobile(!isMobile)}
                        />:
                        <GiHamburgerMenu
                            className={`cursor-pointer hamburger-menu text-gray-600 text-2xl text-sub`}
                            onClick={() => setIsMobile(!isMobile)}
                        />
                    }
                </div>
                {isCountries && <MegaMenuCountriesMobile setIsCountries={setIsCountries} />}
                {isAnalytics && <MegaMenuAnalyticsMobile setIsAnalytics={setIsAnalytics} />}
                {!isCountries && !isAnalytics &&
                    <div className={`flex flex-col w-full`}>
                        <div className={`w-full pb-8 border-b border-gray-200`}>
                            <CustomSearch placeholder={'Search database...'} onClick={''} />
                        </div>
                        <ul className={`flex flex-col items-center justify-center my-8 w-full px-5 md:px-0 text-xl backdrop-blur-sm`}>
                            {navigation.map((item) => {

                                return (
                                    <div
                                        key={item.name}
                                        className={`relative color-1 text-sm my-4 hover:text-main `}
                                    >
                                        {item.name === 'Countries' ? (
                                            <span onClick={()=>setIsCountries(true)} className={'flex gap-1 items-center cursor-pointer'}>
                                            Countries
                                            <IoIosArrowForward width={10}/>
                                        </span>
                                        ) : item.name === 'Analytics' ? (
                                            <span onClick={()=>setIsAnalytics(true)} className={'flex gap-1 items-center cursor-pointer'}>
                                            Analytics
                                            <IoIosArrowForward width={10}/>
                                        </span>
                                        ) : (
                                            <Link href={item.href} target={item.external ? "_blank" : ""}>
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </ul>
                        <div className={`flex w-full py-8 mb-8 border-y border-gray-200 `}>
                            <Language isMobile={isMobile}/>
                        </div>
                        <div className={`flex w-full mb-8`}>
                            <LoginButton isMobile={isMobile}/>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default MobileMenu;
