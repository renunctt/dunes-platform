import GalleryMain from "@/components/GallerySections/GalleryMain/GalleryMain";
import GalleryTop from "@/components/GallerySections/GalleryTop/GalleryTop";
import styles from "./Gallery.module.css"

import { useState } from "react";


const Gallery = () => {
    const [isActive, setActive] = useState("ALL");
    return (
        <>
            <GalleryTop isActive={isActive} setActive={setActive} />
            <GalleryMain isActive={isActive} />
            <div className={styles.line} />
        </>
    );
};

export default Gallery;
