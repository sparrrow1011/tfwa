import React, {FC} from 'react';
import {useTranslations} from "next-intl";
interface Props {
    locale: string
}
const Banner: FC<Props> = ({ locale }) => {
    const t = useTranslations('Navigation')
    return (
        <>
        </>
    );
};

export default Banner;
