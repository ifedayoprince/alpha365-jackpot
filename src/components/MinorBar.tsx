import { ProgressBar } from "./ProgressBar";

export function MinorBar({ }) {
	return <div className="minor-bar">
		<div className="labels">
			<p>Normal</p>
			<p>Big</p>
		</div>
		<ProgressBar percent={20} />
	</div>;
}
