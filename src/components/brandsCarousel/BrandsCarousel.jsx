import styles from './BrandsCarousel.module.scss';
import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, Power3 } from 'gsap/all';
import { Container } from 'react-bootstrap';
import { Carousel, ImgFrame } from '@components';

export const BrandsCarousel = ({ pageData, clientsData }) => {
	gsap.registerPlugin(ScrollTrigger);

	const containerRef = useRef(null);
	const itemElsRef = useRef([]);

	const [sliderOptions] = useState({
		slidesToShow: 7,
		swipeToSlide: true,
		infinite: true,
		className: 'brandsCarousel',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	useEffect(() => {
		const tl = new gsap.timeline({ paused: true });
		const randomGap = 8;

		itemElsRef.current.forEach(itemNode => {
			tl.add(itemNode, Math.random() * randomGap);

			tl.from(
				itemNode,
				20,
				{ autoAlpha: 0, y: '70px', ease: Power3.easeOut },
				Math.random() * randomGap
			);
		});

		ScrollTrigger.create({
			trigger: containerRef.current,
			animation: tl,
			start: 'top-=400px center',
			end: 'top +=50px',
			scrub: 2,
		});
		return () => tl.kill();
	}, [itemElsRef, containerRef]);

	return (
		<section className={styles.main} ref={containerRef}>
			<Container>
				<h2
					dangerouslySetInnerHTML={{
						__html: pageData.home_brands_subheadline,
					}}
				/>
				<Carousel {...sliderOptions} styles={styles.carousel}>
					{clientsData.data &&
						clientsData.data.map(
							({ ID, img, name }) =>
								(pageData.home_brands_clients.includes(ID) || !img) && (
									<ImgFrame
										key={ID}
										ref={element => itemElsRef.current.push(element)}
										url={img}
										alt={name}
										styles={styles.brandImg}
									/>
								)
						)}
				</Carousel>
			</Container>
		</section>
	);
};
