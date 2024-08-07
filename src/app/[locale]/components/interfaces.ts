import {UrlObject} from "url";

export interface LogoInterface {
    alt: string;
    light?: boolean;
}

export interface CustomButtonInterface {
    icon?: any;
    text: string;
    onClick?: any;
    reverse?: boolean;
    border?: boolean;
}

export interface SearchInterface {
    placeholder?: string;
    onClick?: any;
}

export interface MegaMenuInterface {
    name: string;
    isMobile: boolean;
}

export interface LanguageInterface  {
    code: string;
    country: string;
    flag: string;
    language?: string;
}

export interface MobileMenuInterface {
    isMobile: boolean;
    setIsMobile: any;
    navigation: NavigationInterface[];
}

export interface NavigationInterface {
    name: string;
    href: string;
    external: boolean;
}

export interface NavLinkInterface {
    name: string;
    link: string | UrlObject;
    isMobile: boolean;
    external: boolean;
    isFooter?: boolean;
    icon?: any;
}

export interface FooterLinkInterface {
    links:any[];
    isMobile: boolean;
    name: string;
    // icon?: any;
}

export interface ColorCardInterface {
    color: string;
    text: string;
    icon: any;
    number1: string;
    number2: string;
    textColor: string;
}

export interface GraphCardInterface {
    mainText: string;
    graph: any;
}


export interface GraphInterface {
    name: string;
    data: any;
}
