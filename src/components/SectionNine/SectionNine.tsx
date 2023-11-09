import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

	return (
		<section id="section-nine" data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<p className={S.text}>
						Check out some of our collections
					</p>
					<Link to="/gallery">
						<div className={S.button}>
							<Button use="section-nine" text="go to gallery" />
						</div>
					</Link>
				</div>
				<div className={S.right}>
					<img
						className={S.image1}
						src="https://imageup.me/images/76ef244b-6449-4fb0-9ec0-7f90a4414a7e.png"
						alt=""
					/>
					<img
						className={S.image2}
						src="https://imageup.me/images/d0ad1baf-d999-44f8-ba4d-18f45c0748c2.png"
						alt=""
					/>
					<img
						className={S.image3}
						src="https://imageup.me/images/3ba79eed-875f-436b-b0dc-d147d7c1593e.png"
						alt=""
					/>
					<p
						data-scroll
						className={S.title}
						data-scroll-direction="horizontal"
						data-scroll-speed={textScrollSpeed}
					>
						VeganDAO
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
