export function Timer({ }) {
	return <div className="timer">
		<div className="time hour">
			<h2>00</h2>
			<p>Hour</p>
		</div>
		<div className="divide"></div>
		<div className="time min">
			<h2>00</h2>
			<p>Min</p>
		</div>
		<div className="divide"></div>
		<div className="time sec">
			<h2>00</h2>
			<p>Sec</p>
		</div>
	</div>;
}