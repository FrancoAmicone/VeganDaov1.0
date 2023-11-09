import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const refs = useRefArray<SVGSVGElement>(5);
	const linesVisibility: boolean[] = [
		useIntersectionObserver(refs[0], 1),
		useIntersectionObserver(refs[1], 1),
		useIntersectionObserver(refs[2], 1),
		useIntersectionObserver(refs[3], 1),
		useIntersectionObserver(refs[4], 1),
	];

	useEffect(() => {
		if (!refs) return;
		refs.forEach((ref, i) => {
			if (linesVisibility[i]) {
				gsap.to(ref.current?.firstChild, {
					delay: windowWidth > 1024 ? 0.5 : 0.2,
					duration: 2.5,
					ease: "expo.out",
					strokeDashoffset: 0,
				});
			}
		});
	}, [linesVisibility, refs]);

	return (
		<section id="section-eight" data-scroll-section>
			<div className={S.section}>
				<div className={S.box}>
					<LongLine
						ref={refs[0]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Dao</p>
					<p className={S.text}>
					VeganDao is a Decentralized Autonomous Organization operating under the Snapshot platform.
					 Here you can upload proposals, vote and decide the direction the project will take in different aspects.	
					</p>
					<img
						className={S.img}
						src="https://vegandao.io/wp-content/uploads/2023/02/pit.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[1]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Deflacionary</p>
					<p className={S.text}>
					The deflationary nature of VeganDao causes tokens to be burned 
					for every transfer that is made, thus leaving fewer tokens
					 in circulation and raising the market price in the long run.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-2_tk158a.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[2]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>NFTS</p>
					<p className={S.text}>
					Exchange your recipes among the vegan community, from our nft ecosystem
					Generate rewards passively by staking your nfts and get VeganDao (VDAO) to participate in voting.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-3_b9syhi.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[3]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>marketplace</p>
					<p className={S.text}>
					Descover the veganverse IN OUR NEW MARKETPLACE
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-4_lrjllb.png"
						alt="her"
					/>
					<LongLine
						ref={refs[4]}
						className={S.line}
						windowWidth={windowWidth}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
