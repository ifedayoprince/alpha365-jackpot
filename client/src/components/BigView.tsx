import { Info } from "./Info";

const BigView = ({ }) => {

  // useEffect(() => {
  //   let ctx = animateCardScreen("view-big");

  //   return () => {
  //     ctx.kill();
  //   }
  // }, [])

  return <div className="view view-big">
    <h2 className="title">BIG</h2>
    <Info entry={320} award={334} participants={3121} bets={77} />
  </div>;
}

export default BigView;