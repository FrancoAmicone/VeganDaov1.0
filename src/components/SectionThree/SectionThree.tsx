import gsap from "gsap";
import S from "./SectionThree.module.scss";
import React, { useEffect, useRef } from "react";
import locomotiveScrub from "../../animations/utils/locomotive-scrub";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ReactComponent as RotatingText } from "../../svgs/logo.svg";

type SectionThreeProps = {
	scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
	let progress: number;
	const ref = useRef<HTMLDivElement>(null);
	const SVGRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 0.125);

	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 4,
				ease: "expo.out",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);

	useEffect(() => {
		if (scroll) {
			const tl = gsap.timeline({ paused: true });
			tl.to(SVGRef.current, {
				duration: 8,
				rotate: 720,
			});
			locomotiveScrub(scroll, "section-three", progress, tl);
		}
	}, [scroll]);

	return (
		<section data-scroll data-scroll-section data-scroll-id="section-three">
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>what is VDAO TOKEN?</h2>
					<p className={S.text}>
					The VDAO token is the utility token for the vegan community that 
					is used for various activities such as minting, buying and trading
					 of vegan-themed NFTs, managing a digital vegan restaurant, and minting
					  vegan recipes. The token is used as a medium of exchange within the metaverse,
					   allowing users to use it for various activities such as buying, selling, 
					   and trading of vegan-themed NFTs, rewards for participating in the vegan ecosystem,
					    and minting vegan recipes.


					</p>
				</div>
				<div ref={ref} className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<img
							alt=""
							ref={imageRef}
							className={S.image}
							src="https://imageup.me/images/3ba79eed-875f-436b-b0dc-d147d7c1593e.png"
						
						/>
					</div>
					<div ref={SVGRef} className={S.svg}>
						<RotatingText width="100%" height="100%" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;
