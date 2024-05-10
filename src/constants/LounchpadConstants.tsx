import cataImg from "../assets/images/finished/cata-img.png";
import cataIcon from "../assets/images/finished/cata-icon.png";
import eseImg from "../assets/images/finished/ese-img.png";
import eseIcon from "../assets/images/finished/ese-icon.png";
import nextImg from "../assets/images/finished/next-img.png";
import nextIcon from "../assets/images/finished/next-icon.png";

import boredImg from "../assets/images/inos/boredImg.png";
import breakImg from "../assets/images/inos/breakImg.png";
import goblinoidImg from "../assets/images/inos/goblinoidImg.png";
import quanumImg from "../assets/images/inos/quanumImg.png";
import sweetImg from "../assets/images/inos/sweetImg.png";
import trainersImg from "../assets/images/inos/trainersImg.png";

import pondImg from "../assets/images/upcoming/pond-img.png";
import pondIcon from "../assets/images/upcoming/pond-icon.png";
import wsdmImg from "../assets/images/upcoming/wsdm-img.png";
import wsdmIcon from "../assets/images/upcoming/wsdm-icon.png";
import esxImg from "../assets/images/upcoming/esx-img.png";
import esxIcon from "../assets/images/upcoming/esx-icon.png";

import twitterIcon from "../assets/images/card/twitter.svg";
import wwwIcon from "../assets/images/card/www.svg";
import telegramIcon from "../assets/images/card/telegram.svg";
import discordIcon from "../assets/images/card/discord.svg";

import { inosItemProps, ItemProps, upcomingItemsProps } from "./propsConstants";

export const finishedItem: ItemProps[] = [
    {
        title: "Catamoto CATA",
        img: cataImg,
        icon: cataIcon,
        price: "225, 000",
        roi: 25,
        socials: [
            { icon: twitterIcon, link: "https://twitter.com", alt: "twitter" },
            { icon: wwwIcon, link: "https://google.com", alt: "web site" },
            {
                icon: telegramIcon,
                link: "https://telegram.com",
                alt: "telegram",
            },
        ],
        margin: "100px 0px -100px 0px",
    },
    {
        title: "Eesee ESE",
        img: eseImg,
        icon: eseIcon,
        price: "500, 000",
        roi: 8,
        socials: [
            { icon: twitterIcon, link: "https://twitter.com", alt: "twitter" },
            {
                icon: telegramIcon,
                link: "https://telegram.com",
                alt: "telegram",
            },
        ],
        margin: "150px 0px -150px 0px",
    },
    {
        title: "Next Gem AI",
        img: nextImg,
        icon: nextIcon,
        price: "90, 000",
        roi: 2,
        socials: [
            { icon: twitterIcon, link: "https://twitter.com", alt: "twitter" },
            { icon: wwwIcon, link: "https://google.com", alt: "web site" },
            { icon: discordIcon, link: "https://discord.com", alt: "discord" },
            {
                icon: telegramIcon,
                link: "https://telegram.com",
                alt: "telegram",
            },
        ],
        margin: "200px 0px -200px 0px",
    },
];

export const inosItem: inosItemProps[] = [
    {
        title: "Bored Ape Pixel Club",
        img: boredImg,
        price: "5,000",
        items: 3333,
        margin: "100px 0px -100px 0px",
    },
    {
        title: "Trainers Zero",
        img: trainersImg,
        price: "300",
        items: 5000,
        margin: "300px 0px -300px 0px",
    },
    {
        title: "Break It All",
        img: breakImg,
        price: "500",
        items: 3020,
        margin: "100px 0px -100px 0px",
    },
    {
        title: "Goblinoid",
        img: goblinoidImg,
        price: "1,000",
        items: 2220,
        margin: "100px 0px -100px 0px",
    },
    {
        title: "Quantum Chains",
        img: quanumImg,
        price: "1,500",
        items: 3333,
        margin: "100px 0px -100px 0px",
    },
    {
        title: "Sweet Oranges",
        img: sweetImg,
        price: "3,000",
        items: 5000,
        margin: "100px 0px -100px 0px",
    },
];

export const upcomingItems: upcomingItemsProps[] = [
    {
        title: "Pond  PNDC",
        img: pondImg,
        icon: pondIcon,
        margin: "200px 0px -200px 0px",
    },
    {
        title: "Wisdomis WSDM",
        img: wsdmImg,
        icon: wsdmIcon,
        margin: "200px 0px -200px 0px",
    },
    {
        title: "EstateX ESX",
        img: esxImg,
        icon: esxIcon,
        margin: "200px 0px -200px 0px",
    },
];
