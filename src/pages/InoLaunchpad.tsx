import Hero from "../components/HeroSection/Hero";
import HeroImg from "../assets/images/ino-hero.png";
import InoLaunchpadSection from "../components/InoLaunchpadSection/InoLaunchpadSection";
import JoinSection from "../components/JoinSection/JoinSection";
import { useEffect } from 'react'

const Title = () => <>Acquiring <span>top NFTs</span> just got simpler</>;

const InoLaunchpad = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    return (
        <>
            <Hero
                title={<Title />}
                text={"Be the first to get the best NFT project spots on Dunes INO Launchpad"}
                img={HeroImg}
                firstButton="buy $DUNE"
            />
            <InoLaunchpadSection />
            <JoinSection />
        </>
    );
};

export default InoLaunchpad;
