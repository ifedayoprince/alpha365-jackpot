
const Gameover = ({ }) => {

    // useEffect(() => {
    //     let ctx = animateEndScreen(EndType.GAMEOVER, "view-gameover");

    //     return () => {
    //         ctx.kill();
    //     }
    // }, [])

    return <div className="view game-over pictured view-gameover">
        <h2 className="title">GAMEOVER</h2>
        <div className="info">
            <img src="/assets/coin_stack.png" alt="treasure chest" className="chest" />

            <div className="splash-text">
                <div>
                    <p>You are out of</p>
                </div>
                <div className="prize-div">
                    <p className="prize">LUCK!</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Gameover;