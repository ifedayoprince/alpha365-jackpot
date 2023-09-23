import { useRef } from "react";
import { Info } from "./Info";

const BombMode = ({ }) => {
	const alphaBomb = useRef(null);

	// useEffect(() => {
	// 	let ctx = animateCardScreen("view-bomb")

	// 	return ()=>{
	// 		ctx.kill();
	// 	}
	// }, [])

	return <div className="view bomb-mode view-bomb">
		<h2 className="title">BOMB 💥</h2>
		<img src="/assets/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb" ref={alphaBomb} />
		<Info entry={320} award={334} participants={3121} bets={77}/>
	</div>;
}

export default BombMode;