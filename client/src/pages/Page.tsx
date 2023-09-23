import BigView from '../components/BigView';
import { MinorBar } from '../components/MinorBar';
import { BangBar } from '../components/BombBar';
import { Bets } from '../components/Bets';
import { Timer } from '../components/Timer';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { useEffect } from 'react';
import { switchView, updateBombProgress, updateModeProgress } from '../models/Animator';
import MinorView from '../components/MinorView';
import Gameover from '../components/Gameover';
import BombMode from '../components/Bomb';
import Winner from '../components/Winner';


const Page = () => {

	useEffect(() => {
		// setTimer({
		// 	hours: 3,
		// 	minutes: 1,
		// 	seconds: 10
		// })
		setTimeout(()=>{
			switchView("view-big");
		}, 3000)
		setTimeout(()=>{
			switchView("view-bomb");
		}, 10000)
		setTimeout(()=>{
			switchView("view-win");
		}, 15000)
		setTimeout(()=>{
			switchView("view-gameover");
		}, 20000)

		setInterval(() => {
			updateModeProgress(Math.round(Math.random() * 100))
			updateBombProgress(Math.round(Math.random() * 100))
		}, 2 * 1000)

	}, [])
	return (<section className="page">

		<Navbar />
		<Menu />
		<div className="body">
			<Timer />
			<div className='view-swiper'>
				<MinorView />
				<BigView/>
				<Gameover />
				<BombMode />
				<Winner />
			</div>
			<BangBar />
			<MinorBar />
			<Bets />
		</div>
		<div className="rules">
			<a href='/rules'>Rules</a>
		</div>
	</section >
	)
}

export default Page;