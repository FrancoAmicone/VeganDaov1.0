import gsap from "gsap";
import splitting from "splitting";
import S from "./Credits.module.scss";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import React, { useEffect, useRef } from "react";
import Button from "../../components/Button/Button";
import { ReactComponent as GitHub } from "../../svgs/github.svg";
import { ReactComponent as Behance } from "../../svgs/behance.svg";
import { ReactComponent as Twitter } from "../../svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";

const Credits: React.FC<PageProps> = ({
	appLoaded,
	preloaded,
	navOnClick,
	windowWidth,
	setAppLoaded,
}) => {
	const navRef = useRef(null);

	useEffect(() => {
		if (preloaded) {
			setAppLoaded(true);
		}
	}, [preloaded]);

	useEffect(() => {
		if (preloaded) {
			splitting({ by: "words", target: "#credits .split-text" });
			const delay = appLoaded ? 3 : 0;
			const credits = gsap.utils.selector("#credits");
			gsap.set(credits(".hidden-init"), { visibility: "visible" });
			gsap.from(credits(".split-text .word, .whitespace"), {
				delay: 0.25 + delay,
				duration: 0.75,
				opacity: 0,
				yPercent: 50,
				stagger: 0.025,
				ease: "power2.out",
			});
			gsap.to(`.${S.animateOpacity}`, {
				delay: 1 + delay,
				duration: 1.25,
				opacity: 1,
				stagger: 0.05,
			});
		}
	}, [preloaded]);

	useEffect(() => {
		const html = document.querySelector("html");
		if (html) html.setAttribute("data-page", "credits");
		return () => html?.removeAttribute("data-page");
	}, []);

	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<section id="credits" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
				</Marquee>
				<div className={S.credits}>
					<p
						data-splitting=""
						className={`${S.quoteOne} split-text hidden-init`}
					>
						Become part of us! Take a look in us Social Medias.
					</p>
					<div className={S.credit1}>
						<p
							data-splitting=""
							className={`${S.creditTitle} split-text hidden-init`}
						>
							Concept Designer & CEO
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Joana Cagido
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							
						</p>
						<div className={S.media}>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://twitter.com/"
							>
								<Twitter />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.linkedin.com/"
							>
								<LinkedIn />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.behance.net/"
							>
								<Behance />
							</a>
						</div>
					</div>
					<div className={S.credit2}>
						<p
							data-splitting=""
							className={`${S.creditTitle} split-text hidden-init`}
						>
							Official accounts
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Vegan Dao
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							
						</p>
						<div className={S.media}>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://twitter.com/daovegan"
							>
								<Twitter />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.linkedin.com/"
							>
								<LinkedIn />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://github.com/"
							>
								<GitHub />
							</a>
						</div>
					</div>
					<p
						data-splitting=""
						className={`${S.quoteTwo} split-text hidden-init`}
					>
						Web 3 Project, ETH Network
					</p>
					<div className={S.box1}>
						<p
							data-splitting=""
							className={`${S.boxTitle} split-text hidden-init`}
						>
							Web Development
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							<a className={S.bold} href="">
								Franco Amicone 
							</a>{" "}
							
						</p>
					</div>
					<div className={S.box2}>
						<p
							data-splitting=""
							className={`${S.boxTitle} split-text hidden-init`}
						>
							Documents
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							White-papper
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							Road Map
						</p>
					</div>
					<Link className={`${S.animateOpacity} ${S.button}`} to="/">
						<Button use="credits" text="back to home" />
					</Link>
				</div>
			</section>
		</>
	);
};

export default Credits;
