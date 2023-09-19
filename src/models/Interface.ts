export interface Game {
    type: GameType,
    currentPrize: number,
    initialEntry: number,
    bets: number,
    participants: number
}

enum GameType {
    BIG, MINOR, BOMB
}


// Delivery functions
export function getCurrentState(): Game | null {
    return null;
}

export enum BetType {
	FIVE_USDC, TEN_USDC, TWENTY_USDC
}