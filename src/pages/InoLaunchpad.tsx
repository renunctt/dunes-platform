import Hero from "../components/HeroSection/Hero";
import HeroImg from "../assets/images/ino-hero.png";
import InoLaunchpadSection from "../components/InoLaunchpadSection/InoLaunchpadSection";
import JoinSection from "../components/JoinSection/JoinSection";
import { useEffect } from 'react'

const Title = () => <>Getting the <span>best NFTs</span> just became easier</>;

const InoLaunchpad = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    return (
        <>
            <Hero
                title={<Title />}
                text={"Grab the best NFT project spots just at the time of the launch at Seedify INO Launchpad."}
                img={HeroImg}
                firstButton="buy $DUNE"
            />
            <InoLaunchpadSection />
            <JoinSection />
        </>
    );
};

export default InoLaunchpad;
