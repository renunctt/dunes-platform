import { useState } from "react";
import { FledAnimation } from "../FledAnimation/FledAnimation";
import styles from "./LaunchpadSection.module.css";
import arrowIcon from "@/assets/images/icons/featured-arrow.svg";

<<<<<<< HEAD
interface ICardSection {
    firstItems: React.ReactElement;
    secondItems: React.ReactElement;
    title: string;
=======
export const LaunchpadSection = () => {
	const [isFinished, setFinished] = useState(true)

	return (
		<div className={styles.launchpad}>
			<div className='my-container'>
				<div className={styles.top}>
					<h2 className={styles.title}>
						<img className={styles.titleLeft} src={arrowIcon} alt='' />
						<FledAnimation>IDOs</FledAnimation>
						<img className={styles.titleRight} src={arrowIcon} alt='' />
					</h2>

					<div className={styles.box}>
						<button
							style={{
								color: !isFinished ? 'white' : '',
							}}
							onClick={() => setFinished(false)}
							className={`${styles.upcoming} shuffle-hover-inside`}
						>
							Live & Upcoming
						</button>
						<button
							style={{
								color: isFinished ? 'white' : '',
							}}
							onClick={() => setFinished(true)}
							className={`${styles.finished} shuffle-hover-inside`}
						>
							<p className='shuffle-hover-inside'>Finished</p>
						</button>
					</div>
				</div>

				<div className={styles.items}>
					<div className={styles.topLine}>
						<div className={styles.line1}></div>
						<div className={styles.line2}></div>
						<div className={styles.line3}></div>
						<div className={styles.line4}></div>
						<div className={styles.line5}></div>
					</div>
					<div className={styles.launchItem}>
						{isFinished ? <FinishedItems /> : <UpcomingItems />}
					</div>
				</div>
			</div>
		</div>
	)
>>>>>>> origin/main
}

export const LaunchpadSection = ({ firstItems, secondItems, title }: ICardSection) => {
    const [isFinished, setFinished] = useState(true);

    return (
        <>
            <div className="my-container">
                <div className={styles.top}>
                    <h2 className={styles.title}>
                        <img
                            className={styles.titleLeft}
                            src={arrowIcon}
                            alt=""
                        />
                        <FledAnimation>{title}</FledAnimation>
                        <img
                            className={styles.titleRight}
                            src={arrowIcon}
                            alt=""
                        />
                    </h2>

                    <div className={styles.box}>
                        <button
                            style={{
                                color: !isFinished ? "white" : "",
                            }}
                            onClick={() => setFinished(false)}
                            className={`${styles.upcoming} shuffle-hover-inside`}
                        >
                            Live & Upcoming
                        </button>
                        <button
                            style={{
                                color: isFinished ? "white" : "",
                            }}
                            onClick={() => setFinished(true)}
                            className={`${styles.finished} shuffle-hover-inside`}
                        >
                            <p className="shuffle-hover-inside">Finished</p>
                        </button>
                    </div>
                </div>

                <div className={styles.items}>
                    <div className={styles.topLine}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                        <div className={styles.line4}></div>
                        <div className={styles.line5}></div>
                    </div>
                    <div>{isFinished ? firstItems : secondItems}</div>
                </div>
            </div>
        </>
    );
};
