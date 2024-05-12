import GalleryMain from "@/components/GallerySections/GalleryMain/GalleryMain";
import GalleryTop from "@/components/GallerySections/GalleryTop/GalleryTop";
import styles from "./Gallery.module.css"

import { useEffect, useState } from "react";


const Gallery = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    const [isActive, setActive] = useState("ALL");
    return (
        <div className={styles.container}>
            <GalleryTop isActive={isActive} setActive={setActive} />
            <GalleryMain isActive={isActive} />
            <div className={styles.line} />
        </div>
    );
};

export default Gallery;
