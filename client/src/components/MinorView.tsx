import { Info } from './Info';

const MinorView = ({ }) => {

	// useEffect(() => {
	// 	let ctx = animateCardScreen("view-minor");

	// 	return () => {
	// 		ctx.kill();
	// 	}
	// })
	return <div className="view view-minor active">
		<h2 className="title">Minor</h2>
		<Info entry={320} award={334} participants={3121} bets={77}/>
	</div>;
}

export default MinorView;