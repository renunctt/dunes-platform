import { FC } from "react";
import css from "./NftInfoTop.module.css";
import arrowIcon from "@/assets/images/icons/arrow-green.svg";
import { FledAnimation } from "@/components/FledAnimation/FledAnimation";

const NftInfoTop: FC<NftInfoTopProps> = ({ name, description, title }) => {
    return (
        <div className={css.top}>
            <div className={css.titleWrap}>
                <div className={css.title}>
                    <img className={css.left} src={arrowIcon} alt="" />
                    <FledAnimation>
                        <span>
                            {title}
                        </span> Launchpad
                    </FledAnimation>
                    <img className={css.right} src={arrowIcon} alt="" />
                </div>
            </div>

            <div className={css.content}>
                <div className={css.name}>
                    <FledAnimation>{name}</FledAnimation>
                </div>

                <div className={css.desc}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default NftInfoTop;
