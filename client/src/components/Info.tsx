import React from "react";

interface InfoProps {
    entry: number,
    award: number,
    participants: number,
    bets: number
}

export const Info: React.FC<InfoProps> = ({ entry, award, participants, bets }) => {
    return <div className="info">
        <div className="card">
            <img src="/assets/money_bag.png" alt="" />
            <div className="texts">
                <h4>Jackpot Entry</h4>
                <p>{entry} USDC</p>
            </div>
        </div>
        <div className="card">
            <img src="/assets/trophie.png" alt="" />
            <div className="texts second">
                <h4>Current Award</h4>
                <p>{award} USDC</p>
            </div>
        </div>
        <div className="card">
            <img src="/assets/mesh.png" alt="" />
            <div className="texts">
                <h4>Information</h4>
                <p>Participants: {participants}<br />Bets: {bets}</p>
            </div>
        </div>
    </div>;
}
