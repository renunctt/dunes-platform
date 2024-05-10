export interface ItemProps {
    img: string;
    icon: string;
    title: string;
    price: string;
    roi: number;
    socials: { icon: string; link: string; alt: string }[];
    margin: string;
}

export interface upcomingItemsProps {
    title: string;
    img: string;
    icon: string;
    margin: string;
};

export interface inosItemProps {
    title: string;
    img: string;
    price: string;
    items: number;
    margin: string;
}