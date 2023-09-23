
const Winner = ({ }) => {

    // useEffect(() => {
    //     let ctx = animateEndScreen(EndType.WIN, "view-win");

    //     return ()=>{
    //         ctx.kill();
    //     } 
    // }, [])

    return <div className="view winner pictured view-win">
        <h2 className="title">CASHOUT</h2>
        <div className="info">
            <img src="/assets/treasure.svg" alt="treasure chest" className="chest" />

            <div className="splash-text">
                <div>
                    <p>You Win</p>
                </div>
                <div className="prize-div">
                    <p className="prize">2000 USDC</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Winner;