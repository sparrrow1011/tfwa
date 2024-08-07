'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {GoArrowRight} from "react-icons/go";
import banner_image from '@/public/img/homepage/banner.png'
import {CustomButton3} from "@/src/app/[locale]/components/util";

const Banner = () => {
    const t = useTranslations('HomePage');

    return (
        <div
            className={`flex flex-col w-full h-96 py-72 px-5 items-center justify-center text-center rounded-b-3xl text-white `}
            style={{
                backgroundImage: `url('/img/homepage/banner.png')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <p className={`text-2xl md:text-4xl lg:text-6xl font-bold`} dangerouslySetInnerHTML={{ __html: t('Banner_text_1').replace(/\n/g, '<br />') }}></p>
            <div className={`md:w-6/12`}>
                <p className={`text-sm md:text-base py-5`} dangerouslySetInnerHTML={{ __html: t('Banner_text_2').replace(/\n/g, '<br />') }}></p>
            </div>
            <div className={`md:text-xl`}>
                <CustomButton3 text={t('Button_1')} border={true} onClick={''} icon={<GoArrowRight className={`text-lg`}/>} reverse={true} />
            </div>
        </div>
    );
};

export default Banner;
