'use client'
import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Banner from "@/src/app/[locale]/components/homepage/Banner";
import {ColorCards} from "@/src/app/[locale]/components/util";
import React from "react";
import Section3 from "@/src/app/[locale]/components/homepage/Section3";

export default function Home() {
  const t = useTranslations('HomePage',)
  return (
    <div className={`mx-auto md:container`}>
      <section className='flex flex-col items-center justify-center '>
        <Banner />
      </section>
        <section className='flex flex-col lg:flex-row justify-between px-5 md:px-0 my-24 gap-5'>
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4`}>
                <ColorCards
                    color={`yellow-item`}
                    text={t('Item_1')}
                    icon={`/img/homepage/africa.png`}
                    number1={'14'}
                    number2={'/15'}
                    textColor={'403905'}
                />
                <ColorCards
                    color={`orange-item`}
                    text={t('Item_2')}
                    icon={`/img/homepage/bell.png`}
                    number1={'26'}
                    number2={'%'}
                    textColor={'5B1700'}
                />
                <ColorCards
                    color={`green-item`}
                    text={t('Item_3')}
                    icon={`/img/homepage/people.png`}
                    number1={'33'}
                    number2={'%'}
                    textColor={'003F27'}
                />
                <ColorCards
                    color={`blue-item`}
                    text={t('Item_4')}
                    icon={`/img/homepage/woman.png`}
                    number1={'33'}
                    number2={'%'}
                    textColor={'002F54'}
                />
            </div>
            <div className={`w-full`}>
                <p className={`text-xl md:text-3xl font-bold py-5`} dangerouslySetInnerHTML={{ __html: t('section_2_title').replace(/\n/g, '<br />') }}></p>
                <p className={`text-sm md:text-base`} dangerouslySetInnerHTML={{ __html: t('section_2_text').replace(/\n/g, '<br />') }}></p>
            </div>
        </section>
       <Section3/>
    </div>
  )
}
