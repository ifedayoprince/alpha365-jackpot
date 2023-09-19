import MinorView from '../components/MinorView';
import BigView from '../components/BigView';
import { MinorBar } from '../components/MinorBar';
import { BangBar } from '../components/BangBar';
import { Bets } from '../components/Bets';
import { Timer } from '../components/Timer';
import Navbar from '../components/Navbar';
import Winner from '../components/Winner';
import Gameover from '../components/Gameover';
import BombMode from '../components/Bomb';
import Menu from '../components/Menu';

const Page = () => {
	
	return (<section className="page minor-jackpot">

		<Navbar />
		{/* <Menu /> */}
		<div className="body">
			<Timer />
			{/* <BigView /> */}
			{/* <Gameover /> */}
			<BombMode />
			{/* <Winner /> */}
			{/* <MinorView /> */}
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