import Logo from '@/components/UI/Logo/Logo'
import styles from './Footer.module.css'
import twitterIcon from '@/assets/images/card/twitter.svg'
import telegramIcon2 from '@/assets/images/card/telegram2.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import bigLogo from '@/assets/images/icons/big-logo.svg'
import { useScrambleText } from '@/hooks/useScrambleText'

const links1 = [
	{ link: 'https://dunesprotocol.io/#rec742480964', text: 'Our solutions'},
	{ link: 'https://dunes-protocol.gitbook.io/untitled/', text: 'Documentation'},
	{ link: 'https://dunesprotocol.io/#rec740439599', text: 'Roadmap'}
]

const links2 = [
	{ link: 'https://dunesprotocol.io/#rec742474381', text: 'Home'},
	{ link: '/', text: 'Launchpad'},
	{ link: 'https://dunesprotocol.io/#rec740440337', text: 'Advisors'}
]

const FooterLink = ({ text, link }: { text: string, link: string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<a ref={ref} onMouseEnter={reload} className={styles.link} href={link}>
			{text}
		</a>
	)
}

const FooterLink2 = ({ text, link }: { text: string, link:string }) => {
	const [ref, reload] = useScrambleText()

	return (
		<a href={link} onMouseEnter={reload}>
			<div className={styles.itemLink}>
				<p ref={ref}>{text}</p>
			</div>
		</a>
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
								<FooterLink2 text={link.text} link={link.text} />
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
