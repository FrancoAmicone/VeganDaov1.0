import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionFiveProps = {
	windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
	const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
	const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

	const ref = useRef<HTMLParagraphElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 1);

	useEffect(() => {
		if (isOnScreen) {
			gsap.to("#lineRef > line", {
				duration: 2,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen]);

	return (
		<section id="section-five" data-scroll-section>
			<div id="target-element" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Recipes NFT</p>
					<p className={S.marqueeText}>VeganDao</p>
					<p className={S.marqueeText}>Share us recipes</p>
					<p className={S.marqueeText}>Governance</p>
					<p className={S.marqueeText}>New tastes</p>

				</Marquee>
				<div className={S.main}>
					<h2
						data-scroll
						className={S.title1}
						data-scroll-direction="horizontal"
						data-scroll-speed={title1ScrollSpeed}
					>
						jOIN US
					</h2>
					<img
						className={S.image}
						src="https://imageup.me/images/b5e25d85-76d2-45c3-bb9b-073e1fbc16b7.png"
						alt=""
					/>
					<h2
						data-scroll
						className={S.title2}
						data-scroll-direction="horizontal"
						data-scroll-target="#target-element"
						data-scroll-speed={title2ScrollSpeed}
					>
						now!
					</h2>
				</div>
				<div className={S.sub}>
					<p className={S.subText}>4% to holders</p>
					<div className={S.subRow}>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line1}
						/>
						<p ref={ref} className={S.subText}>
							2% Burn
						</p>
					</div>
					<div className={S.subRow}>
						<p className={S.subText}>777M Total Supply</p>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line2}
						/>
					</div>
				</div>
				<div className={S.textWrapper}>
					<p className={S.text}>
					Vegandao is a concept created for the vegan community where
					cooks and fans of the vegan cooking world participate,
					share recipes in search of the best flavors and combinations of ingredients, developed with blockchain technology so that each user can exchange their
					recipes and participate in the important decisions about the project,
					you can join the community today and share your knowledge about
					the vegan world. 
					<br></br>
					In addition there will be special participations and collections of different recognized in the world of vegan cuisine who will share their favorite dishes along with their preparations in the form of NFTs, which will provide rewards for holding or completing different missions within the dApp.
					<br></br>
					Together we can make change happen.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
