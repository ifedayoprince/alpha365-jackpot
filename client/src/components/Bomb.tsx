import { useEffect, useRef } from "react";
import gsap, { Sine, Bounce, Power2, Elastic } from 'gsap'

const BombMode = ({ }) => {
	const alphaBomb = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {

			gsap.from(".view.bomb-mode .info", {
				backgroundColor: "#2e2a6f",
				ease: Sine.easeIn,
				duration: 0.5
			})
			gsap.from(".view.bomb-mode .title", {
				backgroundColor: "#1f1c4a",
				color: "#9490d5",
				ease: Sine.easeIn,
				duration: 0.5
			})
			gsap.from(alphaBomb.current, {
				x: "50%",
				y: "-20%",
				rotate: "30deg",
				ease: Bounce.easeOut,
				duration: 2.5
			})
			gsap.from(".card .texts:not(.second)", {
				x: "-50%",
				y: "100%",
				ease: Elastic.easeOut,
				opacity: 0,
				duration: 1.5
			})
			gsap.from(".card .texts.second", {
				x: "50%",
				y: "-100%",
				opacity: 0,
				ease: Elastic.easeOut,
				duration: 1.5
			})
			gsap.from(".card img", {
				scale: 0.5,
				opacity: 0,
				duration: 1.5
			})
		})

		return ()=>{
			ctx.kill();
		}
	}, [])

	return <div className="view bomb-mode">
		<h2 className="title">BOMB 💥</h2>
		<img src="/assets/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb" ref={alphaBomb} />
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
				<div className="texts second">
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
