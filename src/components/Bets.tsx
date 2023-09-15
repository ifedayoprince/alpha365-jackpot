import {BetType, setTimer} from './../models/Interface';

export function Bets({}) {
  return <div className="bets">
				<div className="bet" onClick={()=>{
				setTimer(BetType.FIVE_USDC)
				}} >
					<h2>$5</h2>
					<div className="subinfo">
						<i className='material-icons-outlined'>timer</i>
						<p>10 min</p>
					</div>
				</div>
				<div className="bet" onClick={()=>{
							setTimer(BetType.TEN_USDC)
				}}>
					<h2>$10</h2>
					<div className="subinfo">
						<i className='material-icons-outlined'>timer</i>
						<p>5 min</p>
					</div>
				</div>
				<div className="bet" onClick={()=>{
					setTimer(BetType.TWENTY_USDC)
				}}>
					<h2>$20</h2>
					<div className="subinfo">
						<i className='material-icons-outlined'>timer</i>
						<p>2.5 min</p>
					</div>
				</div>
			</div>;
}