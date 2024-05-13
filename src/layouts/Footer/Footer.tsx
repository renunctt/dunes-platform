import Logo from '@/components/UI/Logo/Logo'
import styles from './Footer.module.css'
import twitterIcon from '@/assets/images/card/twitter.svg'
import telegramIcon2 from '@/assets/images/card/telegram2.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import bigLogo from '@/assets/images/icons/big-logo.svg'
import { useScrambleText } from '@/hooks/useScrambleText'
import { Link } from 'react-router-dom'

const links1 = [
	{ link: '/swap', text: 'Dune Swap'},
	{ link: '/bridge', text: 'Dune Bridge'},
	{ link: '/gallery', text: 'Dune Gallery'}
]

const links2 = [
	{ link: '/ido-launchpad', text: 'IDO Launchpad'},
	{ link: '/ino-launchpad', text: 'INO Launchpad'},
	{ link: '/staking', text: 'Staking'}
]

const FooterLink = ({ text, link }: { text: string, link: string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<Link ref={ref} onMouseEnter={reload} className={styles.link} to={link}>
			{text}
		</Link>
	)
}

const FooterLink2 = ({ text, link }: { text: string, link:string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<Link to={link} onMouseEnter={reload}>
			<div className={styles.itemLink}>
				<p ref={ref}>{text}</p>
			</div>
		</Link>
	)
}

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerWrapper} my-container`}>
				<div className={styles.logoTop}>
				<Logo />

				</div>

				<div className={styles.content}>
					<div className={styles.contentTop}>
						<div className={styles.links}>
							{links1.map(link => (
								<FooterLink text={link.text} link={link.link} />
							))}
						</div>

						<div className={styles.links}>
							{links2.map(link => (
								<FooterLink2 text={link.text} link={link.link} />
							))}
						</div>
					</div>

					<div className={styles.contentBottom}>
						<div className={styles.social}>
							<p>Follow us</p>
							<div className={styles.socialLinks}>
								<a href='https://twitter.com/DunesProtocol'>
									<img src={twitterIcon} alt='' />
								</a>
								<a href='https://t.me/Dunesprotocol'>
									<img src={telegramIcon} alt='' />
								</a>
								<a href='https://t.me/DunesprotocolCom'>
									<img src={telegramIcon2} alt='' />
								</a>
							</div>
						</div>

						<div className={styles.bigLogo}>
						<img src={bigLogo} alt='' />
					</div>
					</div>

					
				</div>
			</div>

			<div className={styles.footerBottom}>
				<div className='my-container'>
					<p className={styles.bottomDesc}>
						Dunes (c) 2024. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
