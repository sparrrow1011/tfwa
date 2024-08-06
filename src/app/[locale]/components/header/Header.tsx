'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import React, {FC, useState} from 'react'
import GithubIcon from '../../../icons/github'
import LogoIcon from '../../../icons/logo'
import LangSwitcher from '../LangSwitcher'
import ThemeSwitch from '../ThemeSwitch'
import {MegaMenuAnalytics, MegaMenuCountries} from "@/src/app/[locale]/components/header/MegaMenus";
import {CustomSearch, Language, Line, LoginButton, LogoImage, NavLink} from "@/src/app/[locale]/components/util";
import {IoMdMenu} from "react-icons/io";
import {usePathname} from "next/navigation";
import MobileMenu from "@/src/app/[locale]/components/header/mobileMenu";
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('Navigation')

  const [isMobile, setIsMobile] = useState(false);

  const navigation = [
    { name:  `${t('Home')}`, href: '/', external: false },
    { name: `${t('Countries')}`, href: '/countries', external: false },
    { name: `${t('Analytics')}`, href: '/analytics', external: false },
    { name: `${t('Events')}`, href: '/events', external: false },
    { name: `${t('Training')}`, href: '/training', external: false },
  ];

  const pathname = usePathname();
  const removeSlash = ({name, number}:any) => {
    return name.slice(number);
  };
  const hrefToUse = ({link}:any) => {
    return pathname === '/' ? link : removeSlash(link);
  };

  return (
      <>
        {isMobile && <MobileMenu setIsMobile={setIsMobile } isMobile={isMobile} navigation={navigation}/>}
        <div className={`menu-background flex flex-col md:container mx-auto items-center align-bottom justify-between z-50`}>
          <div className={`flex w-full align-bottom justify-between py-5 lg:py-10 `}>
            <div className={`main-logo px-5 lg:px-0`}>
              <LogoImage alt={'main logo'} />
            </div>
            <div className={`lg:hidden self-end px-5 lg:px-0`}>
              <IoMdMenu onClick={()=>setIsMobile(!isMobile)} className={`text-2xl color-1 cursor-pointer`} />
            </div>

            <div className={`flex-col w-full justify-between ml-5 hidden lg:flex`}>
              <div className={`flex justify-end mb-2 gap-2 items-center`}>
                <ThemeSwitch/>
                <Language isMobile={isMobile}/>
              </div>
              <div className={`flex justify-between w-full align-bottom`}>
                <ul className={`flex w-full px-5 md:px-0 text-xl backdrop-blur-sm`}>
                  {navigation.map((item, index) => {
                    const isActive = pathname.includes(hrefToUse(item.href)) && item.href.length > 1;

                    return (
                        <div
                            key={item.name}
                            className={`relative color-1 text-sm mx-2 hover:text-main ${isActive ? 'text-blue-600' : ''}`}
                        >
                          {item.name === `${t('Countries')}` ? (
                              <MegaMenuCountries
                                  name={item.name}
                                  isMobile={isMobile}
                              />
                          ) : item.name === `${t('Analytics')}` ? (
                              <MegaMenuAnalytics
                                  name={item.name}
                                  isMobile={isMobile}
                              />
                          ) : (
                              <NavLink name={item.name} link={item.href} isMobile={isMobile} external={false}/>
                          )}
                        </div>
                    );
                  })}
                </ul>
                <div className={`flex w-full justify-end gap-5`}>
                  <div className={` w-6/12`}>
                    <CustomSearch placeholder={'Search database...'} onClick={''} />
                  </div>
                  <LoginButton isMobile={isMobile}/>
                </div>
              </div>
            </div>
          </div>
          <Line/>
        </div>
        <Line/>
      </>
  )
}
