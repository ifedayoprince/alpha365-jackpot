


const Menu = () => {

	return <div className="menu">
		<div className="backdrop"></div>

		<div className="drawer">
			<div className="head">
				<img src="/assets/header.png" alt="header" />
			</div>
			<div className="d-body">
				<ul>
					<li><a href="">Game</a></li>
					<li><a href="/rules">Rules</a></li>
					<li><a href="">Wallet</a></li>
				</ul>
				<ul>
					<li><a href="">About Us</a></li>
					<li><a href="">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>;
}


export default Menu;