import { ProgressBar } from './ProgressBar';

export function BangBar({ }) {
	return <div className="bomb-bar">
		<img src="/assets/alpha_bomb.png" alt="" className="bang" />
		<ProgressBar vertical percent={50} />
	</div>;
}
