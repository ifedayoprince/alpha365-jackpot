import BigView from '../components/BigView';
import { MinorBar } from '../components/MinorBar';
import { BangBar } from '../components/BombBar';
import { Bets } from '../components/Bets';
import { Timer } from '../components/Timer';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { useEffect } from 'react';
import { updateBombProgress, updateModeProgress } from '../models/Animator';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import MinorView from '../components/MinorView';
import Gameover from '../components/Gameover';
import BombMode from '../components/Bomb';
import Winner from '../components/Winner';


const Page = () => {
	let nextSlide = null;
	let swiperConfig: SwiperProps = {
		slidesPerView: 1,
		spaceBetween: 30,
		// centeredSlides: true,
		speed: 400,
		effect: "scale",
		onSlideNextTransitionStart: () => {

		},
		onSlideChangeTransitionEnd: () => {

		}
	}
	useEffect(() => {
		// setTimer({
		// 	hours: 3,
		// 	minutes: 1,
		// 	seconds: 10
		// })
		setInterval(() => {
			updateModeProgress(Math.round(Math.random() * 100))
			updateBombProgress(Math.round(Math.random() * 100))
		}, 2 * 1000)

	}, [])
	return (<section className="page minor-jackpot">

		<Navbar />
		<Menu />
		<div className="body">
			<Timer />
			<div className='view-swiper'>
				<Swiper {...swiperConfig}>
					<SwiperSlide >
						<BigView />
					</SwiperSlide>
					<SwiperSlide>
						<MinorView />
					</SwiperSlide>
					<SwiperSlide>
						<Gameover />
					</SwiperSlide>
					<SwiperSlide>
						<BombMode />
					</SwiperSlide>
					<SwiperSlide>
						<Winner />
					</SwiperSlide>
				</Swiper>
			</div>
			<BangBar />
			<MinorBar />
			<Bets />
		</div>
		<div className="rules">
			<a href='/rules'>Rules</a>
		</div>
	</section>
	)
}

export default Page;