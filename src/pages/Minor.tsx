import { MinorBar } from './../components/MinorBar';
import { BangBar } from './../components/BangBar';
import { Bets } from './../components/Bets';
import { Timer } from './../components/Timer';
import Navbar from './../components/Navbar';

const Minor = () => {

	return (<section className="page minor-jackpot">

		<Navbar />
		<div className="body">
			<Timer />
			<div className="view">
				<h2 className="title">Minor</h2>
				<div className="info">
					<div className="card">
						<img src="/assets/money_bag.png" alt="" />
						<div className="texts">
							<h4>Jackpot Entry</h4>
							<p>2000 USDC</p>
						</div>
					</div>
					<div className="card">
						<img src="/assets/trophie.png" alt="" />
						<div className="texts">
							<h4>Current Award</h4>
							<p>1000 USDC</p>
						</div>
					</div>
					<div className="card">
						<img src="/assets/mesh.png" alt="" />
						<div className="texts">
							<h4>Information</h4>
							<p>Particpants: 50<br />Bets: 20</p>
						</div>
					</div>
				</div>
			</div>
			<BangBar />
			<MinorBar />
			<Bets />
		</div>
		<div className="rules">
			<a>Rules</a>
		</div>
	</section>
	)
}

export default Minor;