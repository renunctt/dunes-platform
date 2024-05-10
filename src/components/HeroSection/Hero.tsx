import styles from "./Hero.module.css";

interface IHero {
    title: React.ReactElement;
    text: string;
    img: string;
    firstButton: string;
    secondButton?: string;
}

const Hero = ({ title, text, img, firstButton, secondButton }: IHero) => {
    return (
        <main className={styles.main}>
            <div className={`${styles.mainWrapper} my-container`}>
                <img src={img} alt="" className={styles.bgImage} />
                <h1 className={styles.title}>{title}</h1>

                <p className={styles.desc}>{text}</p>

                <div className={styles.box}>
                    <button className={styles.buy}>{firstButton}</button>
                    {secondButton && (
                        <button className={styles.start}>{secondButton}</button>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Hero;
