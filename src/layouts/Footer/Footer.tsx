import { Link } from 'react-router-dom'
import Logo from '@/components/UI/Logo/Logo'
import styles from './Footer.module.css'
import twitterIcon from '@/assets/images/card/twitter.svg'
import discordIcon from '@/assets/images/card/discord.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import bigLogo from '@/assets/images/icons/big-logo.svg'
import { useScrambleText } from '@/hooks/useScrambleText'

const links1 = ['Our solutions', 'Documentation', 'Roadmap']
const links2 = ['Home', 'Launchpad', 'Advisors']

const FooterLink = ({ text }: { text: string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<a ref={ref} onMouseEnter={reload} className={styles.link} href=''>
			{text}
		</a>
	)
}

const FooterLink2 = ({ text }: { text: string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<Link to={'/'} onMouseEnter={reload}>
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
							{links1.map(text => (
								<FooterLink text={text} />
							))}
						</div>

						<div className={styles.links}>
							{links2.map(text => (
								<FooterLink2 text={text} />
							))}
						</div>
					</div>

					<div className={styles.contentBottom}>
						<div className={styles.social}>
							<p>Follow us</p>
							<div className={styles.socialLinks}>
								<a href='https://twitter.com'>
									<img src={twitterIcon} alt='' />
								</a>
								<a href='https://discord.com'>
									<img src={discordIcon} alt='' />
								</a>
								<a href='https://telegram.org'>
									<img src={telegramIcon} alt='' />
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
