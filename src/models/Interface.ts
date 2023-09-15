export enum BetType {
	FIVE_USDC, TEN_USDC, TWENTY_USDC
}

export function setTimer(bet: BetType) {
	if(bet == BetType.FIVE_USDC) {
		alert('Bet 5')
	}
	if(bet == BetType.TEN_USDC) {
		alert('Bet 10')
	}
	if(bet == BetType.TWENTY_USDC) {
		alert('Bet 20')
	}
}
