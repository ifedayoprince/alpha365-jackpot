const BombMode = ({})=>{
  return <div className="view bomb-mode">
				<h2 className="title">BOMB 💥</h2>
				<img src="/assets/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb" />
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
							<h4>Last Award</h4>
							<p>1000 USDC</p>
						</div>
					</div>
					<div className="card">
						<img src="/assets/coin_stack.png" alt="" />
						<div className="texts">
							<h4>Current Award</h4>
							<p>2000 USDC</p>
						</div>
					</div>
				</div>
			</div>;
}

export default BombMode;