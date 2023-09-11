import React from "react";

interface ProgressBarProps {
	vertical?: boolean,
	percent: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ vertical, percent }) => {
	return <div className={`progress-bar ${vertical ? 'vertical' : ''}`}>
		{vertical ?
			<div className="bar" style={{ height: `${percent}%` }}></div>
			: <div className="bar" style={{ width: `${percent}%` }}></div>
		}
	</div>;
}
