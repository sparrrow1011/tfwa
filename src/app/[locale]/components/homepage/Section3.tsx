import React from 'react';
import {useTranslations} from "next-intl";
import {GraphCard} from "@/src/app/[locale]/components/util";
import Spiders from "@/src/app/[locale]/components/graphs/Spiders";

const Section3 = () => {
    const t = useTranslations('',)

    const oecd_data = {
        name: 'OECD',
        data: [1, 2, 3, 27, 18, 2, 1, 24]
    }

    const world_bank_data = {
        name: 'World Bank',
        data: [3,77, 27, 7, 21, 19, 94]
    }
    return (
        <section className='flex flex-col mb-24'>
            <p className={`text-base md:text-2xl pb-8`}>{t('TF_Analytics_Regional')}</p>
            <div className={`grid lg:grid-cols-2 gap-8`}>
                <GraphCard mainText={t('OECD_TF')} graph={<Spiders graph={oecd_data}/>} />
                <GraphCard mainText={t('World_Bank_LPI')} graph={<Spiders graph={world_bank_data}/>} />
            </div>
        </section>
    );
};

export default Section3;
