import React from "react";
import S from "./SectionSix.module.scss";

const SectionSix: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll data-scroll-speed='-10' className={S.videoWrapper}>
					<img src="https://imageup.me/images/ba50d165-8189-4a40-ae3b-3b126e0a4ff4.png" alt="" className={S.img} />
				</div>
			</div>
		</section>
	);
};

export default SectionSix;
