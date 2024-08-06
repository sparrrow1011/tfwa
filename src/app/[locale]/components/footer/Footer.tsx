'use client'
import {useTranslations} from "next-intl";
import React, {useState} from "react";
import {FooterLink, Language, LogoImage, NavLink} from "@/src/app/[locale]/components/util";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
interface Props {
  locale: string
}
export const Footer = () => {
    const t = useTranslations('Footer')

    const [isMobile, setIsMobile] = useState(false);

    const Quick_links = [
        { name:  `${t('Home')}`, href: '/', external: false },
        { name: `${t('Countries')}`, href: '/countries', external: false },
        { name: `${t('Analytics')}`, href: '/analytics', external: false },
        { name: `${t('Events')}`, href: '/events', external: false },
        { name: `${t('Training')}`, href: '/training', external: false },
    ];
    const Database = [
        { name:  `${t('TF_Analytics')}`, href: '/tf_analytics', external: false },
        { name: `${t('TF_Knowledge_Center')}`, href: '/tf_knowledge_center', external: false },
        { name: `${t('TF_Governance')}`, href: '/tf_governance', external: false },
        { name: `${t('Maturity_Model')}`, href: '/maturity_model', external: false },
    ];
    const Legal = [
        { name: `${t('Terms_of_Service')}`, href: '/terms_of_service', external: false },
        { name:  `${t('Privacy_Policy')}`, href: '/privacy_policy', external: false },
        { name: `${t('Cookie_Policy')}`, href: '/cookie_policy', external: false },
    ];
    const External = [
        { name:  `${t('Ecowas_Website')}`, href: '/contact_us', external: true },
        { name: `${t('TFWA_Main')}`, href: '/about_us', external: true }
    ];
    const Contact = [
        { icon:<FaPhoneAlt className={`text-lg`}/>, name:  `+1 (0) 234 5678, +1 (0) 234 5679`, href: '#', external: true },
        { icon:<IoLocationOutline className={`text-lg`}/>, name: `${t('Address')}`, href: '#', external: true }
    ];
  return (
      <footer className={`flex flex-col w-full bg-footer px-5`}>
          <div className={`flex justify-between mx-auto md:container pb-10 border-b border-b-gray-200 py-10 md:py-16`}>
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12`}>
                  <div className={`col-span-1 md:col-span-1 lg:col-span-1`}>
                      <FooterLink links={Quick_links} isMobile={isMobile} name={t('Quick_Links')}/>
                  </div>
                  <div className={`col-span-1 md:col-span-1 lg:col-span-1`}>
                      <FooterLink links={Database} isMobile={isMobile} name={t('Database')}/>
                  </div>
                  <div className={`col-span-1 md:col-span-1 lg:col-span-1`}>
                      <FooterLink links={Legal} isMobile={isMobile} name={t('Legal')}/>
                  </div>
                  <div className={`col-span-1 md:col-span-1 lg:col-span-1`}>
                      <FooterLink links={External} isMobile={isMobile} name={t('External')}/>
                  </div>
                  <div className={`col-span-2 md:col-span-2 lg:col-span-1`}>
                      <FooterLink links={Contact} isMobile={isMobile} name={t('Contact_Us')}/>
                  </div>
              </div>
          </div>
          <div className={`flex flex-col justify-center gap-5 items-center my-7 md:flex-row md:justify-between md:items-baseline`}>
              <div className={`footer-logo px-5 lg:px-0`}>
                  <LogoImage alt={'main logo'} light={true}/>
              </div>
              <div>
                  <p className={`text-center text-xs md:text-base text-gray-200`}>© {(new Date().getFullYear())} {t('copy_right')}</p>
              </div>
          </div>
      </footer>
  )
}
