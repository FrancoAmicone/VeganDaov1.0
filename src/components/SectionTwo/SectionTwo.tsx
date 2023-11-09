import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
	return (
		<section id="section-two" data-scroll-section>
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>What is vegan dao?</h2>
					<p className={S.text}>
					Vegandao is an ambitious project that aims to promote and support the vegan lifestyle and values
					 through the use of blockchain technology and NFTs (non-fungible tokens).
					The project’s goal is to create a unique and engaging experience for the vegan community
					 by providing a platform where they can interact, transact, create content,
					  and mint vegan recipes in a way that aligns with their values.
					


					</p>
					<Signature className={S.signature} />
					<p className={S.person}>Descover our CEO</p>
				</div>
				<div className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<div
							data-scroll
							className={S.image}
							data-scroll-speed="-1"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
