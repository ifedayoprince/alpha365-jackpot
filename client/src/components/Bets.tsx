import React from 'react';
import { useDispatch } from 'react-redux';
import {
  resetTimerTo10Minutes,
  resetTimerTo5Minutes,
  resetTimerTo2_5Minutes,
} from './../slices/timerSlice'; // Import the actions and make sure to adjust the import paths accordingly

import { BetType } from './../models/Interface';

export function Bets({}) {
  const dispatch = useDispatch();

  const handleBetClick = (betType) => {
    switch (betType) {
      case BetType.FIVE_USDC:
        dispatch(resetTimerTo10Minutes()); // Reset timer to 10 minutes for $5 bet
        break;
      case BetType.TEN_USDC:
        dispatch(resetTimerTo5Minutes()); // Reset timer to 5 minutes for $10 bet
        break;
      case BetType.TWENTY_USDC:
        dispatch(resetTimerTo2_5Minutes()); // Reset timer to 2.5 minutes for $20 bet
        break;
      default:
        // Handle other cases or provide a default action
        break;
    }
  };

  return (
    <div className="bets">
      <div className="bet" onClick={() => handleBetClick(BetType.FIVE_USDC)}>
        <h2>$5</h2>
        <div className="subinfo">
          <i className='material-icons-outlined'>timer</i>
          <p>10 min</p>
        </div>
      </div>
      <div className="bet" onClick={() => handleBetClick(BetType.TEN_USDC)}>
        <h2>$10</h2>
        <div className="subinfo">
          <i className='material-icons-outlined'>timer</i>
          <p>5 min</p>
        </div>
      </div>
      <div className="bet" onClick={() => handleBetClick(BetType.TWENTY_USDC)}>
        <h2>$20</h2>
        <div className="subinfo">
          <i className='material-icons-outlined'>timer</i>
          <p>2.5 min</p>
        </div>
      </div>
    </div>
  );
}
